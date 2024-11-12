import { useTranslation } from "react-i18next";

import CuringSubPage, { CuringDataType } from "./CuringSubPage";

import { ArrowAltCircleDown } from "@/components/icons";

import { useLanguage } from "@/hooks/useLanguage";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

import "./curing.css";

export const CuringPage = () => {
  useLanguage();
  useDocumentTitle("curing");
  const { t, ready } = useTranslation("curing");
  const curingData = Array.from(
    t("data", { returnObjects: true }) as Record<string, CuringDataType>[]
  );
  return (
    <div className="curing-page">
      <div className="hero">
        <div>{t("mainTitle")}</div>
      </div>
      <div className="mx-auto mt-16 px-6 lg:px-0">
        {curingData.map((_, index: number) => {
          const dataI18n = t(`data.${index}`, {
            returnObjects: true,
          }) as CuringDataType;
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
};

export default CuringPage;
