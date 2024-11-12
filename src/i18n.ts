import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 使用 Vite 的動態導入功能
const loadLocales = async () => {
  const locales = import.meta.glob("./locales/**/*.json");
  const resources: {
    [lang: string]: {
      [namespace: string]: {
        [key: string]: string;
      };
    };
  } = {};

  for (const path in locales) {
    const module = (await locales[path]()) as {
      default: Record<string, unknown>;
    };
    // 從路徑解析語言和命名空間
    // 例如: ./locales/en/common.json => ['en', 'common']
    const [, lang, namespace] =
      path.match(/\.\/locales\/([^/]+)\/([^.]+)\.json/) || [];

    if (lang && namespace) {
      resources[lang] = resources[lang] || {};
      resources[lang][namespace] = module.default as { [key: string]: string };
    }
  }

  return resources;
};

const initI18n = async () => {
  const resources = await loadLocales();

  i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    // 從資源物件中獲取支援的語言
    supportedLngs: Object.keys(resources),
    // 從第一個語言的資源中獲取所有命名空間
    ns: Object.keys(resources[Object.keys(resources)[0]]),
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });
};

// 初始化 i18n 並導出初始化 promise
export const i18nInstance = initI18n().then(() => i18n);

// 移除直接調用
// initI18n();

export default i18n;
