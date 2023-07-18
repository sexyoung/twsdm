import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import stylesheet from "~/styles/plan.css";

import p1 from "~/images/1-2.webp";
import p2 from "~/images/2-2.webp";
import p3 from "~/images/3-2.webp";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "計畫自由選" }];

export default function () {
  const smoothTo = (targetId: string, e: { preventDefault: () => void }) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div>
      <div className="hero">
        <div className="text">超簡單三步驟</div>
        <div className="text">自我打造專屬治療方案</div>
      </div>

      <div className="section">
        <div className="title">步驟一：告訴我們您的主要困擾吧！</div>
        <div className="desc my-6 text-xl">
          在決定任何的治療前，我們須先了解您在3-6個月內是否有懷孕計畫，再考慮針對不同目的將治療分成3大類：
        </div>
        <div className="plan-block">
          <Link to="#p1" onClick={smoothTo.bind(null, "p1")}>
            <div />
          </Link>
          <Link to="#p2" onClick={smoothTo.bind(null, "p2")}>
            <div />
          </Link>
          <Link to="#p3" onClick={smoothTo.bind(null, "p3")}>
            <div />
          </Link>
          <div />
        </div>
        <div className="plan-table">
          <img id="p1" src={p1} alt="經痛" />
          <img id="p2" src={p2} alt="異常出血" />
          <img id="p3" src={p3} alt="巧克力囊腫" />
        </div>
      </div>
    </div>
  );
}
