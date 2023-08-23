// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPills,
  faTablets,
  faSyringe,
  faHospitalSymbol,
} from "@fortawesome/free-solid-svg-icons";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import stylesheet from "~/styles/choice.css";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import choice1 from "~/images/choice1.png";
import choice2 from "~/images/choice2.png";
import choice3 from "~/images/choice3.png";
import choice4 from "~/images/choice4.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "選擇障礙專區" }];

export default function () {
  let { t } = useTranslation("choice");
  return (
    <div>
      <div className="hero choice-banner bg-slate-400">
        <div className="banner-text">{t("banner")}</div>
      </div>
      <div className="bg-[#f6f8f5]">
        <div className="choice-all-content">
          <div className="choice-content">
            <div className="choice-title">{t("title")}</div>
            <div className="choice-text">{t("text1")}</div>
            <div className="choice-text">{t("text2")}</div>
          </div>
          <div className="icons-container">
            <Link className="icon-container" to="/curing">
              <div className="choice-icon">
                <FontAwesomeIcon icon={faPills} color="#9b8e8e" />
              </div>
              <div className="choice-icon-text">{t("iconText1")}</div>
            </Link>
            <Link className="icon-container" to="/curing">
              <div className="choice-icon">
                <FontAwesomeIcon icon={faTablets} color="#9b8e8e" />
              </div>
              <div className="choice-icon-text">{t("iconText2")}</div>
            </Link>
            <Link className="icon-container" to="/curing">
              <div className="choice-icon">
                <FontAwesomeIcon icon={faSyringe} color="#9b8e8e" />
              </div>
              <div className="choice-icon-text">{t("iconText3")}</div>
            </Link>
            <Link className="icon-container" to="/curing">
              <div className="choice-icon">
                <FontAwesomeIcon icon={faHospitalSymbol} color="#9b8e8e" />
              </div>
              <div className="choice-icon-text">{t("iconText4")}</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="choice-img-container">
        <div
          className="choice-img"
          style={{ backgroundImage: `url(${choice1})` }}
        >
          <div className="img-box img1-box">
            <div className="img-title img1-title">{t("imgTitle1")}</div>
            <div
              className="img-text img1-text [&>span]:underline"
              dangerouslySetInnerHTML={{
                __html: t("imgText1").replace(
                  "{{underline}}",
                  `<span>${t("imgTextU1")}</span>`
                ),
              }}
            />
          </div>
        </div>
      </div>
      <div className="choice-img-container">
        <div
          className="choice-img"
          style={{ backgroundImage: `url(${choice2})` }}
        >
          <div className="img-box img2-box">
            <div className="img-text img2-text">
              <div
                className="[&>span]:underline"
                dangerouslySetInnerHTML={{
                  __html: t("imgText21").replace(
                    "{{underline}}",
                    `<span>${t("imgTextU21")}</span>${t("imgTextU22")}<span>${t(
                      "imgTextU23"
                    )}</span>${t("imgTextU24")}`
                  ),
                }}
              />
              <div>{t("imgText22")}</div>
            </div>
            <div className="img-title img2-title">{t("imgTitle2")}</div>
          </div>
        </div>
      </div>
      <div className="choice-img-container">
        <div
          className="choice-img"
          style={{ backgroundImage: `url(${choice3})` }}
        >
          <div className="img-box img3-box">
            <div className="img-title img3-title">{t("imgTitle3")}</div>
            <div
              className="img-text img3-text [&>span]:underline"
              dangerouslySetInnerHTML={{
                __html: t("imgText3").replace(
                  "{{underline}}",
                  `<span>${t("imgTextU3")}</span>`
                ),
              }}
            />
          </div>
        </div>
      </div>
      <div className="choice-img-container">
        <div
          className="choice-img"
          style={{ backgroundImage: `url(${choice4})` }}
        >
          <div className="img-box img4-box">
            <div className="img-text img4-text">{t("imgText4")}</div>
            <div className="img-title img4-title">{t("imgTitle4")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
