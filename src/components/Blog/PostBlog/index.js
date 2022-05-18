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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (title == "" || content == "") {
      toast("Vui lòng điền đầy đủ thông tin");
    } else if (title != "" && content != "") {
      axios.post(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Post`, {
        title,
        content,
      });
      toast("Thêm bài đăng mới thành công");
    }
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
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Content</label>
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
