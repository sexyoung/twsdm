import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
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

import stylesheet from "~/tailwind.css";

import Header from "./components/header";
import Footer from "./components/footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request, params }: LoaderArgs) => {
  let locale = params.lang || "en"; //await i18next.getLocale(request);
  return json({
    lang: params.lang || "",
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
        <Header lang={lang} />
        <Outlet />
        <Footer lang={lang} />
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
