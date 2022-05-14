import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Headerr() {
  return (
    <div>
      <div class="header">
        <Link to="blog-detail" class="">
          Blog
        </Link>
        <div class="header-right">
          <Link to="dang-tin-moi" className="logo" href="#home">
            Add Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
