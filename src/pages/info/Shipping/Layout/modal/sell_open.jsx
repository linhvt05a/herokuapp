/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { product_type_id } from "../../../../../constant"

const sell_open = props => {
    const ProductType = (value) => {
        for (let i in product_type_id) {
            if (product_type_id[i].id == value)
                return product_type_id[i].name;

        }
    }
    const trChild = (item) => {
        let arr = [];
        arr = item.list_product_type.map((value, index) => {
            return (
                <tr key={value.product_type_id + index}>
                    <td className={`col-3 pl-0  ${index !== item.list_product_type.length - 1 ? "border-bottom-none" : null} `}></td>
                    <td className="col-3 pl-0">
                        {ProductType(value.product_type_id)}
                    </td>
                    <td className="col-3 text-center">
                        <div className="sales_number_selected">
                            <span className="selected selected_01">{value.agent_expected_number}</span>
                            <span className="selected selected_02">{value.agent_actual_number ? value.agent_actual_number : "-"}</span>
                        </div>
                    </td>
                    <td className="col-3 text-center">
                        <div className="sales_number_selected">
                            <span className="selected selected_01">{value.internal_expected_number}</span>
                            <span className="selected selected_02">{value.internal_actual_number ? value.internal_actual_number : "-"}</span>
                        </div>
                    </td>
                </tr>
            )
        })
        return arr
    }
    const trParent = (item, index) => {
        return (
            <tr key={item.sell_open_name + index}>
                <td className="col-3 pl-0" style={{ width: 33 + "%" }}>
                    <button readOnly="" type="button" className="border-0 bg_color_6d30ab text-white pl-2 pr-2 min-height-40 d-inline-block">
                        {item.sell_open_name}
                    </button>
                </td>
                <td colSpan="3" className="col-9 pl-0">
                    <div className="d-flex">
                        <div className="input_date mr-4">
                            <div className="text_date">From</div>
                            <div className="m_datepicker form-group mb-0">
                                <input style={{ backgroundColor: "#ebebeb" }} type="text" className="form-control js-datepicker" placeholder="-" defaultValue={item.sell_open_date} disabled="" />
                            </div>
                        </div>
                        <div className="input_date">
                            <div className="text_date">To</div>
                            <div className="m_datepicker form-group mb-0">
                                <input style={{ backgroundColor: "#ebebeb" }} type="text" className="form-control js-datepicker" placeholder="-" defaultValue={item.sell_end_date} disabled="" />
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
    return (
        <table style={{ minWidth: `735px` }}>
            <thead>
                <tr>
                    <th className="col-3 pl-0">Sell open</th>
                    <th className="col-3 pl-0">Project type</th>
                    <th className="col-3 text-center">Total agent </th>
                    <th className="col-3 text-center">Total internal</th>
                </tr>
            </thead>
            <tbody style={{ maxHeight: `300px` }}>

                {props.data.open_sell_detail != null && props.data.open_sell_detail.map((item, index) => {
                    return [trParent(item, index), trParent(item)]
                })}
            </tbody>
        </table>
    )
}
export default sell_open;