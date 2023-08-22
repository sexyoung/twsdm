import { Link } from "@remix-run/react";
import { useEffect } from "react";
import { setToday } from "~/utils";

type ModalProps = {
  personLink: string;
  proLink: string;
  onClose: () => void;
};

export default function Modal({ onClose, personLink, proLink }: ModalProps) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    setToday();
  }, []);
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
          {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    只要幾秒，表達您對醫療環境的看法！
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      完成這個簡單的調查並與我們分享您對整個醫療環境的評論！
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center gap-4 bg-gray-50 px-4 py-3 sm:flex sm:px-6">
              <Link
                to={personLink}
                className="rounded-full bg-[#9b8e8e] px-4 py-2 font-bold text-white hover:bg-[#7a6f6f]"
              >
                個人表單
              </Link>
              <Link
                to={proLink}
                className="rounded-full bg-[#9b8e8e] px-4 py-2 font-bold text-white hover:bg-[#7a6f6f]"
              >
                醫療人員表單
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
