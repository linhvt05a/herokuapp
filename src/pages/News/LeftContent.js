import React, { Component } from "react";
import { SocialNetwork, Comment, ReplyComment } from "./index";

const social = [
    {id: 1, icon : 'fab fa-facebook-square', href:'/promotion'},
    {id: 2, icon : 'fab fa-youtube', href:'/support'}, 
    {id: 3, icon : 'fab fa-twitter', href:'/project/selling'}
]

const LeftContent = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8">
      <div className="image_news">
        <img src="./assets/images/news_detail_main.jpg" />
      </div>
      <div className="news_detail_title pb-4">
        <label>Qui trình mua bán thứ cấp (f2, f3,..) căn hộ Central Park</label>
        <div className="news_connect">
          <div className="news_connect--time">
            <div className="title">
              <i className="far fa-clock" />
                Ngày đăng: 27/02/2020
            </div>
          </div>
          <SocialNetwork social={social} />
        </div>
      </div>
        <RowContent />
        <Comment />
        <TotalComment label="COMMENT" title="comment"/>
        <ReplyComment />
    </div>
  );
};

const TotalComment = (props) =>{
    return(
        <div className="comment onSignIn">
        <div className="comment_title">{props.label}</div>
        <div className="comment_number">
                Có
        <span className="text_e94c4c"> 3 </span>
            {props.title}
        </div>
      </div>
    )
}
const RowContent = () =>{
    return(
        <div className="content_detail">
        <p>
          Việc mua bán sang nhượng căn hộ thứ cấp diễn ra rất nhiều và hoàn toàn
          tuân thủ đúng qui định của pháp luật vì vậy người bán và người mua cần
          phải biết và làm thủ tục cho đúng, đầy đủ để tránh mất thời gian. Sau
          khi các bên thống nhất về giá mua bán căn hộ cần làm các bước như sau:
        </p>
        <h5 className="title_list">1. Thỏa thuận đặt cọc</h5>
        <p>
          - Cần chuẩn bị biên bản thoả thuận
          <br />
          - Kiểm tra giấy tờ HĐMB, hoá đơn chứng từ đóng tiền
          <br />- Bên Bán: CMND, Hộ Khẩu, Đăng ký kết hôn
        </p>
        <br />
        - Bên Mua: CMND, HK
        <p />
        <p>
          <span style={{ color: "#e94c4c" }}>* Lưu ý:</span>
          <br />
          + Thống nhất về giá khai công chứng để đóng thuế TNCN từ chuyển nhượng
          bất đông sản 2% theo qui định.
          <br />+ Lệ phí công chứng, phí môi giới (nếu có) Bên nào chịu.
        </p>
        <h5 className="title_list">2. Công chứng HĐMB</h5>
        <p>
          - Bên bán chuẩn bị:
          <br />
          + HĐMB (bản chính), hoá đơn chứng từ đóng tiền (BẢN CHÍNH), giấy xác
          nhận đóng tiền của CĐT. giấy xác nhận chưa bàn giao căn hộ hoặc giấy
          xác nhận chưa nộp hồ sơ đăng ký cấp sổ hồng.
          <br />
          + CMND, Hộ Khẩu, Đăng ký kết hôn (nếu độc thân thì có giấy xác nhận
          tình trạng hôn nhân thời gian xác nhận 6 tháng, nếu là tài sản riêng
          thì có văn bản thoả thuận về tài sản) tất cả bản chính.
          <br />
          - Bên Mua chuẩn bị: CMND + Hộ Khẩu
          <br />
          - Tuỳ thoả thuận về việc thanh toán. thường là 95% giá trị hợp đồng.
          5% còn lại sẽ thanh toán khi Bên Bán đóng thuế xong và đưa biên lai
          cho Bên Mua.
          <br />
        </p>
        <h5 className="title_list">3. Đóng thuế TNCN</h5>
        <p>
          Bên Bán đem hồ sơ lên Chi cục thuế Bình Thạnh điền vào form kê khai
          nộp thuế TNCN. Hồ sơ sẽ được xử lý 5 ngày.
          <br />
          <span style={{ color: "#e94c4c" }}>* Lưu ý:</span>
          <i className="content_note">
            Photo giấy tờ HĐMB Công Chứng, HĐMB CĐT, Hoá đơn chứng từ và xác
            nhận đóng tiền.
          </i>
        </p>
        <h5 className="title_list">4. Chủ Đầu tư xác nhận</h5>
        Bên Mua mang giấy tờ kèm theo biên lai đóng thuế TNCN, HĐMB Công chứng
        lên CĐT Vinhomes để xác nhận chuyển nhượng. Hoàn tất hợp đồng mua bán.
      </div>
      
    )
}
export default LeftContent;
