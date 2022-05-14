import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Register from "../Register";
// import { useHistory } from "react-router-dom";

export default function Login() {
  //   const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Login`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = () => {
    // let { id, firstName, lastName, checkbox } = data;
    APIData.map((item, index) => {
      if (item?.userName == firstName && item?.passWord == lastName) {
        // history.push("/register");
        localStorage.setItem("First Name", firstName);
        localStorage.setItem("Last Name", lastName);
        localStorage.setItem("Checkbox Value", checkbox);
      } else if (item?.userName != firstName || item?.passWord != lastName) {
        // alert("TK hoặc Mk không chính xác");
      }

      console.log(item);
    });
    // // useEffect(() => {
    // //   setAPIData();
    // // }, []);
    // console.log("APIData", APIData);
  };
  useEffect(() => {
    setData();
  }, [APIData]);
  return (
    <div>
      <Form className="create-form ml-5 mt-5">
        <h1> Đăng nhập</h1>
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
        <Button onClick={setData} type="submit">
          Submit
        </Button>
        <button type="submit">
          <Link to={"/dang-ky"} style={{ color: "#fff" }}>
            {" "}
            Đăng ký{" "}
          </Link>
        </button>
      </Form>

      {/* <Routes>
        <Route path="/" element={<Register />}>
          {/* <Route index element={<CommentBlog />} />
              <Route path="dang-ky" element={<Register />}>
                <Route path=":dang-ky" element={<Register />} />
                <Route path="new" element={<BlogDetail />} />

                <Route path="dang-tin" element={<PostBlog />} />
                <Route path=":dang-tin" element={<PostBlog />} />
                <Route index element={<CommentBlog />} />
              </Route> */}
      {/* </Route> */}
      {/* </Routes> */}
    </div>
  );
}
