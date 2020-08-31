import React from "react";

export const InputLoanNumber = () => {
  return (
    <div className="borrow__item">
      <div className="borrow__title">
        Thông tin số tiền
        <i className="sub">
          Nhập số tiền của sản phẩm dự án, chúng tôi sẽ đề nghị khoản vay cho
          ban.
        </i>
      </div>
      <div className="borrow__info">
        <div className="row">
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="form-group mb-3 mb-xl-0">
              <label className="label">
                Giá sản phẩm <span className="unit">(đồng)</span>
              </label>
              <input
                type="text"
                placeholder="-"
                defaultValue="3.000.000.000"
                readOnly
                className="form-control color_e94c4c"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="form-group mb-3 mb-xl-0">
              <label className="label">
                Số tiền trả trước <span className="unit">(đồng)</span>
              </label>
              <input
                type="text"
                placeholder="-"
                defaultValue="500.000.000"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="form-group mb-3 mb-xl-0">
              <label className="label">
                Số tiền còn lại <span className="unit">(đồng)</span>
              </label>
              <input
                type="text"
                placeholder="-"
                defaultValue="2.500.000.000"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
