import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { ArrowAltCircleDown } from "~/components/icons";
import stylesheet from "~/styles/curing.css";
import curingData from "~/data/curing.json";
import type { CuringDataType } from "~/components/CuringSubPage";
import CuringSubPage from "~/components/CuringSubPage";
import { useTranslation } from "react-i18next";
import { getTitle } from "~/utils";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = (x) => {
  const { menu, greeting } = getTitle(x.params?.lang || "en");
  return [
    { title: menu.curing },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: menu.curing,
    },
    {
      name: "description",
      content: greeting,
    },
  ];
};

export default function () {
  let { t, ready } = useTranslation("curing");
  return (
    <div>
      <div className="hero">
        <div>CP 值專區</div>
      </div>
      <div className="mx-auto mt-16">
        {(curingData as CuringDataType[]).map((data, index: number) => {
          const dataI18n: CuringDataType = t(`data.${index}`, {
            returnObjects: true,
          });
          if (!ready) return null;
          return (
            <div key={index}>
              <CuringSubPage data={dataI18n} />
              {index !== curingData.length - 1 && <ArrowAltCircleDown />}
            </div>
          );
        })}
        <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
      </div>
    </div>
  );
}
