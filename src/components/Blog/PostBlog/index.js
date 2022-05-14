// import React, { useState, useEffect } from "react";
// import { Button, Checkbox, Form } from "semantic-ui-react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import "./postBlog.css";
// import ReactDOM from "react-dom";
// import { ErrorMessage } from "@hookform/error-message";
// import { useForm } from "react-hook-form";

// export default function PostBlog() {
//   const [content, setContent] = useState("");
//   const [title, setTitle] = useState("");

//   return (
//     <div className="BlogPost">
//       <label>Nhập tiêu đề</label>
//       <br />
//       <input onChange={(e) => setTitle(e.target.value)}></input> <br />
//       <label>Nhập nội dung</label>
//       <textarea onChange={(e) => setContent(e.target.value)}>PostBlog</textarea>
//     </div>
//   );
// }
import React from "react";
import ReactDOM from "react-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import "./postBlog.scss";
import { Link } from "react-router-dom";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  website: yup.string().url(),
});

export default function PostBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = () => {
    axios.post(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Post`, {
      title,
      content,
    });
  };
  //    const onDelete = (id) => {
  //      axios
  //        .delete(`https://61a843ef387ab200171d3075.mockapi.io/hanhieu/${id}`)
  //        .then(() => {
  //          getData();
  //        });
  //    };
  return (
    <div className="Blogpost">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Last Name</label>
          <textarea
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <button onClick={onSubmit} />
      </form>
    </div>
  );
}
