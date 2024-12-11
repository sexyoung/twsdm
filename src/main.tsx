import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { initGA } from "./analytics";
import { i18nInstance } from "./i18n";

import "./i18n";
import "./index.css";
const trackingId = import.meta.env.VITE_GA_TRACKING_ID;

if (trackingId) {
  initGA(trackingId);
  console.log(`GA initialized with ID: ${trackingId}`);
} else {
  console.warn("GA tracking ID is missing.");
}

// 等待 i18n 初始化完成後再渲染應用
i18nInstance.then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
