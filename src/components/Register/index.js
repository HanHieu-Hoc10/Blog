import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import Login from "../Login";
import { Switch, Route, Routes } from "react-router-dom";

export default function Register() {
  //   const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    axios.post(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Login`, {
      firstName,
      lastName,
      checkbox,
    });
    // history.push();ư
  };

  return (
    <div>
      {/* <Link to={"/login"}>Đăng nhập</Link> */}
      <Form className="create-form">
        <h1>Đăng ký</h1>
        <Form.Field>
          <label>user name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Pass Word</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Nam" onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </div>
  );
}
