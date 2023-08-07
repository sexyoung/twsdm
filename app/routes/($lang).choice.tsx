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

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "選擇障礙專區" }];

export default function () {
  return (
    <div>
      <div className="hero choice-banner bg-slate-400">
        <div className="banner-text">有選擇障礙嗎？</div>
      </div>
      <div className="bg-[#f6f8f5]">
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
            <Link className="icon-container" to="/curing">
              <div className="choice-icon">
                <FontAwesomeIcon icon={faPills} color="#9b8e8e" />
              </div>
              <div className="choice-icon-text">症狀控制藥物</div>
            </Link>
            <Link className="icon-container" to="/curing">
              <div className="choice-icon">
                <FontAwesomeIcon icon={faTablets} color="#9b8e8e" />
              </div>
              <div className="choice-icon-text">口服賀爾蒙</div>
            </Link>
            <Link className="icon-container" to="/curing">
              <div className="choice-icon">
                <FontAwesomeIcon icon={faSyringe} color="#9b8e8e" />
              </div>
              <div className="choice-icon-text">性腺激素釋放素促進劑</div>
            </Link>
            <Link className="icon-container" to="/curing">
              <div className="choice-icon">
                <FontAwesomeIcon icon={faHospitalSymbol} color="#9b8e8e" />
              </div>
              <div className="choice-icon-text">手術</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="choice-img-container">
        <div className="choice-img img1">
          <div className="img-box img1-box">
            <div className="img-title img1-title">迅速缓解經痛</div>
            <div className="img-text img1-text">
              目前大部分藥物對於控制經痛的效益皆不錯，所以可以著重在時效性、副作用、經費等，或同時結合多種治療方式。若沒有特殊禁忌並且已嘗試過症狀控制藥物，可以先嘗試
              <span className="underline">第四代黃體素異位寧</span>。
            </div>
          </div>
        </div>
      </div>
      <div className="choice-img-container">
        <div className="choice-img img2">
          <div className="img-box img2-box">
            <div className="img-text img2-text">
              症狀控制藥物一直以來是我們的第一線選擇，但效果相對有限。在沒有禁忌症的情況下，我們建議可以加上
              <span className="underline">黛麗安、柳菩林</span>，或搭配
              <span className="underline">子宮内投藥避孕器</span>做長期控制。
              <br />
              另外也可以透過子宮內膜檢查了解出血原因，而對於已完成生育之女性則可考慮子宮內膜燒灼術或其他侵入性手術。
            </div>
            <div className="img-title img2-title">迅速減少出血</div>
          </div>
        </div>
      </div>
      <div className="choice-img-container">
        <div className="choice-img img3">
          <div className="img-box img3-box">
            <div className="img-title img3-title">長期預防復發</div>
            <div className="img-text img3-text bg-[#a7c5cc]">
              為保存卵巢品質、預防反覆復發及手術，目前建議針對卵巢巧克力囊腫應採取長期控制。適合長期使用的藥物治療包含：
              <span className="underline">異位寧、黛麗安</span>等口服賀爾蒙。
            </div>
          </div>
        </div>
      </div>
      <div className="choice-img-container">
        <div className="choice-img img4">
          <div className="img-box img4-box">
            <div className="img-text img4-text">
              任何時候臨床醫師懷疑有惡性腫瘤的可能時，都建議進行手術並取得檢體化驗。此外，手術治療也是藥物治療相對不理想時的最後一道防線。
            </div>
            <div className="img-title img4-title">
              對腫瘤有疑慮丶藥物治療失敗
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
