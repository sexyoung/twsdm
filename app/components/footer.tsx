// import logo from "~/images/logo.png";
import Links from "./links";

type FooterProps = {
  lang: string;
  openLang: () => void;
};

export default function Footer({ lang, openLang }: FooterProps) {
  return (
    <div className="mt-10 bg-slate-100">
      <footer className="container mx-auto py-5 text-center text-[#9b8e8e]">
        {/* <img
          src={logo}
          className="mx-auto block h-[auto] w-[120px] lg:mr-5 lg:inline-block"
          alt="Home"
        /> */}
        <ul className="my-5 inline-block [&>*]:mx-2 [&>*]:my-2 sm:[&>*]:block md:[&>*]:inline-block">
          <Links {...{ lang }} openLang={openLang} />
        </ul>
        <div className="flex-1 px-4">
          本網站是由台大醫院雲林分院所贊助，網站作者群無財務衝突關係
          <br />
          2023/08/01 © 版權所有、翻印必究。
        </div>
      </footer>
    </div>
  );
}
