import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./i18n";
import "./index.css";

import { i18nInstance } from "./i18n";

// 等待 i18n 初始化完成後再渲染應用
i18nInstance.then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
