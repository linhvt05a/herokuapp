import React from "react";
import {convertDateShow} from '../../functions/Utils'
const RightContent = (props) => {
  const { data } = props;
  return (
    <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4 mb-sm-3">
      <div className="col-right_news">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <div className="card hot_news bg_grey ">
              <div className="card_title">Tin tức nổi bật</div>
              <div className="js_hot_news">
                <div>
              { data && data.map((item, index)=>
                <div className="item " key={index}>
                    <div className="image">
                      <img src={item.news_avatar} />
                    </div>
                    <div className="title">
                      <a className="name" href="#">
                        {item.news_title}
                      </a>
                      <div className="time">Ngày đăng : {convertDateShow(item.from_date)}</div>
                    </div>
                  </div>
              ) }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightContent;
