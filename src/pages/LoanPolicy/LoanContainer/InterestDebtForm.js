import React from "react";

export const InterestDebtForm = () => {
  return (
    <div className="borrow__item">
      <div className="borrow__title">
        <span className="d-flex align-items-center">
          Lãi thả nổi - Dư nợ giảm dần
          <i className="icon_info fas fa-info-circle" />
        </span>
        <span className="sub">
          Nhập các thông tin cần thiết, bạn sẽ biết ngay số tiền lãi cần trả
          hàng tháng.
        </span>
      </div>
      <div className="borrow__calculator">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-group">
              <label className="label">
                Số tiền cần vay
                <span className="unit">(triệu vnd)</span>
              </label>
              <div className="pull-range">
                <input
                  type="number"
                  className="range range04"
                  data-slider-id="range04"
                  data-slider-min={0}
                  data-slider-max={2000}
                  data-slider-step={100}
                  data-slider-value={500}
                />
                <div className="input-group">
                  <input type="number" className="form-control rangeValue04" />
                  <div className="input-group-append">
                    <span className="input-group-text">triệu</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="label">
                Lãi suất sau ưu đãi
                <span className="unit">(%/năm)</span>
              </label>
              <input
                type="text"
                readOnly
                className="form-control hightlight"
                placeholder="--"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-group">
              <label className="label">
                Thời hạn vay
                <span className="unit">(năm)</span>
              </label>
              <div className="pull-range">
                <input
                  type="number"
                  className="range range02"
                  data-slider-id="range02"
                  data-slider-min={0}
                  data-slider-max={50}
                  data-slider-step={1}
                  data-slider-value={0}
                />
                <input type="number" className="form-control rangeValue02" />
              </div>
            </div>
            <div className="form-group">
              <label className="label">Ngày trả lãi</label>
              <div className="date-picker">
                <input
                  type="text"
                  placeholder="--"
                  className="form-control js-datepicker"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="checkbox-paymentBeforeDeadline">
          <label className="checkbox-inline">
            <input
              name="checkbox-2"
              type="checkbox"
              className="checkbox-custom"
            />
            <span className="checkbox-custom-dummy" />
            Thanh toán trước hạn ?
          </label>
        </div>
        <div className="row paymentBeforeDeadline_01 d-none">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-group">
              <label className="label">
                Thời gian dự tính thanh toán
                <span className="unit">(tháng)</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-group">
              <label className="label">
                Phí thanh toán trước hạn
                <span className="unit">(%)</span>
              </label>
              <input
                type="text"
                defaultValue={3.0}
                readOnly
                className="form-control"
              />
            </div>
          </div>
        </div>
        <button className="btn btn_purple">Xem kết quả</button>
      </div>
    </div>
  );
};
