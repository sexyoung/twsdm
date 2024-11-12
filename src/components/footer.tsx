import { useTranslation } from "react-i18next";

import Links from "./links";

type FooterProps = {
  lang: string;
  openLang: () => void;
};

export default function Footer({ lang, openLang }: FooterProps) {
  const { t } = useTranslation("common");
  return (
    <div className="mt-10 bg-slate-100">
      <footer className="container mx-auto py-5 text-center text-[#9b8e8e]">
        <ul className="my-5 inline-block [&>*]:mx-2 [&>*]:my-2 sm:[&>*]:block md:[&>*]:inline-block">
          <Links {...{ lang }} openLang={openLang} />
        </ul>
        <div className="flex-1 px-4">
          {t("footer.declaration")}
          <br />
          {t("footer.copyright")}
        </div>
      </footer>
    </div>
  );
}
