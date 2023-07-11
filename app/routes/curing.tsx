import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "CP 值專區" }];

export default function () {
  return (
    <div>
      <div className="h-[414px] bg-slate-400 bg-cover bg-center text-white md:h-[480px] lg:h-[655px]" />
      CP 值專區
    </div>
  );
}
