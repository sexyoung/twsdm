import { Link } from "react-router-dom";

import logo from "@/images/logo.png";

import Links from "./links";

type HeaderProps = {
  lang: string;
  isHeaderBG: boolean;
  openLang: () => void;
};

export default function Header({
  lang = "",
  isHeaderBG,
  openLang,
}: HeaderProps) {
  const headerBG = isHeaderBG ? "bg-slate-100" : "";
  const svgColor = isHeaderBG ? "text-red-200" : "";
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 md:absolute ${headerBG} md:bg-transparent`}
    >
      <nav className="container mx-auto flex flex-wrap items-start justify-between px-5 py-5 text-right md:block md:px-0">
        <Link to={`/${lang}`}>
          <img src={logo} className="mr-5 inline-block w-[60px]" alt="Home" />
        </Link>
        <label htmlFor="menu-toggle" className="pointer-cursor block md:hidden">
          <svg
            className={`cursor-pointer fill-current text-white ${svgColor}`}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input
          className="hidden [&:checked~#menu]:block"
          type="checkbox"
          id="menu-toggle"
        />
        <ul id="menu" className="header-menu">
          <Links openLang={openLang} {...{ lang }} />
        </ul>
      </nav>
    </header>
  );
}
