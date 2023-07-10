import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "CP 值專區" }];

export default function () {
  return (
    <div>
      <div className="h-[300px] bg-yellow-100" />
      CP 值專區
    </div>
  );
}
