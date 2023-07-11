import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "關於我們" }];

export default function () {
  return (
    <div>
      <div className="h-[414px] bg-slate-400 bg-cover bg-center text-white md:h-[480px] lg:h-[655px]" />
      關於我們
    </div>
  );
}
