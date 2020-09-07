import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { formatCurrency } from "../../../functions/Utils";

const ProductTable = (props) => {
  const{data, limit} = props
    return (
        <div className="project_item__list">
        <div className="table_original">
          <table>
            <thead>
              <tr>
                <th className="pl-0">STT</th>
                <th><Trans>FLOOR</Trans></th>
                <th><Trans>PRODUCT</Trans></th>
                <th><Trans>AMOUNT</Trans>(vnd)</th>
                <th className="text-center"><Trans>GENERAL PAYMENT</Trans></th>
                <th className="text-center">
                  <i className="fas fa-cog" />
                </th>
              </tr>
            </thead>
           { data.detail.list_product && data.detail.list_product.map((item, index)=>
            <tbody style={{ maxHeight: 300 }} key={index}>
              <ProductParent data={item}/>
              <ProductChild />
              <RowChild />
            </tbody>
           )}
          </table>
        </div>
      </div>
    
    );
}

const ProductParent = (props) =>{
  const{data} = props
  return(
    <tr className="parent">
        <td colSpan={3} className="name border-bottom-none">
          {data.product_name}
        </td>
        <td className="name border-bottom-none">
          {formatCurrency(data.product_estimate_price)}
        </td>
        <td className="border-bottom-none" />
        <td className="border-bottom-none" />
    </tr>
  )
}

const ProductChild = () => {
  return(
    <tr>
    <td className="number">1</td>
    <td colSpan={5}>
      <div className="floor">
        <span className="floor_name">B6</span>
        <div className="floor_total">Tổng sản phẩm : 3</div>
      </div>
    </td>
  </tr>
  )
}

const RowChild = () =>{
  return(
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
  )
}


export default ProductTable