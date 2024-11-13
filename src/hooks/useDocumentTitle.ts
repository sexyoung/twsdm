import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useDocumentTitle = (titleKey: string) => {
  const { t } = useTranslation("common");

  useEffect(() => {
    const prevTitle = document.title;
    document.title = t(`menu.${titleKey}`);

    return () => {
      document.title = prevTitle;
    };
  }, [titleKey, t]);
};
