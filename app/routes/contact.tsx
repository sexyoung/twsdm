import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "關於我們" }];

export default function () {
  return <div>關於我們</div>;
}
