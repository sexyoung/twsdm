import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  lang: string;
  openLang: () => void;
};

export default function Links({ lang, openLang }: HeaderProps) {
  let { t } = useTranslation("common");
  const prefix = lang && `/${lang}`;
  const handleClick = () => {
    if ((document.getElementById("menu-toggle") as HTMLInputElement).checked) {
      document.getElementById("menu-toggle")?.click();
      window.scrollTo({
        top: 0,
      });
    }
  };
  return (
    <>
      <li>
        <Link onClick={handleClick} to={`${prefix}/`}>
          {t("menu.home")}
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to={`${prefix}/plan`}>
          {t("menu.plan")}
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to={`${prefix}/choice`}>
          {t("menu.choice")}
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to={`${prefix}/curing`}>
          {t("menu.curing")}
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to={`${prefix}/assessment`}>
          {t("menu.assessment")}
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to={`${prefix}/contact`}>
          {t("menu.contact")}
        </Link>
      </li>
      <li className="relative">
        <span className="cursor-pointer" onClick={openLang}>
          {t(`menu.${lang}`)}
        </span>
      </li>
    </>
  );
}
