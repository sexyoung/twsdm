import logo from "~/images/logo.png";
import Links from "./links";

export default function Footer() {
  return (
    <footer className="container mx-auto py-5 text-center lg:flex lg:items-start lg:items-center lg:gap-10 lg:text-left">
      <img
        src={logo}
        className="mx-auto block h-[auto] w-[120px] lg:mr-5 lg:inline-block"
        alt="Home"
      />
      <ul className="my-5 inline-block whitespace-nowrap [&>*]:mx-2 [&>*]:my-2 sm:[&>*]:block md:[&>*]:inline-block">
        <Links />
      </ul>
      <div className="flex-1 px-4 text-left">
        Technique-Weighted Shared-Decision Making. Sponsored by National Taiwan
        University Hospital Yunlin Branch.
      </div>
    </footer>
  );
}