import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import stylesheet from "~/styles/assessment.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "專業評估" }];

export default function () {
  return (
    <div>
      <div className="hero">
        <div>@todo這邊要放些字</div>
      </div>
      專業評估
    </div>
  );
}
