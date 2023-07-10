import { Link } from "@remix-run/react";

export default function Links() {
  return (
    <>
      <li>
        <Link to="/">首頁</Link>
      </li>
      <li>
        <Link to="/plan">計畫自由選</Link>
      </li>
      <li>
        <Link to="/choice">選擇障礙專區</Link>
      </li>
      <li>
        <Link to="/curing">CP 值專區</Link>
      </li>
      <li>
        <Link to="/assessment">專業評估</Link>
      </li>
      <li>
        <Link to="/contact">關於我們</Link>
      </li>
    </>
  );
}
