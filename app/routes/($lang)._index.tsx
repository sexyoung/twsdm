import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import stylesheet from "~/styles/home.css";

import icon1 from "~/images/home-1.png";
import icon2 from "~/images/home-2.png";
import icon3 from "~/images/home-3.png";
import icon4 from "~/images/home-4.png";

import endometriosis0 from "~/images/endometriosis-0.png";
import endometriosis1 from "~/images/endometriosis-1.png";
import endometriosis2 from "~/images/endometriosis-2.png";
import endometriosis3 from "~/images/endometriosis-3.png";
import endometriosis4 from "~/images/endometriosis-4.png";

const endometriosis = [
  endometriosis0,
  endometriosis1,
  endometriosis2,
  endometriosis3,
  endometriosis4,
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

// export let handle = { i18n: "home" };

export default function () {
  let { t } = useTranslation("home");
  return (
    <div className="text-[#9b8e8e]">
      <div className="hero">
        <div className="text container mx-auto text-center">{t("title1")}</div>
        <div className="text container mx-auto text-center">{t("title2")}</div>
        <div className="container mx-auto text-center text-lg md:text-lg lg:text-2xl">
          {t("title3")}
        </div>
      </div>
      <div className="section container mx-auto  max-w-4xl">
        <div className="my-2 text-center text-2xl font-medium md:text-4xl">
          {t("whatIsEndometriosis")}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-4">
          {[...Array(5).keys()].map((index) => (
            <div
              className="mb-10 flex-shrink-0 flex-grow-[1] basis-[calc(33.333333%-20px)]"
              key={index}
            >
              <div className="img text-center">
                <img
                  src={endometriosis[index]}
                  alt={endometriosis[index]}
                  className="mx-auto inline-block max-w-[200px]"
                />
              </div>
              <div className="text-center text-2xl font-medium">
                {t(`endometriosis.${index}.title`)}
              </div>
              <ul className="desc">
                <li>{t(`endometriosis.${index}.text`)}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="section container mx-auto  max-w-4xl">
        <h2 className="first-title">
          <img src={icon1} className="mx-auto w-20" alt="icon" />
          <div className="lg:inline">{t("planFreeChoose")}</div>
          <div className="lg:inline">{t("3step")}</div>
        </h2>
        <div className="first-section mt-10 block md:flex md:gap-7">
          {[...Array(3).keys()].map((index) => (
            <div className="mb-10 flex-1" key={index}>
              <div className="img" />
              <div className="title">{t(`3stepArticle.${index}.title`)}</div>
              <ul className="desc">
                <li>{t(`3stepArticle.${index}.text`)}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link className="link-btn" to="/plan">
            {t("go2freeChoose")}
          </Link>
        </div>
      </div>
      <div className="section flex flex-col items-center justify-center gap-1 bg-[#f6f8f5]">
        <img src={icon2} className="mx-auto w-20" alt="icon" />
        <h2 className="text-center text-2xl md:text-4xl">
          {t("choiceBarrier.title1")}
          <br />
          {t("choiceBarrier.title2")}
          <br />
          {t("choiceBarrier.title3")}
        </h2>
        <div className="my-4 px-10">{t("choiceBarrier.text")}</div>
        <Link className="link-btn mt-4" to="/choice">
          {t("choiceBarrier.goTo")}
        </Link>
      </div>
      <div className="section container mx-auto text-center">
        <img src={icon3} className="mx-auto w-20" alt="icon" />
        <h2 className="my-2 text-2xl md:text-4xl">{t("treatments.title")}</h2>
        <div className="mx-auto mb-10 max-w-2xl">{t("treatments.text")}</div>
        <div className="text-center">
          <Link className="link-btn" to="/curing">
            {t("treatments.go2CP")}
          </Link>
        </div>
      </div>
      <div className="section bg-[#f6f8f5]">
        <img src={icon4} className="mx-auto w-20" alt="icon" />
        <h2 className="text-center text-2xl md:text-6xl">
          {t("evaluate.title")}
        </h2>
        <div className="my-10 text-center text-xl text-[#dbc9c9] md:[&>*+*]:before:content-['、'] md:[&>*]:inline">
          <div>{t("evaluate.text1")}</div>
          <div>{t("evaluate.text2")}</div>
          <div>{t("evaluate.text3")}</div>
        </div>
        <div className="text-center">
          <Link className="link-btn" to="/assessment">
            {t("evaluate.go2Evaluate")}
          </Link>
        </div>
      </div>
    </div>
  );
}
