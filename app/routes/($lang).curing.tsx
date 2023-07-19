import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { StarCheck, StarUnCheck } from "~/components/star";
import stylesheet from "~/styles/curing.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "CP 值專區" }];

export default function () {
  return (
    <div>
      <div className="cp-banner" />
      <div className="mx-auto mt-16 w-fit">
        <div className="mx-auto inline-block w-[600px] align-top">
          <div className="cp-title cp-title1">
            <div className="cp-title-text">
              <div className="leading-[80px]">症狀控制藥</div>
              <div className="cp-title-content">
                Naproxen（能百鎮）
                <br />
                Tranexamic acid（斷血炎）
                <br />
                Ergonovine（縮水蘋果酸麥角新鹼片）
              </div>
            </div>
          </div>
          <div className="cp-short">
            <div className="cp-short-text">微專業短評</div>
            <div className="cp-short-divider" />
          </div>
          <div className="cp-short-content">
            這些藥物是平常我們最容易在藥局、國外代購入手的居家備品，通常以迅速止痛、止血為目標；然而事實上以止血來說，每種藥物平均只能減少30-50%出血量，因此偶而會有女性抱怨即使吃了止血藥仍然在流血。若無法改善症狀，仍應尋求專業醫師協助找出病因。
          </div>
        </div>
        <div className="mx-[30px] inline-block w-[330px] pt-[40px] text-[#857162]">
          <table>
            <tr>
              <th>藥效</th>
              <th></th>
              <th>起效速度</th>
            </tr>
            <tr>
              <td>
                <div className="align-center flex">
                  <StarUnCheck />
                  <StarCheck />
                  <StarCheck />
                </div>
              </td>
              <td>
                <div className="pink-bg cell">緩解經痛</div>
              </td>
              <td>當天</td>
            </tr>
            <tr>
              <td>
                <div className="align-center flex justify-center">
                  <StarUnCheck />
                  <StarCheck />
                  <StarCheck />
                </div>
              </td>
              <td>
                <div className="brown-bg cell">減少出血</div>
              </td>
              <td>當天</td>
            </tr>
            <tr>
              <td>
                <div className="align-center flex justify-center">
                  <StarUnCheck />
                  <StarUnCheck />
                  <StarUnCheck />
                </div>
              </td>
              <td>
                <div className="pink-bg cell">預防復發</div>
              </td>
              <td></td>
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
                <div className="w-[207px]">健保給付</div>
              </td>
              <td>
                <div className="w-[123px]">月經期間每天服用2-3次。</div>
              </td>
            </tr>
          </table>
          <div className="cp-effect-divider " />
          <table>
            <tr>
              <th>副作用</th>
            </tr>
            <tr>
              <td>
                <div>
                  =5%：失眠、盗汗、熱潮紅、水腫
                  <br />
                  1-5%：骨質疏鬆、骨折、情緒障礙
                  <br />
                  {"<1%：肺部纖維化"}
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
