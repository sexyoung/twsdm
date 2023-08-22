import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import * as gtag from "~/utils/gtags.client";

/** @deprecated */
import { getUser } from "~/session.server";
// import i18next from "~/i18next.server";

import logo from "~/images/twsdm.gif";
import icon5 from "~/images/home-5.png";

import stylesheet from "~/tailwind.css";

import Modal from "./components/modal";
import Header from "./components/header";
import Footer from "./components/footer";
import LangModal from "./components/LangModal";
import { userPrefs } from "./cookie.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request, params }: LoaderArgs) => {
  let locale = params.lang || "en"; //await i18next.getLocale(request);

  const cookie = await userPrefs.parse(request.headers.get("Cookie"));

  // 如果 cookie.keepLang 沒東西，就要記下來
  const init = !cookie?.keepLang
    ? {
        headers: {
          "Set-Cookie": await userPrefs.serialize({ keepLang: true }),
        },
      }
    : {};

  const browserLang =
    request.headers
      .get("accept-language")
      ?.split(",")
      .map((l) => l.split(";").shift())
      .shift() || "";

  // 如果 params.lang 為空，判斷語系是否為英文，否則轉頁
  if (
    !params.lang &&
    !cookie?.keepLang &&
    request.headers.get("accept-language")
  ) {
    if (!["en-US", "en"].includes(browserLang)) {
      return redirect(`/${browserLang}`, init);
    }
  }

  return json(
    {
      lang: params.lang || "",
      locale,
      user: await getUser(request),
      gaTrackingId: process.env.GA_TRACKING_ID,
    },
    init
  );
};

export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

const isAtBottom = (): boolean =>
  document.documentElement.clientHeight + window.scrollY >=
  document.documentElement.scrollHeight;

const isToday = () => !!document.cookie.includes("status=stillToday");

export default function App() {
  // const location = useLocation();
  // Get the locale from the loader
  let { locale, lang, gaTrackingId } = useLoaderData<typeof loader>();

  let { t, i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);
  const [goTop, setGoTop] = useState("hidden");
  const [isHeaderBG, setIsHeaderBG] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);
  const [isPlayLogo, setIsPlayLogo] = useState<boolean | null>(null);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 3) {
      setGoTop("");
    } else {
      setGoTop("hidden");
    }

    setIsHeaderBG(window.scrollY > 414);

    if (isAtBottom()) setShowModal(true);
  };

  const handleCloseModal = () => {
    document.body.classList.remove("overflow-hidden");
    setShowModal(false);
    setShowLangModal(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (document.cookie.includes("twsdmlogo=1")) return setIsPlayLogo(false);
    document.cookie = "twsdmlogo=1";
    setIsPlayLogo(true);
    setTimeout(() => setIsPlayLogo(false), 3000);
  }, []);

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [gaTrackingId]);

  return (
    <html lang={locale} className="h-full" dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {!gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${gaTrackingId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        <Header
          isHeaderBG={isHeaderBG}
          openLang={setShowLangModal.bind(null, true)}
          lang={lang}
        />
        <Outlet />
        <div className="mt-10 text-center text-[#9b8e8e]">
          <img src={icon5} className="mx-auto w-20" alt="icon" />
          <h2 className="text-2xl lg:text-4xl">我們需要您寶貴的意見</h2>
          <div className="my-4 px-4">
            只要幾秒，表達您對醫療環境的看法！
            <br />
            完成這個簡單的調查並與我們分享
            <span className="block md:inline" />
            您對整個醫療環境的評論！
          </div>
          <div className="flex justify-center gap-4">
            <Link to={t("formLink.personal")} className="link-btn">
              個人表單
            </Link>
            <Link to={t("formLink.pro")} className="link-btn">
              醫療人員表單
            </Link>
          </div>
        </div>
        <Footer lang={lang} openLang={setShowLangModal.bind(null, true)} />
        {showModal && !isToday() && (
          <Modal
            proLink={t("formLink.pro")}
            personLink={t("formLink.personal")}
            onClose={handleCloseModal}
          />
        )}
        {showLangModal && <LangModal lang={lang} onClose={handleCloseModal} />}
        <div
          onClick={bottomToTop}
          className={`fixed bottom-7 right-7 flex h-[31px] w-[31px] cursor-pointer items-center justify-center bg-slate-400 opacity-80 ${goTop}`}
        >
          <svg
            className="ast-arrow-svg w-3 rotate-180 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            width="26px"
            height="16.043px"
            viewBox="57 35.171 26 16.043"
            enableBackground="new 57 35.171 26 16.043"
            xmlSpace="preserve"
          >
            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
          </svg>
        </div>
        {isPlayLogo === null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white" />
        )}
        {isPlayLogo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <img src={logo} alt="TWSDM" className="w-60" />
          </div>
        )}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
