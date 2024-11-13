import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type ModalProps = {
  lang: string;
  onClose: () => void;
};

let path: string = "";

export default function LangModal({ onClose, lang }: ModalProps) {
  const { t } = useTranslation("common");
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, [lang]);

  path = location.pathname.replace(/\/(zh-TW|id-ID|ja-JP|vi-VN)/g, "");
  if (path === "/") path = "";

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          onClick={onClose}
        >
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto mt-3 text-center sm:mt-0">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {t("menu.choose")}
                  </h3>
                  <div className="mt-2 text-sm text-gray-500">
                    <ul className="whitespace-nowrap bg-white py-2 text-black [&>*]:py-0.5">
                      <li>
                        <a href={`/${path}`.replace("//", "/")}>
                          {t("menu.en")}
                        </a>
                      </li>
                      <li>
                        <a href={[`/zh-TW`, path].join("")}>
                          {t("menu.zh-TW")}
                        </a>
                      </li>
                      <li>
                        <a href={["/ja-JP", path].join("")}>
                          {t("menu.ja-JP")}
                        </a>
                      </li>
                      <li>
                        <a href={["/vi-VN", path].join("")}>
                          {t("menu.vi-VN")}
                        </a>
                      </li>
                      <li>
                        <a href={["/id-ID", path].join("")}>
                          {t("menu.id-ID")}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
