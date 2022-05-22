import { useState, useEffect, useRef } from "react";
import React from "react";
import axios from "axios";
import "../BlogDetail/blogdetail.scss";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import _ from "lodash";

export default function CommentBlog() {
  var _ = require("lodash");
  const [value, setValue] = useState([]);
  const [show, setShow] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    axios
      .get(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Post`)
      .then((res) => {
        setValue(res.data);
      });
  }, []);

  const pagination = useRef();
  console.log(pagination);
  const perPage = value.length;
  const defultValue = _.chunk(value, 2);
  const defultt = defultValue[0];
  const setPage = ({ selected }) => {
    const renderr = _.chunk(value, 2);
    console.log("renderr", renderr[selected]);
    setShow(renderr[selected]);
  };
  const totalPage = Math.ceil(perPage / 2);

  //   fillter
  const postData = () => {};
  const onDelete = (index) => {
    console.log("index", index);
    axios
      .delete(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Post/${index}`)
      .then(() => {
        // value();
      });
  };
  const [contentCm, setContentCm] = useState("");

  return (
    <main>
      <Link to={"/login"}>
        <label>First Name</label>
      </Link>
      <div className="row text-center justify-content-between">
        {show.map((item, index) => (
          <div className="col-lg-5 col-12 nani" key={index}>
            <h2 style={{ color: "#ff7707", textTransform: "uppercase" }}>
              {item.title}
            </h2>
            <p>{item.content}</p>
            <label style={{ fontSize: "13px" }}>
              Nhập nội dung comment
            </label>{" "}
            <br />
            <input onChange={(e) => setContentCm(e.target.value)} />
          </div>
        ))}
        {show.length == 0 ? (
          <>
            {defultt?.map((item, index) => (
              <div className="col-lg-5 col-12 nani" key={index}>
                <h2 style={{ color: "#ff7707", textTransform: "uppercase" }}>
                  {item.title}
                </h2>
                <p>{item.content}</p>
              </div>
            ))}
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
    </main>
  );
}
