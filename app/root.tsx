import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderArgs) => {
  return json({ user: await getUser(request) });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <header className="container py-5 text-right">
          <ul className="[&>*]:mx-2 [&>*]:inline-block">
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
          </ul>
        </header>
        <Outlet />
        <footer className="container py-5">footer</footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
