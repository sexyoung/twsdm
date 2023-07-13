import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import stylesheet from "~/styles/contact.css";

import people from "~/images/361068627_1015588909782458_8471306656182809679_n.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "關於我們" }];

export default function () {
  return (
    <div>
      <div className="hero">
        <h2 className="text-2xl md:text-7xl">我們正努力建立微專業社群網路</h2>
      </div>
      <div className="container mx-auto max-w-[800px] px-10  text-[#4e81bd]">
        <div className="mb-5 mt-10 border-b border-b-[#4e81bd] pb-5 text-2xl">
          子宮內膜異位症 | 多元主題、創新設計
        </div>
        『媽媽今天很兇！』、『老婆這幾天怪怪的』、『學妹怎麼又請假？』
        在我們的記憶中，總有那麼一位女性每個月可能因為難以忍受的身體不適而造成工作、家庭及心理上的干擾。
        她們可能時常拜訪急診、遍尋傳統療法、復發反覆手術，還要努力在治療副作用和外人異樣的眼光下堅強...
        <h2 className="title">女性觀點出發</h2>
        在短暫的門診諮詢時間，您是否因為醫護人員講解太多專有名詞、提供過於繁雜治療選項、突如其來令人驚訝的病情告知、無法理解卻又難以啟齒、不知道該問什麼問題卻有想說些什麼的種種困擾而致使您覺得就醫權利受損？
        我們應用專業醫療知識、簡化醫學名詞解釋、搭配圖像理解，讓您與醫護人員站在平衡的知識水平，了解自我病情並達成設定治療目標！
        <h2 className="title">結合三大元素</h2>
        在2022年，我們為了解決臨床溝通常見的問題，並且考量在多媒體時代運用有別於以往的知識平台，我們與國際接軌，透過教育心理研究，應用多媒體學習原則、溝通技巧及人工智慧設計全新的醫病溝通工具。
        <h2 className="title">產學建教合作</h2>
        感謝國立臺灣大學醫學教育暨生醫倫理學科暨硏究所、雲林科技大學提供技術指導、研究諮詢及合作。未來，我們將進一步透過智慧裝置進行互動及視覺化，並將我們的成果應用於台大醫院體系，並透過國內婦產科相關學會推廣，讓更多有需求的女性朋友可以自行打造專屬的治療套餐！
        <img
          src={people}
          alt="people"
          className="mx-auto w-full max-w-[800px]"
        />
        <div className="text-center text-4xl">@todo 這邊放一個 google 表單</div>
      </div>
    </div>
  );
}
