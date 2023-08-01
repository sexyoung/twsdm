import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import stylesheet from "~/styles/assessment.css";

import usCDC from "~/images/us-cdc.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "專業評估" }];

export default function () {
  return (
    <div>
      <div className="hero">
        <div>專業評估</div>
      </div>
      <div className="container mx-auto max-w-3xl px-10 text-center text-[#7a6f6f]">
        <div className="title">
          賀爾蒙禁忌症評估請參考
          <span className="block md:inline md:after:content-['：']" />
          美國疾管局口服避孕藥適用性彙整表
        </div>
        <img src={usCDC} className="mx-auto w-40" alt="us-cdc" />
        <a
          target="_blank"
          className="mt-10 inline-block rounded-full bg-[#9b8e8e] px-4 py-2 font-bold text-white hover:bg-[#7a6f6f]"
          href="https://www.cdc.gov/reproductivehealth/contraception/pdf/summary-chart-us-medical-eligibility-criteria_508tagged.pdf"
          rel="noreferrer"
        >
          點即前往（英文版）
        </a>

        <div className="title">治療期間建議監測項目</div>
        <ul className="text-left [&>*+*]:mt-4">
          <li>育齡女性：懷孕計畫、超音波、CA-125、肝功能（依臨床考量）</li>
          <li>
            更年前期：超音波、CA-125、FSH、Estradiol、AMH（依臨床考量／自費）、TSH、Free
            T4
          </li>
          <li>
            更年期：超音波、每2年一次乳癌篩檢（年滿40歲及二等親乳癌病史、年滿45歲）、骨密度檢查（自費）
          </li>
        </ul>
      </div>
    </div>
  );
}
