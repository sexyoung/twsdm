import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import AssessmentPage from "@/pages/AssessmentPage";
import ChoicePage from "@/pages/ChoicePage";
import CuringPage from "@/pages/CuringPage";
import PlanPage from "@/pages/PlanPage";
import ContactPage from "@/pages/ContactPage";

import logo from "@/images/twsdm.gif";
import icon5 from "@/images/home-5.png";
import twendometriosis from "@/images/tw-endometriosis.png";
import Footer from "@/components/footer";
import Modal from "@/components/modal";
import LangModal from "@/components/LangModal";
import Header from "@/components/header";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const isAtBottom = (): boolean =>
  document.documentElement.clientHeight + window.scrollY >=
  document.documentElement.scrollHeight;

const isToday = () => !!document.cookie.includes("status=stillToday");

const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID;
function App() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [goTop, setGoTop] = useState("hidden");
  const [isHeaderBG, setIsHeaderBG] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);
  const [isPlayLogo, setIsPlayLogo] = useState(true);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 3) {
      setGoTop("");
    } else {
      setGoTop("hidden");
    }

    setIsHeaderBG(window.scrollY > 414);

    if (isAtBottom()) setShowModal(true);
  };

  const handleCloseModal = () => {
    document.body.classList.remove("overflow-hidden");
    setShowModal(false);
    setShowLangModal(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (document.cookie.includes("twsdmlogo=1")) return setIsPlayLogo(false);
    document.cookie = "twsdmlogo=1";
    setIsPlayLogo(true);
    setTimeout(() => setIsPlayLogo(false), 3000);
  }, []);

  useEffect(() => {
    if (!gaTrackingId) return;

    // 动态创建并添加 GA 脚本
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`;
    script.async = true;
    document.head.appendChild(script);

    // 初始化 GA
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", gaTrackingId, {
      page_path: window.location.pathname,
    });

    // 清理函数
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Header
          isHeaderBG={isHeaderBG}
          openLang={setShowLangModal.bind(null, true)}
          lang={lang}
        />
        <Routes>
          <Route path="/:lang?" element={<HomePage />} />
          <Route path="/:lang?/assessment" element={<AssessmentPage />} />
          <Route path="/:lang?/choice" element={<ChoicePage />} />
          <Route path="/:lang?/curing" element={<CuringPage />} />
          <Route path="/:lang?/plan" element={<PlanPage />} />
          <Route path="/:lang?/contact" element={<ContactPage />} />
        </Routes>
        <div className="mb-10 mt-20 text-center">
          <img src={twendometriosis} className="mx-auto" alt="icon" />
          <div className="mt-4 text-[#9b8e8e]">
            歡迎造訪台灣子宮內膜異位症學會進一步瞭解國內外子宮內膜異位症研究、診治新知，及最新學術演講及專題討論。
          </div>
          <a
            target="_blank"
            href="https://www.endometriosis.org.tw/"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            https://www.endometriosis.org.tw/
          </a>
        </div>
        <div className="mt-10 text-center text-[#9b8e8e]">
          <img src={icon5} className="mx-auto w-20" alt="icon" />
          <h2 className="text-2xl lg:text-4xl">{t("yourOpinion")}</h2>
          <div className="my-4 px-4">
            {t("shareYourComments")}
            <br />
            {t("thankText")}
          </div>
          <div className="flex justify-center gap-4">
            <Link to={t("formLink.personal")} className="link-btn">
              {t("personalForm")}
            </Link>
            <Link to={t("formLink.pro")} className="link-btn">
              {t("proForm")}
            </Link>
          </div>
        </div>
        <Footer lang={lang} openLang={setShowLangModal.bind(null, true)} />
        {showModal && !isToday() && (
          <Modal
            proLink={t("formLink.pro")}
            personLink={t("formLink.personal")}
            onClose={handleCloseModal}
          />
        )}
        {showLangModal && <LangModal lang={lang} onClose={handleCloseModal} />}
        <div
          onClick={bottomToTop}
          className={`fixed bottom-7 right-7 flex h-[31px] w-[31px] cursor-pointer items-center justify-center bg-slate-400 opacity-80 ${goTop}`}
        >
          <svg
            className="ast-arrow-svg w-3 rotate-180 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            width="26px"
            height="16.043px"
            viewBox="57 35.171 26 16.043"
            enableBackground="new 57 35.171 26 16.043"
            xmlSpace="preserve"
          >
            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
          </svg>
        </div>
        {/* {isPlayLogo === null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white" />
        )} */}
        {isPlayLogo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <img src={logo} alt="TWSDM" className="w-60" />
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
