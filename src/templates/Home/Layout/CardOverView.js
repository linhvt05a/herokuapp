import React, { Component } from "react";

const CardOverView = () => {
  return (
    <div className="overview">
      <div className="container container-sm container-md">
        <h2 className="overview_heading">
          Tổng quan Minerva
          <span className="sub">
            Minerva phát triển các mảng bất động sản có áp dụng các công nghệ
            thông minh hiện nay. Giúp mọi người có cuộc sống thoải mái và tiện
            nghi với công nghệ.
          </span>
        </h2>
        <div className="overview_services">
          <ItemOverView
            ItemOVNumber="1"
            ItemOVTitle="Bất động sản"
            ItemOVText="Xây dựng các công trình bất động sản chất lượng, đạt chuẩn cao cấp và đáp ứng yêu cầu của bạn"
          />
          <ItemOverView
            ItemOVNumber="2"
            ItemOVTitle="Công nghệ thông minh"
            ItemOVText="Áp dụng công nghệ thông minh vào ngôi nhà mơ ước của bạn. Giúp bạn
            có được cuộc sống thoải mái và đầy tiện nghi"
          />
          <ItemOverView
            ItemOVNumber="3"
            ItemOVTitle="Nâng cấp công nghệ"
            ItemOVText="Bảo trì, cập nhật và nâng cấp công nghệ thông minh của người dùng
              theo mọi thời điểm công nghệ mới nhất"
          />
        </div>
      </div>
    </div>
  );
};

const ItemOverView = (props) => {
  const { ItemOVTitle, ItemOVText, ItemOVNumber } = props;
  return (
    <div className="item">
      <p className="number">{ItemOVNumber}</p>
      <p className="title">{ItemOVTitle}</p>
      <p className="text">{ItemOVText}</p>
    </div>
  );
};

export default CardOverView;
