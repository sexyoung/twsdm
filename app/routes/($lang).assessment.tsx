import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import stylesheet from "~/styles/assessment.css";

import logo from "~/images/logo.png";
import usCDC from "~/images/us-cdc.png";
import sr from "~/images/sr.png";
import iota from "~/images/iota.png";
import { getTitle } from "~/utils";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = (x) => {
  const { menu, greeting } = getTitle(x.params?.lang || "en");
  return [
    { title: menu.assessment },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: menu.assessment,
    },
    {
      name: "description",
      content: greeting,
    },
    {
      name: "og:image",
      content: logo,
    },
  ];
};

export const handle = {
  i18n: "assessment",
};

export default function () {
  let { t } = useTranslation("assessment");
  return (
    <div>
      <div className="hero">
        <div>{t("hero")}</div>
      </div>
      <div className="container mx-auto max-w-3xl px-10 text-center text-[#7a6f6f]">
        <div className="title">
          {t("refer")}
          <span className="block md:inline md:after:content-['：']" />
          {t("cdc")}
        </div>
        <img src={usCDC} className="mx-auto w-40" alt="us-cdc" />
        <a
          target="_blank"
          className="mt-10 inline-block rounded-full bg-[#9b8e8e] px-4 py-2 font-bold text-white hover:bg-[#7a6f6f]"
          href="https://www.cdc.gov/contraception/media/pdfs/2024/07/us-mec-summary-chart-color-508.pdf"
          rel="noreferrer"
        >
          {t("click2Eng")}
        </a>
        <div className="title">{t("recommended")}</div>
        <ul className="text-left [&>*+*]:mt-4">
          <li>{t("WCBPs")}</li>
          <li>{t("Premenopause")}</li>
          <li>{t("Postmenopause")}</li>
        </ul>
        <div className="mt-10 text-left">
          <img src={iota} alt="IOTA" className="mx-auto mb-4" />
          {t("IOTA")}
        </div>
        <img src={sr} alt="SR" />
      </div>
    </div>
  );
}
