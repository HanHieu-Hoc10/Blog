import React, { useState, useEffect, useRef } from "react";
import "./blogdetail.scss";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";
import Header from "../../Header";
import ScrollTop from "../../../assets/ScrollTop";
import BlogInfor from "../BlogMain/BlogInfor";

export default function BlogDetail() {
  ScrollTop();
  const navigate = useNavigate();

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
      })
      .catch((err) => console.log(err));
  }, []);
  const pagination = useRef();
  const perPage = value.length;
  const defultValue = _.chunk(value, 5);
  const defultt = defultValue[0];
  const setPage = ({ selected }) => {
    const renderr = _.chunk(value, 5);
    setShow(renderr[selected]);
  };
  const totalPage = Math.ceil(perPage / 5);

  //   fillter
  // const postData = () => {};
  // const onDelete = (item, index) => {
  //   // console.log(item);
  //   axios
  //     .delete(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Post/${item.id}`)
  //     .then(() => {});
  // };
  const news = _.chunk(value, 4);
  // setManyNew(news[0]);
  const abc = news[0];

  // console.log("news", news[0]);
  // const [showPopup, setShowPopup] = useState(false);

  // search
  // const dataSearch = _filter(value, { content: searchValue });

  const search = () => {
    const allBlogs = value;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.content.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
    setShow(filteredBlogs);
    navigate("/blog-detail");
  };

  return (
    <div>
      <Header />
      <div className="container" id="block-detail">
        <h1 className="title">Tin tức</h1>
        <div className="search">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
          <button onClick={() => search()}>Tìm kiếm</button>
        </div>
        <div className="row  ">
          <div className="col-lg-8 col-8" style={{ overflow: "hidden" }}>
            <h4>Tất cả bài viết</h4>

            <article className="post post--highlight">
              <Link to="#" className="post__thumb">
                <img
                  src="https://media-kyna.cdn.vccloud.vn/uploads/courses/1906/img/image_url-1600074453.cover-559x348.jpg"
                  alt=""
                  width="100%"
                  style={{ borderRadius: "15px", marginTop: "15px" }}
                />
              </Link>
              <h3 className="pt-5">Trăn trở việc dạy và học trực tuyến</h3>
              <p>
                Do dịch Covid-19 diễn biến phức tạp nên sau ngày khai giảng năm
                học 2021-2022, tại nhiều địa phương, trẻ vẫn chưa thể đến
                trường. Tuy nhiên, không khí dạy và học lại đang sôi nổi trên
                các diễn đàn giáo dục với việc dạy học trực tuyến. Theo Bộ Giáo
                dục và Đào tạo, đây là phương án “thay thế dạy học trực tiếp”,
                giúp các cơ...
                <span className="btn" style={{ color: "#ff7707" }}>
                  Xem thêm
                </span>
              </p>
            </article>
            <div className="row text-center">
              {show.map((item, index) => (
                <div className="col-lg-6 col-md-6 col-12" key={index}>
                  <div style={{ maxWidth: "90%" }} className="nani">
                    <Link to={`/blog-detail/${item.id}`}>
                      {/* <div style={{ maxWidth: "90%" }} className="nani"> */}
                      <p
                        style={{
                          color: "#ff7707",
                          textTransform: "uppercase",
                        }}
                        className="text_hidden"
                      >
                        {item?.title}
                      </p>
                      <img
                        className="detail-img"
                        src={item?.img}
                        alt=""
                        width="100%"
                        height="250px"
                        style={{
                          borderRadius: "10px",
                          marginTop: "15px",
                          marginBottom: "5px",
                        }}
                      />
                      <p class="chip">development</p>
                      <p className="content_hidden">{item?.content}</p>
                      {/* </div> */}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {show.length == 0 ? (
              <>
                <div className="row">
                  {defultt?.map((item, index) => {
                    return (
                      <div className="col-lg-6 col-md-6 col-12" key={index}>
                        <Link to={`/blog-detail/${item.id}`}>
                          <div style={{ maxWidth: "90%" }} className="nani">
                            <p
                              style={{
                                color: "#ff7707",
                                textTransform: "uppercase",
                              }}
                              className="text_hidden"
                            >
                              {item?.title}
                            </p>
                            <img
                              className="detail-img"
                              src={item?.img}
                              alt=""
                              width="100%"
                              height="250px"
                              style={{
                                borderRadius: "10px",
                                marginTop: "15px",
                                marginBottom: "5px",
                              }}
                            />
                            <p class="chip">development</p>
                            <p className="content_hidden">{item?.content}</p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
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
          <div className="col-lg-4 col-4">
            <h4>Tin mới nhất</h4>
            <BlogInfor value={value} setValue={setValue} />
          </div>
        </div>
      </div>
    </div>
  );
}
