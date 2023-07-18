import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import stylesheet from "~/styles/home.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function () {
  let { t } = useTranslation("home");
  console.log(t("greeting"));

  return (
    <div className="text-[#536942]">
      <div className="hero">
        <div className="text">{t("helloWelcome")}</div>
        <div className="text">{t("thing")}</div>
        <div className="text-lg md:text-lg lg:text-2xl">您的線上微專業諮詢</div>
      </div>
      <div className="section container mx-auto">
        <h2 className="first-title">
          <div className="lg:inline">計畫自由選：</div>
          <div className="lg:inline">三步驟打造自己專屬治療方案</div>
        </h2>
        <div className="first-section mt-10 block md:flex md:gap-7">
          <div className="mb-10 flex-1">
            <div className="img" />
            <div className="title">告訴我們您的主要困擾吧！</div>
            <ul className="desc">
              <li>
                您可能同時有一個以上的治療目的，讓我們先打敗主要敵人，再一一克服難關。
              </li>
              <li>We seek your participation, and help to explore options.</li>
            </ul>
          </div>
          <div className="mb-10 flex-1">
            <div className="img" />
            <div className="title">考量需求</div>
            <ul className="desc">
              <li>以治療優缺點及結果分析探索最適合自己的治療組合！</li>
              <li>
                We help to compare options, and assess value and preference.
              </li>
            </ul>
          </div>
          <div className="mb-10 flex-1">
            <div className="img" />
            <div className="title">與醫師討論</div>
            <ul className="desc">
              <li>展現自我價值觀及高超智慧。</li>
              <li>We reach a decision together, and evaluate the decision.</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Link className="link-btn" to="/plan">
            前往計畫自由選 GO!
          </Link>
        </div>
      </div>
      <div className="section flex flex-col items-center justify-center gap-1 bg-[#f6f8f5]">
        <h2 className="text-center text-2xl md:text-4xl">
          有選擇障礙嗎？
          <br />
          請參考微專業醫師特製的
          <br />
          優選方案
        </h2>
        <div className="my-4 px-10 text-[#ff9900]">
          透過多媒體教學加上臨床模擬諮詢視頻，讓我們更輕鬆地打敗子宮內膜異位症吧！
        </div>
        <Link className="link-btn mt-4" to="/choice">
          前往選擇障礙專區
        </Link>
      </div>
      <div className="section container mx-auto">
        <div className="gap-10 md:flex">
          <div className="flex-[2]">
            ABOUT TREATMENTS
            <h2 className="my-2 text-2xl md:text-4xl">以CP值認識每個治療</h2>
            每個治療可以為我們緩解疾病，但也有各自的優缺點、時效性、副作用及經費考量。透過微專業醫師及常見廣大女性的角度，讓我們來為長期控制疾病多增加一些可能性！
          </div>
          <div className="emoji img flex-1" />
        </div>
        <div className="text-center">
          <Link className="link-btn" to="/curing">
            前往CP值專區
          </Link>
        </div>
      </div>
      <div className="section">
        <h2 className="text-center text-2xl md:text-6xl">
          高級專業人士評估小工具
        </h2>
        <div className="my-10 text-center text-xl text-[#dab200] md:[&>*+*]:before:content-['、'] md:[&>*]:inline">
          <div>賀爾蒙副作用評估</div>
          <div>卵巢癌風險評估</div>
          <div>治療期間監測項目</div>
        </div>
        <div className="text-center">
          <Link className="link-btn" to="/assessment">
            前往專業評估
          </Link>
        </div>
      </div>
    </div>
  );
}
