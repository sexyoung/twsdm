import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import stylesheet from "~/styles/curing.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "CP 值專區" }];

export default function () {
  return (
    <div>
      <div className="cp-banner" />
      <div className="cp-container">
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
      CP 值專區
    </div>
  );
}
