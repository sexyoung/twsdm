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
      <div className="hero">
        <div>CP 值專區</div>
      </div>
      <div className="mx-auto mt-16">
        {(curingData as CuringDataType[]).map((data, index: number) => (
          <div key={index}>
            <CuringSubPage data={data} />
            {index !== curingData.length - 1 && <ArrowAltCircleDown />}
          </div>
        ))}
        <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
      </div>
    </div>
  );
}
