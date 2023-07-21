import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { ArrowAltCircleDown } from "~/components/icons";
import stylesheet from "~/styles/curing.css";
import curingData from "~/data/curing.json";
import type { CuringDataType } from "~/components/CuringSubPage";
import CuringSubPage from "~/components/CuringSubPage";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "CP 值專區" }];

export default function () {
  return (
    <div>
      <div className="cp-banner" />
      <div className="mx-auto mt-16 w-fit">
        {curingData.map((data: CuringDataType, index: number) => (
          <>
            <CuringSubPage key={index} data={data} />
            {index !== curingData.length - 1 && <ArrowAltCircleDown />}
          </>
        ))}
        <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
      </div>
    </div>
  );
}
