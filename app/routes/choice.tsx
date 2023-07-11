// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import stylesheet from "~/styles/choice.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "選擇障礙專區" }];

export default function () {
  return (
    <>
      <div className="choice-banner bg-slate-400">
        <div className="banner-text">有選擇障礙嗎？</div>
      </div>
      <div className="choice-all-content">
        <div className="choice-content">
          <div className="choice-title">
            即使是專業的醫師，也無法在短時間傳達所有治療的效益、時效性及副作用
          </div>
          <div className="choice-text">
            透過我們的預選方案，帶您初步認識大部分女性接受的第一線治療選項。
          </div>
          <div className="choice-text">
            在進一步的抽血報告及影像檢查出爐前，若沒有禁忌症，您可以先嘗試以下這些方案並在下次回診前與醫師討論您的使用心得。
          </div>
        </div>
        <div className="icons-container">
          <div className="icon-container" onClick={() => {}}>
            <div className="choice-icon">
              {/* <FontAwesomeIcon icon={["fas", "pills"]} /> */}
            </div>
            <div className="choice-icon-text">症狀控制藥物</div>
          </div>
          <div className="icon-container" onClick={() => {}}>
            <div className="choice-icon">
              {/* <FontAwesomeIcon icon={["fas", "pills"]} /> */}
            </div>
            <div className="choice-icon-text">口服賀爾蒙</div>
          </div>
          <div className="icon-container" onClick={() => {}}>
            <div className="choice-icon">
              {/* <FontAwesomeIcon icon={["fas", "pills"]} /> */}
            </div>
            <div className="choice-icon-text">性腺激素釋放素促進劑</div>
          </div>
          <div className="icon-container" onClick={() => {}}>
            <div className="choice-icon">
              {/* <FontAwesomeIcon icon={["fas", "pills"]} /> */}
            </div>
            <div className="choice-icon-text">手術</div>
          </div>
        </div>
      </div>
      <div className="h-fit p-[10px]">
        <div className="choice-img1">1</div>
      </div>
      <div className="choice-img2">2</div>
      <div className="choice-img3">3</div>
      <div className="choice-img4">4</div>
    </>
  );
}
