import logo from "~/images/logo.png";
import Links from "./links";

type FooterProps = {
  lang: string;
};

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="container mx-auto py-5 text-center text-[#536942] lg:flex lg:items-start lg:items-center lg:gap-10 lg:text-left">
      <img
        src={logo}
        className="mx-auto block h-[auto] w-[120px] lg:mr-5 lg:inline-block"
        alt="Home"
      />
      <ul className="my-5 inline-block whitespace-nowrap [&>*]:mx-2 [&>*]:my-2 sm:[&>*]:block md:[&>*]:inline-block">
        <Links {...{ lang }} />
      </ul>
      <div className="flex-1 px-4 text-left">
        出版日期：2023/08/01
        <br />
        利益衝突聲明：本網站是由台大醫院雲林分院所贊助，網站作者群無財務衝突關係。
        <br />
        更新頻率：本網站每年更新。
        <br />
        版權所有、翻印必究。
      </div>
    </footer>
  );
}
