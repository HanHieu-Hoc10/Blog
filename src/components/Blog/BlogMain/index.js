import { useState, useEffect, useRef } from "react";
import React from "react";
import axios from "axios";
import "../BlogDetail/blogdetail.scss";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import _ from "lodash";

export default function BlogMain() {
  var _ = require("lodash");
  const [value, setValue] = useState([]);
  const [show, setShow] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showDeletee, setShowDeletee] = useState(false);
  // const [manyNew, setManyNew] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Post`)
      .then((res) => {
        setValue(res.data);
      });
  }, []);
  const showDelete = () => {
    setShowDeletee(!showDeletee);
  };
  const pagination = useRef();
  const perPage = value.length;
  // console.log(perPage);
  const defultValue = _.chunk(value, 5);
  const defultt = defultValue[0];
  const setPage = ({ selected }) => {
    const renderr = _.chunk(value, 5);
    console.log("renderr", renderr[selected]);
    setShow(renderr[selected]);
  };
  const totalPage = Math.ceil(perPage / 5);

  //   fillter
  const postData = () => {};
  const onDelete = (item, index) => {
    console.log(item);
    axios
      .delete(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Post/${item.id}`)
      .then(() => {});
  };
  const news = _.chunk(value, 4);
  // setManyNew(news[0]);
  const abc = news[0];

  console.log("news", news[0]);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="container" id="block-detail">
      <h1 className="title">Tin tức</h1>
      <h4>Tất cả bài viết</h4>
      <button onClick={() => showDelete()}>Delete</button>
      <div className="row  ">
        <div className="col-lg-8">
          <article className="post post--highlight">
            <a href="#" className="post__thumb">
              <img
                src="https://media-kyna.cdn.vccloud.vn/uploads/courses/1906/img/image_url-1600074453.cover-559x348.jpg"
                alt=""
                style={{ borderRadius: "15px", marginTop: "15px" }}
              />
            </a>
            <h3 className="pt-5">Trăn trở việc dạy và học trực tuyến</h3>
            <p>
              Do dịch Covid-19 diễn biến phức tạp nên sau ngày khai giảng năm
              học 2021-2022, tại nhiều địa phương, trẻ vẫn chưa thể đến trường.
              Tuy nhiên, không khí dạy và học lại đang sôi nổi trên các diễn đàn
              giáo dục với việc dạy học trực tuyến. Theo Bộ Giáo dục và Đào tạo,
              đây là phương án “thay thế dạy học trực tiếp”, giúp các cơ...{" "}
              <span style={{ color: "#ff7707" }}> Xem thêm </span>
            </p>
          </article>
          <div className="row text-center">
            {show.map((item, index) => (
              <div className="col-6 col-lg-4" key={index}>
                <div style={{ maxWidth: "90%" }} className="nani">
                  {showDeletee && (
                    <button onClick={() => onDelete(item, index)}>
                      Delete
                    </button>
                  )}
                  {/* <button onClick={() => setShowPopup(true)}>Sửa</button> */}
                  <h2
                    className="text_hidden"
                    style={{ color: "#ff7707", textTransform: "uppercase" }}
                  >
                    {item?.title}
                  </h2>
                  <p className="text_hidden">{item?.content}</p>
                </div>
              </div>
            ))}
          </div>
          {show.length == 0 ? (
            <>
              <div className="row">
                {defultt?.map((item, index) => (
                  <div className="col-lg-4 col-6" key={index}>
                    <div style={{ maxWidth: "90%" }} className="nani">
                      <h2
                        style={{ color: "#ff7707", textTransform: "uppercase" }}
                      >
                        {item?.title}
                      </h2>
                      <p>{item?.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="d-flex col-12 col-lg-12 flex-row py-4 align-items-center justify-content-center">
            <ReactPaginate
              ref={pagination}
              pageCount={totalPage}
              pageRangeDisplayed={4}
              marginPagesDisplayed={1}
              onPageChange={setPage}
              containerClassName="pagination"
              activeClassName="active"
              pageLinkClassName="page-link"
              breakLinkClassName="page-link"
              nextLinkClassName="page-link"
              previousLinkClassName="page-link"
              pageClassName="page-item"
              breakClassName="page-item"
              nextClassName="page-item"
              previousClassName="page-item"
              previousLabel={<>&laquo;</>}
              nextLabel={<>&raquo;</>}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <h4>Tin mới nhất</h4>
          <div className="manyRead">
            {abc?.map((item, conten) => (
              <div className="post post-ty3 flex d-flex pr pt-3" key={conten}>
                <img
                  src="http://www.elleman.vn/wp-content/uploads/2017/08/18/hinh-anh-dep-1.jpg"
                  alt=""
                  width="150px"
                  height="110px"
                />
                <p className="ml-3">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
