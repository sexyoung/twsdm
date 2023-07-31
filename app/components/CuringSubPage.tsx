import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/styles/curing.css";
// import { StarCheck, StarUnCheck } from "./icons";

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
  data: CuringDataType;
};

export const CuringSubPage = (props: CuringSubPageProps) => {
  const { data } = props;

  return (
    <div className="my-[100px]">
      <div className="mx-auto inline-block w-[600px] align-top">
        <div className="cp-title cp-title1">
          <div className="cp-title-text">
            <div className="text-[70px] leading-[80px]">{data.title}</div>
            <div className="text-[60px] leading-[80px]">{data.titleS}</div>
            <div className="cp-title-content">
              {data.subtitleS.map((subtitle, index) => (
                <>
                  {subtitle}
                  {index < data.subtitleS.length - 1 && <br />}
                </>
              ))}
            </div>
            <div className="cp-title-content-m">
              {data.subtitleM.map((subtitle, index) => (
                <>
                  {subtitle}
                  {index < data.subtitleM.length - 1 && <br />}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="cp-short">
          <div className="cp-short-text">微專業短評</div>
          <div className="cp-short-divider" />
        </div>
        <div className="cp-short-content">{data.shortComment}</div>
      </div>
      <div className="mx-[30px] inline-block w-[330px] pt-[40px] text-[#857162]">
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
        <div className="cp-effect-divider " />
        <table>
          <tr>
            <th>副作用</th>
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
        </table>
      </div>
    </div>
  );
};

export default CuringSubPage;
