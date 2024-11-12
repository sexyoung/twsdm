import { useTranslation } from "react-i18next";

import { useLanguage } from "@/hooks/useLanguage";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

import people from "@/images/361068627_1015588909782458_8471306656182809679_n.png";

import "./contact.css";

export const ContactPage = () => {
  useLanguage();
  useDocumentTitle("contact");
  const { t } = useTranslation("contact");
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
};

export default ContactPage;
