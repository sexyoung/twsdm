import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "選擇障礙專區" }];

export default function () {
  return <div>選擇障礙專區</div>;
}
