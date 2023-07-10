import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "計畫自由選" }];

export default function () {
  return <div>計畫自由選</div>;
}
