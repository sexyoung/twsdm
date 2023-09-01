import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/styles/curing.css";
// import { StarCheck, StarUnCheck } from "./icons";
import cp1 from "~/images/cp1.png";
import cp2 from "~/images/cp2.png";
import cp3 from "~/images/cp3.png";
import cp5 from "~/images/cp5.png";
import cp6 from "~/images/cp6.png";
import cp7 from "~/images/cp7.png";
import cp8 from "~/images/cp8.png";
import cp9 from "~/images/cp9.png";

import titleCuring1 from "~/images/curing-1.png";
import titleCuring2 from "~/images/curing-2.png";
import titleCuring3 from "~/images/curing-3.png";
import titleCuring4 from "~/images/curing-4.png";
import titleCuring5 from "~/images/curing-5.png";
import titleCuring6 from "~/images/curing-6.png";
import titleCuring7 from "~/images/curing-7.png";
import titleCuring8 from "~/images/curing-8.png";
import titleCuring9 from "~/images/curing-9.png";

import { useTranslation } from "react-i18next";

const titleImage = [
  titleCuring1,
  titleCuring2,
  titleCuring3,
  titleCuring4,
  titleCuring5,
  titleCuring6,
  titleCuring7,
  titleCuring8,
  titleCuring9,
];

const image = {
  cp1,
  cp2,
  cp3,
  cp5,
  cp6,
  cp7,
  cp8,
  cp9,
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export type CuringDataType = {
  title: string;
  titleS: string;
  subtitleS: Array<string>;
  subtitleM: Array<string>;
  shortComment: string;
  // menstrualStar: number;
  // menstrualEffect: string;
  // bleedingStar: number;
  // bleedingEffect: string;
  // relapseStar: number;
  // relapseEffect: string;
  // price: string;
  // convenience: string;
  sideEffect: Array<string>;
};

type CuringSubPageProps = {
  index: number;
  data: CuringDataType;
};

const CuringSubPage = (props: CuringSubPageProps) => {
  const { data, index } = props;
  let { t } = useTranslation("curing");

  return (
    <div className="cp-container">
      <div className="cp-left-block">
        <div className="cp-title">
          <div
            className="mx-auto h-[100px] w-[180px] bg-contain bg-center bg-no-repeat lg:h-full"
            style={{
              backgroundImage: `url(${titleImage[index]})`,
            }}
          />
          <div className="cp-title-text">
            <div className="cp-main-title">{data.title}</div>
            <div className="cp-main-titleS">{data.titleS}</div>
            <div className="cp-title-content">
              {data.subtitleS.map((subtitle, index) => (
                <div key={index}>
                  {subtitle}
                  {index < data.subtitleS.length - 1 && <br />}
                </div>
              ))}
            </div>
            <div className="cp-title-content-m">
              {data.subtitleM.map((subtitle, index) => (
                <div key={index}>
                  {subtitle}
                  {index < data.subtitleM.length - 1 && <br />}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cp-short">
          {t("cpShortText") && (
            <div className="cp-short-text">{t("cpShortText")}</div>
          )}
          {t("cpShortTextS") && (
            <div className="cp-short-textS">{t("cpShortTextS")}</div>
          )}
          <div
            className="cp-short-divider"
            style={{
              backgroundImage: `url(${image.cp2})`,
            }}
          />
        </div>
        <div
          className="cp-short-content"
          dangerouslySetInnerHTML={{ __html: data.shortComment }}
        />
      </div>
      <div className="cp-right-block">
        {/* <table>
          <tr>
            <th>藥效</th>
            <th></th>
            <th>起效速度</th>
          </tr>
          <tr>
            <td>
              <div className="align-center flex">
                {[...Array(3 - data.menstrualStar)].map((e, index) => (
                  <StarUnCheck key={index} />
                ))}
                {[...Array(data.menstrualStar)].map((e, index) => (
                  <StarCheck key={index} />
                ))}
              </div>
            </td>
            <td>
              <div className="pink-bg cell">緩解經痛</div>
            </td>
            <td>{data.menstrualEffect}</td>
          </tr>
          <tr>
            <td>
              <div className="align-center flex justify-center">
                {[...Array(3 - data.bleedingStar)].map((e, index) => (
                  <StarUnCheck key={index} />
                ))}
                {[...Array(data.bleedingStar)].map((e, index) => (
                  <StarCheck key={index} />
                ))}
              </div>
            </td>
            <td>
              <div className="brown-bg cell">減少出血</div>
            </td>
            <td>{data.bleedingEffect}</td>
          </tr>
          <tr>
            <td>
              <div className="align-center flex justify-center">
                {[...Array(3 - data.relapseStar)].map((e, index) => (
                  <StarUnCheck key={index} />
                ))}
                {[...Array(data.relapseStar)].map((e, index) => (
                  <StarCheck key={index} />
                ))}
              </div>
            </td>
            <td>
              <div className="pink-bg cell">預防復發</div>
            </td>
            <td>{data.relapseEffect}</td>
          </tr>
        </table>
        <div className="cp-effect-divider " />
        <table>
          <tr>
            <th>價錢</th>
            <th>便利性</th>
          </tr>
          <tr>
            <td>
              <div className="w-[207px]">{data.price}</div>
            </td>
            <td>
              <div className="w-[123px]">{data.convenience}</div>
            </td>
          </tr>
        </table> */}
        <div
          className="cp-effect-divider"
          style={{
            backgroundImage: `url(${image.cp3})`,
          }}
        />
        <table>
          <tbody>
            <tr>
              <th>{t("sideEffect")}</th>
            </tr>
            <tr>
              <td>
                {data.sideEffect.map((sideEffect, index) => (
                  <div key={index}>
                    {sideEffect}
                    {index < data.sideEffect.length - 1 && <br />}
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CuringSubPage;
