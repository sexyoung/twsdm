import logo from "~/images/logo.png";
import Links from "./links";

export default function Header() {
  return (
    <header className="container fixed py-5 text-right">
      <img src={logo} className="mr-5 inline-block w-[60px]" alt="Home" />
      <ul className="inline-block [&>*]:mx-2 [&>*]:inline-block">
        <Links />
      </ul>
    </header>
  );
}
