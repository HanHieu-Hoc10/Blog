import React from "react";
import { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const tabs = [
  { href: "/", selected: true, title: "Đăng nhập" },
  { href: "dang-ky", selected: false, title: "Đăng ký" },
  { href: "blog-detail", selected: false, title: "blog detail" },
  { href: "dang-tin-moi", selected: false, title: "Đăng tin" },
];
export default function Headerr() {
  const [tabSelect, setTabSelect] = useState("/");

  return (
    <div>
      <nav class="nav">
        {tabs.map((tab, index) => (
          <li key={index}>
            <Link
              to={tab.href}
              title={tab.title}
              // data-toggle="pill"
              aria-selected={tab.selected}
              className={tab.href === tabSelect ? "header_click" : ""}
              onClick={() => setTabSelect(tab.href)}
            >
              {tab.title}
            </Link>
          </li>
        ))}
        <div className="animation start-home"></div>
      </nav>
    </div>
  );
}
