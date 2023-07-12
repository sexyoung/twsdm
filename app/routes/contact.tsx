import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import stylesheet from "~/styles/contact.css";

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
      關於我們
    </div>
  );
}
