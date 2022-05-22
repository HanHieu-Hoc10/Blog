import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  // const [LogoutAcc, setLogoutAcc] = useState();

  const showLogOut = () => {
    setShow(!show);
  };
  const logOut = () => {
    localStorage.removeItem("userName");
    navigate("#");
  };
  const userName = localStorage.getItem("userName");

  return (
    <div className="container">
      <header className="header d-flex">
        <nav className="headerMenu">
          <Link to="#">Home</Link>
          <Link to="/blog-detail">Blog detail</Link>
          <Link to="/dang-tin-moi">Post Blog</Link>
        </nav>
        {userName ? (
          <div className="position-relative">
            Chào bạn <span className="userName"></span>
            <div className="btn header-name" onClick={() => showLogOut()}>
              {userName} &nbsp;{`^`}
            </div>
            {show && (
              <ul className="header-logout">
                <li onClick={() => logOut()}>Đăng xuất</li>
                <li>Thông tin</li>
              </ul>
            )}
          </div>
        ) : (
          <div className="d-flex">
            <div className="header-login btn">
              <Link to="/">Đăng nhập</Link>
            </div>
            <div className="header-register ml-3 btn">
              <Link to="/dang-ky">Đăng ký</Link>
            </div>
          </div>
        )}
      </header>
      <div className="header-logo">
        <h2>Blog Hiếu</h2>
        <p>Chào mừng anh em đến với blog của Hiếu</p>
      </div>
    </div>
  );
}
