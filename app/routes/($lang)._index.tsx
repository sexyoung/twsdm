import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import stylesheet from "~/styles/home.css";

import icon1 from "~/images/home-1.png";
import icon2 from "~/images/home-2.png";
import icon3 from "~/images/home-3.png";
import icon4 from "~/images/home-4.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function () {
  let { t } = useTranslation("home");
  return (
    <div className="text-[#536942]">
      <div className="hero">
        <div className="text">{t("title1")}</div>
        <div className="text">{t("title2")}</div>
        <div className="text-lg md:text-lg lg:text-2xl">{t("title3")}</div>
      </div>
      <div className="section container mx-auto  max-w-4xl">
        <h2 className="first-title">
          <img src={icon1} className="mx-auto w-20" alt="icon" />
          <div className="lg:inline">{t("planFreeChoose")}</div>
          <div className="lg:inline">{t("3step")}</div>
        </h2>
        <div className="first-section mt-10 block md:flex md:gap-7">
          <div className="mb-10 flex-1">
            <div className="img" />
            <div className="title">{t("3stepArticle.0.title")}</div>
            <ul className="desc">
              <li>{t("3stepArticle.0.text")}</li>
            </ul>
          </div>
          <div className="mb-10 flex-1">
            <div className="img" />
            <div className="title">{t("3stepArticle.1.title")}</div>
            <ul className="desc">
              <li>{t("3stepArticle.1.text")}</li>
            </ul>
          </div>
          <div className="mb-10 flex-1">
            <div className="img" />
            <div className="title">{t("3stepArticle.2.title")}</div>
            <ul className="desc">
              <li>{t("3stepArticle.2.text")}</li>
            </ul>
          </div>
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
        <div className="my-4 px-10 text-[#ff9900]">
          {t("choiceBarrier.text")}
        </div>
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
      <div className="section">
        <img src={icon4} className="mx-auto w-20" alt="icon" />
        <h2 className="text-center text-2xl md:text-6xl">
          {t("evaluate.title")}
        </h2>
        <div className="my-10 text-center text-xl text-[#dab200] md:[&>*+*]:before:content-['、'] md:[&>*]:inline">
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
