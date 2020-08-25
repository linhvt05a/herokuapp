import React, { Component } from 'react';

const ProductTable = () => {
  
    return (
        <div className="project_item__list">
        <div className="table_original">
          <table>
            <thead>
              <tr>
                <th className="pl-0">STT</th>
                <th>TẦNG</th>
                <th>SẢN PHẨM</th>
                <th>SỐ TIỀN (vnd)</th>
                <th className="text-center">TỒNG ĐỢT TT</th>
                <th className="text-center">
                  <i className="fas fa-cog" />
                </th>
              </tr>
            </thead>
            <tbody style={{ maxHeight: 300 }}>
              {/* parent 1 */}
              <tr className="parent">
                <td colSpan={3} className="name border-bottom-none">
                  Royal Garden
                </td>
                <td className="name border-bottom-none">
                  13.280.000.000
                </td>
                <td className="border-bottom-none" />
                <td className="border-bottom-none" />
              </tr>
              {/* child 1 */}
              <tr>
                <td className="number">1</td>
                <td colSpan={5}>
                  <div className="floor">
                    <span className="floor_name">B6</span>
                    <div className="floor_total">Tổng sản phẩm : 3</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border-bottom-none" />
                <td className="pl-0 align-middle">
                  <a href="#" className="apartment_name">
                    Căn hộ B6 - F01
                  </a>
                </td>
                <td>
                  <div className="apartment_price">3.000.000.000</div>
                </td>
                <td className="text-center">
                  <div className="payment_time">15</div>
                </td>
                <td className="text-center">
                  <div className="noti">
                    <i className="icon type payment_status_3 fas fa-exclamation-triangle" />
                    <i className="icon bell fas fa-bell" />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border-bottom-none" />
                <td className="pl-0 align-middle">
                  <a href="#" className="apartment_name">
                    Căn hộ B6 - F01
                  </a>
                </td>
                <td>
                  <div className="apartment_price">3.000.000.000</div>
                </td>
                <td className="text-center">
                  <div className="payment_time">15</div>
                </td>
                <td className="text-center">
                  <div className="noti">
                    <i className="icon type payment_status_3 fas fa-exclamation-triangle" />
                    <i className="icon bell fas fa-bell" />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border-bottom-none" />
                <td className="pl-0 align-middle">
                  <a href="#" className="apartment_name">
                    Căn hộ B6 - F01
                  </a>
                </td>
                <td>
                  <div className="apartment_price">3.000.000.000</div>
                </td>
                <td className="text-center">
                  <div className="payment_time">15</div>
                </td>
                <td className="text-center">
                  <div className="noti">
                    <i className="icon type payment_status_3 fas fa-exclamation-triangle" />
                    <i className="icon bell fas fa-bell" />
                  </div>
                </td>
              </tr>
              {/* child 2 */}
              <tr>
                <td className="number">2</td>
                <td colSpan={5}>
                  <div className="floor">
                    <span className="floor_name">B6</span>
                    <div className="floor_total">Tổng sản phẩm : 3</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border-bottom-none" />
                <td className="pl-0 align-middle">
                  <a href="#" className="apartment_name">
                    Căn hộ B6 - F01
                  </a>
                </td>
                <td>
                  <div className="apartment_price">3.000.000.000</div>
                </td>
                <td className="text-center">
                  <div className="payment_time">15</div>
                </td>
                <td className="text-center">
                  <div className="noti">
                    <i className="icon type payment_status_3 fas fa-exclamation-triangle" />
                    <i className="icon bell active fas fa-bell" />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border-bottom-none" />
                <td className="pl-0 align-middle">
                  <a href="#" className="apartment_name">
                    Căn hộ B6 - F01
                  </a>
                </td>
                <td>
                  <div className="apartment_price">3.000.000.000</div>
                </td>
                <td className="text-center">
                  <div className="payment_time">15</div>
                </td>
                <td className="text-center">
                  <div className="noti">
                    <i className="icon type payment_status_3 fas fa-exclamation-triangle" />
                    <i className="icon bell fas fa-bell" />
                  </div>
                </td>
              </tr>
              <tr className="last">
                <td colSpan={2} className="border-bottom-none" />
                <td className="pl-0 align-middle">
                  <a href="#" className="apartment_name">
                    Căn hộ B6 - F01
                  </a>
                </td>
                <td>
                  <div className="apartment_price">3.000.000.000</div>
                </td>
                <td className="text-center">
                  <div className="payment_time">15</div>
                </td>
                <td className="text-center">
                  <div className="noti">
                    <i className="icon type payment_status_3 fas fa-exclamation-triangle" />
                    <i className="icon bell fas fa-bell" />
                  </div>
                </td>
              </tr>
              {/* parent 2 */}
            </tbody>
          </table>
        </div>
      </div>
    
    );
}
export default ProductTable