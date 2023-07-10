import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "專業評估" }];

export default function () {
  return (
    <div>
      <div className="h-[300px] bg-yellow-100" />
      專業評估
    </div>
  );
}
