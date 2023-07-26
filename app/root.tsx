import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
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

/** @deprecated */
import { getUser } from "~/session.server";
// import i18next from "~/i18next.server";
import formLink from "~/data/form.json";

import stylesheet from "~/tailwind.css";

import Modal from "./components/modal";
import Header from "./components/header";
import Footer from "./components/footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request, params }: LoaderArgs) => {
  let locale = params.lang || "en"; //await i18next.getLocale(request);
  return json({
    lang: (params.lang || "") as keyof typeof formLink,
    locale,
    user: await getUser(request),
  });
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
  // Get the locale from the loader
  let { locale, lang } = useLoaderData<typeof loader>();

  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);
  const [goTop, setGoTop] = useState("hidden");
  const [isHeaderBG, setIsHeaderBG] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <html lang={locale} className="h-full" dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Header isHeaderBG={isHeaderBG} lang={lang} />
        <Outlet />
        {
          <div className="text-center text-[#536942]">
            <h2 className="text-4xl">我們需要您寶貴的意見</h2>
            <div className="my-4">
              只要幾秒，表達您對醫療環境的看法！
              <br />
              完成這個簡單的調查並與我們分享您對整個醫療環境的評論！
            </div>
            <div className="flex justify-center gap-4">
              <Link
                to={formLink[lang].person}
                className="rounded-full bg-[#4e81bd] px-4 py-2 font-bold text-white hover:bg-[#3e6796]"
              >
                個人表單
              </Link>
              <Link
                to={formLink[lang].pro}
                className="rounded-full bg-[#4e81bd] px-4 py-2 font-bold text-white hover:bg-[#3e6796]"
              >
                醫療人員表單
              </Link>
            </div>
          </div>
        }
        <Footer lang={lang} />
        {showModal && !isToday() && (
          <Modal
            proLink={formLink[lang].pro}
            personLink={formLink[lang].person}
            onClose={handleCloseModal}
          />
        )}
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
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
