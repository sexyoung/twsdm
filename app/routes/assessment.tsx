import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "專業評估" }];

export default function () {
  return <div>專業評估</div>;
}
