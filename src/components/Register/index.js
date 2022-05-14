import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const postData = () => {
    axios.post(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Login`, {
      userName,
      passWord,
      checkBox,
    });
    toast("Đăng ký thành công");
  };
  // useEffect(() => {}, [postData]);
  return (
    <>
      <ToastContainer />
      <Form className="create-form">
        <h1>Đăng ký</h1>
        <Form.Field>
          <label>user name</label>
          <input
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Pass Word</label>
          <input
            placeholder="Pass Word"
            type="password"
            onChange={(e) => setPassWord(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Nam" onChange={(e) => setCheckBox(!checkBox)} />
        </Form.Field>
        <Button onClick={() => postData()} type="submit">
          Đăng ký
        </Button>
      </Form>
    </>
  );
}
