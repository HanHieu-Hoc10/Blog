import { useState, useEffect, useRef } from "react";
import React from "react";
import axios from "axios";
import "./blogdetail.scss";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import _ from "lodash";
import PopUpUpdateItem from "./PopUpUpdateItem";

export default function BlogDetail() {
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
  const onDelete = (item, index) => {
    console.log(item);
    axios
      .delete(`https://61d3d3a8b4c10c001712bac1.mockapi.io/Post/${item.id}`)
      .then(() => {});
  };
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main>
      {/* <div className="d-flex">
        <input
        placeholder="Last Name"
          onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={postData} type="submit">
          Submit
          </button>
        </div> */}
      <Link to={"/login"}>
        <label>First Name</label>
      </Link>
      {showPopup && <PopUpUpdateItem />}
      <div className="row text-center justify-content-between">
        {show.map((item, index) => (
          <>
            <div className="col-lg-5 col-12 nani" key={index}>
              <button onClick={() => onDelete(item, index)}>Delete</button>
              <button onClick={() => setShowPopup(true)}>Sửa</button>
              <h2 style={{ color: "#ff7707", textTransform: "uppercase" }}>
                {item.title}
              </h2>
              <p>{item.content}</p>
            </div>
          </>
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
