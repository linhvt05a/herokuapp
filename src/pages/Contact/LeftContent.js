import React, { Component } from 'react';

const LeftContent= () =>{
    return(
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-left">
        <h2 className="heading">Chi tiết liên hệ</h2>
        <h3 className="description">
          Nếu bạn có bất kỳ câu hỏi nào, chỉ cần điền vào mẫu liên hệ, và
          chúng tôi sẽ trả lời bạn ngay. Nếu bạn đang sống gần đó, hãy đến
          thăm văn phòng của chúng tôi.
        </h3>
        <ul className="details">
          <li>
            <i className="icon fas fa-phone-alt" />
            <p className="text">
              <span className="sub">Hỗ trợ khách hàng :</span>
              <span className="main">1900-123-456</span>
            </p>
          </li>
          <li>
            <i className="icon fas fa-envelope" />
            <p className="text">
              <span className="sub">Email liên hệ :</span>
              <span className="main">minerva@gmail.com</span>
            </p>
          </li>
          <li>
            <i className="icon fas fa-map-marker-alt" />
            <p className="text">
              <span className="sub">Địa chỉ văn phòng :</span>
              <span className="main address">
                119 Pastuer, Phường 6, Quận 3, Tp. Hồ Chí Minh
              </span>
            </p>
          </li>
        </ul>
      </div>
     
    )
}

export default LeftContent