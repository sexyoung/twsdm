import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import stylesheet from "~/styles/assessment.css";

import usCDC from "~/images/us-cdc.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "專業評估" }];

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
          href="https://www.cdc.gov/reproductivehealth/contraception/pdf/summary-chart-us-medical-eligibility-criteria_508tagged.pdf"
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
      </div>
    </div>
  );
}
