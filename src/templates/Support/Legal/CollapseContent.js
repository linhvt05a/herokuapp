import React, { Component } from "react";
import Pagination from "../../../components/common/Pagination";
import { LoadDataPaging } from '../../../functions/Utils';
import { Trans } from "react-i18next";
import CardCollapseGreenCircle from '../../../components/common/CardCollapseGreenCircle'

const CollapseContent = (props) => {
    const {data,handleChangePage,limit, total_page, total_record,page} = props
  return (
    <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8">
      <div className="juridical__content sales_collapse">
        {data && data.map((data, index)=>{
            return(
              <CardCollapseGreenCircle title="Terms and conditions and transaction" key={index}>
                  <LegalContent />
              </CardCollapseGreenCircle> 
        )
        })}
        <Pagination data={LoadDataPaging(total_record, page, total_page, limit)} onChange={handleChangePage}/>
      </div>
    </div>
  );
};


const LegalContent = (props) =>{
    return(
          <div className="content_detail--detail">
            <p>
              - Điều khoản và Điều kiện sẽ được áp dụng cho Khách Hàng đặt cọc mua Sản
              Phẩm trên VTP.
            </p>
            <br />
            - Khách Hàng tham gia giao dịch trên VTP bao gồm:
            <p />
            <div className="dots">
              <div className="d-flex pb-2">
                <span>
                  <i className="fas fa-circle" />
                </span>
                <span>
                  Cá nhân từ đủ 18 tuổi trở lên, có năng lực hành vi dân sự phù hợp để
                  thực hiện các giao dịch trên VTP. Đối với người Việt Nam định cư ở
                  nước ngoài thì phải có thêm giấy tờ theo quy định sau:
                </span>
              </div>
              <p>
                _ Trường hợp mang hộ chiếu Việt Nam thì phải còn giá trị và có đóng
                dấu kiểm chứng nhập cảnh của cơ quan quản lý xuất, nhập cảnh Việt Nam
                vào hộ chiếu;
              </p>
              <p>
                _ Trường hợp mang hộ chiếu nước ngoài thì phải còn giá trị có đóng dấu
                kiểm chứng nhập cảnh của cơ quan quản lý xuất, nhập cảnh Việt Nam vào
                hộ chiếu và kèm theo giấy tờ chứng minh còn quốc tịch Việt Nam hoặc
                giấy tờ xác nhận là người gốc Việt Nam do Sở Tư pháp các tỉnh, thành
                phố trực thuộc trung ương, cơ quan đại diện Việt Nam ở nước ngoài, cơ
                quan quản lý về người Việt Nam ở nước ngoài cấp hoặc giấy tờ khác theo
                quy định của pháp luật Việt Nam.
              </p>
            </div>
            <div className="dots">
              <div className="d-flex pb-2">
                <span>
                  <i className="fas fa-circle" />
                </span>
                <span>
                  Tổ chức được thành lập và hoạt động hợp pháp theo quy định của pháp
                  luật Việt Nam.
                </span>
              </div>
            </div>
          </div>
    )
}
export default CollapseContent;
