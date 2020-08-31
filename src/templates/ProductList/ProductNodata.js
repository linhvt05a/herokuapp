import React, { Component } from 'react';

const ProductNodata = () => {
    return (
        <div className="save_product--null">
        <div className="wrap">
          <figure className="img">
            <img
              src="../images/product_relative__null.png"
              alt="Sản phẩm quan tâm"
            />
          </figure>
          <div className="text">
            Chưa có sản phẩm nào!
            <p className="sub_text">
              Hiện tại bạn không có sản phẩm yêu thích nào. Nhấn vào tìm
              kiếm để xem các sản phẩm thuộc dự án bất động sản của
              chúng tôi.
            </p>
          </div>
          <a href="#" className="btn btn_purple">
            TÌM SẢN PHẨM
          </a>
        </div>
      </div>
      
    );
}
export default ProductNodata
