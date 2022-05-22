import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../BlogDetail/blogdetail.scss";
import { Link } from "react-router-dom";
import Header from "../../Header";
import _ from "lodash";
import { Routes, Route, useParams } from "react-router-dom";
import BlogInfor from "./BlogInfor";
import ScrollTop from "../../../assets/ScrollTop";

export default function BlogMain() {
  ScrollTop();
  let params = useParams();
  console.log(params, "nà ní");
  const [value, setValue] = useState([]);
  const [show, setShow] = useState([]);
  console.log(value, "value");
  useEffect(() => {
    axios
      .get(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Post`)
      .then((res) => {
        setValue(res.data);
      });
  }, []);
  console.log("value", value);
  const pagination = useRef();
  const perPage = value.length;
  const defultValue = _.chunk(value, 5);
  const defultt = defultValue[0];
  const setPage = ({ selected }) => {
    const renderr = _.chunk(value, 5);
    console.log("renderr", renderr[selected]);
    setShow(renderr[selected]);
  };
  const totalPage = Math.ceil(perPage / 5);
  const news = _.chunk(value, 4);
  // const listBlog = news[0];
  const valueBlog = _.filter(value, { id: params?.id });
  console.log("valueBlog", valueBlog);

  return (
    <div className="container" id="block-detail">
      <Header />
      <h1 className="title pb-3">Tin tức</h1>

      <div className="row  ">
        <div className="col-lg-8 col-8" style={{ overflow: "hidden" }}>
          <h4>
            {valueBlog.map((item, index) => (
              <div key={index}>{item?.title}</div>
            ))}
          </h4>
          <article className="post post--highlight">
            <a href="#" className="post__thumb">
              {valueBlog.map((item, index) => (
                <img
                  src={item?.img}
                  alt=""
                  width="100%"
                  height="350px"
                  style={{ borderRadius: "15px", marginTop: "15px" }}
                />
              ))}
            </a>
            <h3 className="pt-5">Trăn trở việc dạy và học trực tuyến</h3>
            <p>
              {valueBlog.map((item, index) => (
                <div className="index">{item?.content}</div>
              ))}
            </p>
          </article>
        </div>
        <div className="col-lg-4 col-md-4 col-4" style={{ overflow: "hidden" }}>
          <h4>Tin mới nhất</h4>

          <BlogInfor value={value} setValue={setValue} />
        </div>
      </div>
      <div className="col-lg-12 comment">
        <h3>Comment</h3>
        <div>
          <div className="d-flex">
            <img
              src="https://thuthuatnhanh.com/wp-content/uploads/2020/01/hinh-anh-chat-ngau-dep.jpg"
              alt="ảnh lỗi"
              width="30px"
              Header="30px"
              style={{ borderRadius: "50%" }}
            ></img>
            <h6 className="comment-name">Hán Hiếu</h6>
          </div>
          <p className="content">Đây là blog +{params?.id}...</p>
          <label>Comment</label> <br />
          <input placeholder="comment-imput"></input>
        </div>
      </div>
    </div>
  );
}
