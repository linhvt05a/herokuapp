/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

const sell_open = props => {
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

                {props.data != null && props.data.map((item, index) => {
                    return (
                        <>
                            <tr>
                                <td key={index} className="col-3 pl-0" style={{ width: 33 + "%" }}>
                                    <button readOnly="" type="button" className="border-0 bg_color_6d30ab text-white pl-2 pr-2 min-height-40 d-inline-block">
                                        {item.buttomName}
                                    </button>
                                </td>
                                <td colSpan="3" className="col-9 pl-0">
                                    <div className="d-flex">
                                        <div className="input_date mr-4">
                                            <div className="text_date">From</div>
                                            <div className="m_datepicker form-group mb-0">
                                                <input type="text" className="form-control js-datepicker" placeholder="-" defaultValue={item.date_from} disabled="" />
                                            </div>
                                        </div>
                                        <div className="input_date">
                                            <div className="text_date">To</div>
                                            <div className="m_datepicker form-group mb-0">
                                                <input type="text" className="form-control js-datepicker" placeholder="-" defaultValue={item.date_to} disabled="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {item.Apartment_from > 0 ? <tr>
                                <td className="col-3 pl-0  border-bottom-none "></td>
                                <td className="col-3 pl-0">
                                    Apartment
                        </td>
                                <td className="col-3 text-center">
                                    <div className="sales_number_selected">
                                        <span className="selected selected_01">{item.Apartment_from}</span>
                                        <span className="selected selected_02">-</span>
                                    </div>
                                </td>
                                <td className="col-3 text-center">
                                    <div className="sales_number_selected">
                                        <span className="selected selected_01">{item.Apartment_to}</span>
                                        <span className="selected selected_02">-</span>
                                    </div>
                                </td>
                            </tr> : null}
                            {item.Studio_from > 0 ? <tr>
                                <td className="col-3 pl-0  border-bottom-none "></td>
                                <td className="col-3 pl-0">
                                    Studio
                        </td>
                                <td className="col-3 text-center">
                                    <div className="sales_number_selected">
                                        <span className="selected selected_01">{item.Studio_from}</span>
                                        <span className="selected selected_02">-</span>
                                    </div>
                                </td>
                                <td className="col-3 text-center">
                                    <div className="sales_number_selected">
                                        <span className="selected selected_01">{item.Studio_to}</span>
                                        <span className="selected selected_02">-</span>
                                    </div>
                                </td>
                            </tr> : null}
                        </>
                    )
                })}
            </tbody>
        </table>
    )
}
export default sell_open;