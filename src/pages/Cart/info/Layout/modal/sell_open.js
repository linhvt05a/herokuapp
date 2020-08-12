/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { isProductType } from "../../../../../utils/Utils"
import DatePicker from "../../../../../components/base/DatePicker/DatePicker"
import { Trans } from 'react-i18next';
import moment from "moment"


const sell_open = props => {

    const trChild = (item) => {
        let arr = [];
        arr = item.list_product_type.map((value, index) => {
            return (
                <tr key={value.product_type_id + index}>
                    <td className={`col-3 pl-0  ${index !== item.list_product_type.length - 1 ? "border-bottom-none" : null} `}></td>
                    <td className="col-3 pl-0">
                        <Trans>{isProductType(value.product_type_id)}</Trans>
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
                            <div className="text_date"><Trans>from</Trans></div>
                            {/* <DatePicker
                                value={item.sell_open_date}
                                className="m_datepicker form-group mb-0"
                                classValue="form-control js-datepicker"
                                disabled={true}
                                dateFormat="DD-MM-YYYY"
                            /> */}
                            <div className="m_datepicker form-group mb-0">
                                <input style={{ backgroundColor: "#ebebeb" }} type="text" className="form-control js-datepicker" placeholder="-" defaultValue={moment(item.sell_open_date).format("DD-MM-YYYY")} disabled="" />
                            </div>
                        </div>
                        <div className="input_date">
                            <div className="text_date"><Trans>to</Trans></div>
                            <div className="m_datepicker form-group mb-0">
                                <input style={{ backgroundColor: "#ebebeb" }} type="text" className="form-control js-datepicker" placeholder="-" defaultValue={moment(item.sell_end_date).format("DD-MM-YYYY")} disabled="" />
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
                    <th className="col-3 pl-0"><Trans>Sell open</Trans></th>
                    <th className="col-3 pl-0"><Trans>Product</Trans></th>
                    <th className="col-3 text-center"><Trans>Total agent</Trans></th>
                    <th className="col-3 text-center" ><Trans>Total internal</Trans></th>
                </tr>
            </thead>
            <tbody style={{ maxHeight: `300px` }}>

                {props.data.open_sell_detail != null && props.data.open_sell_detail.map((item, index) => {
                    return [trParent(item, index), trChild(item)]
                })}
            </tbody>
        </table>
    )
}
export default React.memo(sell_open);