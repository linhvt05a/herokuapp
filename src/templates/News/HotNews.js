import React, { Component } from "react";

const HotNews = (props) => {
  const{data} = props
  return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 " id="hotnews">
      <div className="card hot_news bg_grey ">
        <div className="card_title">Tin tức nổi bật</div>
        <div className="js_hot_news">
          { data && data.map((item, index)=> <RowNews data={item} key={index}/>)}
        </div>
      </div>
    </div>
  );
};

const RowNews = (props) =>{
  const{data} = props
  return(
    <div className="item ">
    <div className="image">
      <img src={data.image} />
    </div>
    <div className="title">
      <a className="name" href="#">
       {data.title}
      </a>
      <div className="time">Ngày đăng : {data.time}</div>
    </div>
  </div>
  )
}

export default HotNews;
