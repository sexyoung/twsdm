import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const supportedLanguages = ["en", "zh-TW", "ja-JP", "vi-VN", "id-ID"];

export function useLanguage() {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  // 支援的語系列表

  useEffect(() => {
    // 確保 i18n 已經初始化
    if (!i18n.isInitialized) {
      return;
    }

    // 如果 URL 中沒有語言參數，預設使用英文
    if (!lang) {
      i18n.changeLanguage("en");
      return;
    }

    // 如果語言參數不在支援的語言列表中，使用英文
    if (!supportedLanguages.includes(lang)) {
      i18n.changeLanguage("en");
      return;
    }

    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return { currentLang: lang || "en" };
}
