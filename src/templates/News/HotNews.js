import React, { Component } from "react";
import { Trans } from "react-i18next";

const HotNews = (props) => {
  const{data} = props
  return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 " id="hotnews">
      <div className="card hot_news bg_grey ">
        <div className="card_title"><Trans>Featured news</Trans></div>
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
      <img src={data.news_avatar} />
    </div>
    <div className="title">
      <a className="name" href="#">
       {data.news_title}
      </a>
      <div className="time">Ngày đăng : {data.from_date}</div>
    </div>
  </div>
  )
}

export default HotNews;
