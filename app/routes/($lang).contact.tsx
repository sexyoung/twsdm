import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import stylesheet from "~/styles/contact.css";

import logo from "~/images/logo.png";
import people from "~/images/361068627_1015588909782458_8471306656182809679_n.png";
import { useTranslation } from "react-i18next";
import { getTitle } from "~/utils";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = (x) => {
  const { menu, greeting } = getTitle(x.params?.lang || "en");
  return [
    { title: menu.contact },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: menu.contact,
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

export const handle = {
  i18n: "contact",
};

export default function () {
  let { t } = useTranslation("contact");
  return (
    <div>
      <div className="hero">
        <div className="text">{t("hero")}</div>
      </div>
      <div className="container mx-auto max-w-3xl px-10  text-[#9b8e8e]">
        <div className="mb-5 mt-10 border-b border-b-[#9b8e8e] pb-5 text-2xl">
          {t("title")}
        </div>
        {t("text")}
        <h2 className="title">{t("articles.0.title")}</h2>
        {t("articles.0.text")}
        <h2 className="title">{t("articles.1.title")}</h2>
        {t("articles.1.text")}
        <h2 className="title">{t("articles.2.title")}</h2>
        {t("articles.2.text")}
        <img src={people} alt="people" className="mx-auto w-full max-w-3xl" />
      </div>
    </div>
  );
}
