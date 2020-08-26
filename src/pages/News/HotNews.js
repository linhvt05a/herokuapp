import React, { Component } from "react";

const HotNews = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 " id="hotnews">
      <div className="card hot_news bg_grey ">
        <div className="card_title">Tin tức nổi bật</div>
        <div className="js_hot_news">
          <RowNews />
          <RowNews />
          <RowNews />
        </div>
      </div>
    </div>
  );
};

const RowNews = () =>{
  return(
    <div className="item ">
    <div className="image">
      <img src="./assets/images/hotnews_1.jpg" />
    </div>
    <div className="title">
      <a className="name" href="#">
        Năm 2020 - Năm của thị trường bất động sản các tỉnh
      </a>
      <div className="time">Ngày đăng : 02/03/2020</div>
    </div>
  </div>
  )
}

export default HotNews;
