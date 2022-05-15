import React, { useState, useEffect, useRef } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export default function Login() {
  let navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Login`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  const setData = () => {
    APIData.map((item) => {
      if (item?.userName == userName && item?.passWord == passWord) {
        localStorage.setItem("userName", userName);
        localStorage.setItem("passWord", passWord);
        toast("Đăng nhập thành công");
        navigate("blog-detail");
      } else if (item?.userName != userName || item?.passWord != passWord) {
        toast("Tài khoản hoặc mk không chính xác");
      }
    });
  };

  const submit = () => {};
  return (
    <div className="login_main jutify-content-center col-lg-12">
      <ToastContainer />
      <h1 class="text-center">Hello Again!</h1>
      <Form className="needs-validation">
        <Form.Field>
          <label className="form-label">user name</label>
          <input
            placeholder="First Name"
            className="form-control"
            type="text"
            onChange={(e) => setuserName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label className="form-label">Pass Word</label>
          <input
            placeholder="Last Name"
            className="form-control"
            type="text"
            onChange={(e) => setPassWord(e.target.value)}
          />
        </Form.Field>
        <Button onClick={() => setData()} type="submit">
          Submit
        </Button>
        <button type="submit">
          <Link to={"/dang-ky"} style={{ color: "#fff" }}>
            Đăng ký
          </Link>
        </button>
      </Form>
    </div>
  );
}
