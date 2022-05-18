import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IconName } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const postData = () => {
    if (userName != "" && passWord != "") {
      axios.post(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Login`, {
        userName,
        passWord,
        checkBox,
      });
      toast("Đăng ký thành công");
      setShowErr(false);
    } else if (userName == "" || passWord == "") {
      setShowErr(true);
    }
  };
  const showPw = () => {
    setIsPassword(!isPassword);
  };
  return (
    <div className="login_main jutify-content-center col-lg-12">
      <ToastContainer />
      <h1 className="text-center">Đăng ký</h1>
      <Form className="needs-validation">
        <Form.Field>
          <label className="form-lable">
            user name <span className="red">*</span>
          </label>
          <input
            placeholder="User Name"
            className="form-control"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          {showErr && (
            <p style={{ color: "red", fontSize: "13px" }}>
              Bạn phải nhập đầy đủ thông tin
            </p>
          )}
        </Form.Field>
        <Form.Field className="position-relative">
          <label className="form-lable ">
            Pass Word <span className="red">*</span>
            <i
              className={`fa cursor ${
                isPassword ? "fa-eye monkey-bc-black" : "fa-eye-slash"
              }`}
              style={{ position: "absolute", bottom: "12px", right: "20px" }}
              onClick={() => showPw()}
            ></i>
          </label>
          <input
            placeholder="Pass Word"
            className="form-control"
            type={isPassword ? "text" : "password"}
            onChange={(e) => setPassWord(e.target.value)}
          />
          {showErr && (
            <p style={{ color: "red", fontSize: "13px" }}>
              Bạn phải nhập đầy đủ thông tin
            </p>
          )}
        </Form.Field>
        <Form.Field className="d-flex">
          <Checkbox
            className="checkbox"
            // label="Nam"
            onChange={(e) => setCheckBox(!checkBox)}
          />
          <label style={{ lineHeight: "40px", marginLeft: "5px" }}>Nam</label>
        </Form.Field>
        <Button onClick={() => postData()} type="submit">
          Đăng ký
        </Button>
      </Form>
    </div>
  );
}
