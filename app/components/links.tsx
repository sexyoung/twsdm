import { Link } from "@remix-run/react";

export default function Links() {
  const handleClick = () => {
    if ((document.getElementById("menu-toggle") as HTMLInputElement).checked) {
      document.getElementById("menu-toggle")?.click();
    }
  };
  return (
    <>
      <li>
        <Link onClick={handleClick} to="/">
          首頁
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to="/plan">
          計畫自由選
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to="/choice">
          選擇障礙專區
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to="/curing">
          CP 值專區
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to="/assessment">
          專業評估
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to="/contact">
          關於我們
        </Link>
      </li>
    </>
  );
}
