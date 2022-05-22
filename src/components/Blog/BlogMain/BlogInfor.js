import React from "react";
import "./blogInfor.scss";
import _ from "lodash";

export default function BlogInfor({ value, setValue }) {
  const valueNews = value?.reverse().slice(0, 4);

  return (
    <div className="blogInfor">
      <h5 className="text-center">ABOUT US</h5>
      <div>
        <img
          src="https://thuthuatnhanh.com/wp-content/uploads/2020/01/hinh-anh-chat-ngau-dep.jpg"
          alt="Anh loi"
          width="100%"
        />
        <p className="blogInfor-title">Hán Việt Hiếu (24/04/1999)</p>
      </div>
      <div>
        <h5 className="text-center">SOCIAL NETWORK</h5>
        <img
          src="https://i.rada.vn/data/image/2020/08/21/Facebook-2020-200.png"
          alt=""
          width="20px"
          className="icon"
        />
        <a href="https://www.facebook.com/han.hieu.980" target="_blank">
          Hán Hiếu
        </a>
        <br />
        <img
          src="https://inkythuatso.com/uploads/thumbnails/800/2021/10/youtube-logo-inkythuatso-01-27-14-06-25.jpg"
          alt=""
          width="50px"
          className="icon"
        />
        <a href="https://www.youtube.com/" target="_blank">
          Hiếu Đệ
        </a>
      </div>
      <div>
        <h5 className="text-center">RECENT POSTS</h5>
        <div>
          {valueNews.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-12 col-lg-6 recent-title text_hidden">
                {item?.title}
              </div>
              <div className="col-12 col-lg-6 dateTime">( May, 23, 2022 )</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
