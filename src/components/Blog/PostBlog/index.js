import React from "react";
import { useState } from "react";
import "./postBlog.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../Header";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function PostBlog() {
  const Navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState();

  // const postImg = (e) => {
  //   const file = e.target.files[0];
  //   file.preview = URL.createObjectURL(file);
  //   console.log(e.target.result, "vãi đái");
  //   setImg(file);
  // };
  console.log("img", img);
  const onSubmit = () => {
    console.log("content", content.length);
    if (title == "" || content == "" || img == "") {
      toast("Vui lòng điền đầy đủ thông tin");
    } else {
      axios.post(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Post`, {
        title,
        content,
        img,
      });
      toast("Thêm bài đăng mới thành công");
      Navigate("/dang-tin-moi");
      setImg();
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
    <>
      <Header />
      <div className="Blogpost ">
        <ToastContainer />
        <h1 className="text-center">Đăng bài viết mới</h1>
        <form className="Blog-form">
          <div>
            <label>Title</label>
            <input
              className="form__title"
              placeholder="Nhập tiêu đề"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label>Content</label>
            <textarea
              className="form__title form-content"
              placeholder="Nhập nội dung Blog"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
          <div className="post-img wrapper">
            <div className="input-data">
              <label>Link Image</label> <br />
              {/* <input type="file" name="myfile" onChange={(e) => postImg(e)} /> */}
              <input
                className="form__title"
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
          </div>
          {img && <img src={img} alt="ảnh lỗi" width="520px" />}
          <br />
          <button onClick={onSubmit} type="reset">
            Gửi
          </button>
        </form>
      </div>
    </>
  );
}
