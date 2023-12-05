import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { ArrowAltCircleDown } from "~/components/icons";
import stylesheet from "~/styles/curing.css";
import type { CuringDataType } from "~/components/CuringSubPage";
import CuringSubPage from "~/components/CuringSubPage";
import logo from "~/images/logo.png";
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
    {
      name: "og:image",
      content: logo,
    },
  ];
};

export default function () {
  let { t, ready } = useTranslation("curing");
  const curingData = Array.from(t("data", { returnObjects: true }) as any);
  return (
    <div>
      <div className="hero">
        <div>{t("mainTitle")}</div>
      </div>
      <div className="mx-auto mt-16 px-6 lg:px-0">
        {(curingData as CuringDataType[]).map((data, index: number) => {
          const dataI18n: CuringDataType = t(`data.${index}`, {
            returnObjects: true,
          });
          if (!ready) return null;
          return (
            <div key={index}>
              <CuringSubPage index={index} data={dataI18n} />
              {index !== curingData.length - 1 && <ArrowAltCircleDown />}
            </div>
          );
        })}
        <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
      </div>
    </div>
  );
}
