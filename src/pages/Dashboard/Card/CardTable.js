import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class CardTable extends Component {
    render() {
        return (
            <div>
                <div className="m_heading">
                    {/* BUTTON TITLE : BEGIN */}
                    <button className="m_button no-event"><span>Project list</span></button>
                    {/* BUTTON TITLE : END */}
                    <div className="ml-auto d-flex">
                        <div className="exchange-rate">
                            <span className="exchange-rate__label text-uppercase">According to the exchange rate</span>
                            <div className="dropdown">
                                <button className="dropdown-toggle btn_outline-purple text-uppercase">
                                    VND
                                </button>
                                <div className="dropdown-menu" x-placement="bottom-start">
                                    <a className="text-uppercase dropdown-item product_type is_default">VND</a>
                                    <a className="text-uppercase dropdown-item product_type ">USD</a>
                                    <a className="text-uppercase dropdown-item product_type ">CNY</a>
                                    <a className="text-uppercase dropdown-item product_type ">HKD</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card square mb-0 mb-lg-4">
                    <div className="card-body">
                        <div className="mb-0 m_table m_table--list_project m_table--sales min-width-100-pc max-height-100 table_fixed">
                            <table style={{ minWidth: '1050px !important' }} id="list_projects">
                                <thead>
                                    <tr>
                                        <th style={{ width: '30%' }} className="col-1 pl-0">NO.</th>
                                        <th className="col-2">Projects name</th>
                                        <th className="col-2">Projects status</th>
                                        <th className="col-2">Expected revenue <span className="current_currency_name">(VND)</span></th>
                                        <th className="col-2">Reality revenue <span className="current_currency_name">(VND)</span></th>
                                        <th className="col-2">Cost <span className="current_currency_name">(VND)</span></th>
                                    </tr>
                                </thead>
                                <tbody style={{ maxHeight: 295, minHeight: 295, cursor: 'pointer' }}>
                                    <tr>
                                        <td style={{ width: '30%' }} className="col-1 pl-0">1</td>
                                        <td className="col-2">
                                            <a className="link_href_6d30ab">Dự án VTP</a>
                                        </td>
                                        <td className="col-2">
                                            <span style={{ color: '#a8c200' }}>Apartment</span>
                                        </td>
                                        <td className="col-2 uni_text_6d30ab fw-medium text-right" />
                                        <td className="col-2 m_text_e94c4c fw-medium text-right" />
                                        <td className="col-2 uni_text_fb9334 fw-medium text-right" />
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }} className="col-1 pl-0">2</td>
                                        <td className="col-2">
                                            <a className="link_href_6d30ab">Dự án VTP</a>
                                        </td>
                                        <td className="col-2">
                                            <span style={{ color: '#a8c200' }}>Apartment</span>
                                        </td>
                                        <td className="col-2 uni_text_6d30ab fw-medium text-right" />
                                        <td className="col-2 m_text_e94c4c fw-medium text-right" />
                                        <td className="col-2 uni_text_fb9334 fw-medium text-right" />
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }} className="col-1 pl-0">3</td>
                                        <td className="col-2">
                                            <a className="link_href_6d30ab">Dự án VTP</a>
                                        </td>
                                        <td className="col-2">
                                            <span style={{ color: '#e9c301' }}>Shopping Mall</span>
                                        </td>
                                        <td className="col-2 uni_text_6d30ab fw-medium text-right" />
                                        <td className="col-2 m_text_e94c4c fw-medium text-right" />
                                        <td className="col-2 uni_text_fb9334 fw-medium text-right" />
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }} className="col-1 pl-0">4</td>
                                        <td className="col-2">
                                            <a className="link_href_6d30ab">Dự án VTP</a>
                                        </td>
                                        <td className="col-2">
                                            <span style={{ color: '#a8c200' }}>Apartment</span>
                                        </td>
                                        <td className="col-2 uni_text_6d30ab fw-medium text-right" />
                                        <td className="col-2 m_text_e94c4c fw-medium text-right" />
                                        <td className="col-2 uni_text_fb9334 fw-medium text-right" />
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }} className="col-1 pl-0">1</td>
                                        <td className="col-2">
                                            <a className="link_href_6d30ab">Dự án VTP</a>
                                        </td>
                                        <td className="col-2">
                                            <span style={{ color: '#a8c200' }}>Apartment</span>
                                        </td>
                                        <td className="col-2 uni_text_6d30ab fw-medium text-right" />
                                        <td className="col-2 m_text_e94c4c fw-medium text-right" />
                                        <td className="col-2 uni_text_fb9334 fw-medium text-right" />
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }} className="col-1 pl-0">1</td>
                                        <td className="col-2">
                                            <a className="link_href_6d30ab">Dự án VTP</a>
                                        </td>
                                        <td className="col-2">
                                            <span style={{ color: '#a8c200' }}>Apartment</span>
                                        </td>
                                        <td className="col-2 uni_text_6d30ab fw-medium text-right" />
                                        <td className="col-2 m_text_e94c4c fw-medium text-right" />
                                        <td className="col-2 uni_text_fb9334 fw-medium text-right" />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="m_pager pt-3 pt-lg-4 pb-2">
                            <ul>
                                <li className="text-page">Page:</li>
                                <li className="disable"><a>First</a></li>
                                <li className="disable"><a>Previous</a></li>
                                <li className="active">
                                    <a>1</a>
                                </li>
                                <li className>
                                    <a>2</a>
                                </li>
                                <li><a>Next </a></li>
                                <li><a>Last</a></li>
                                <li className="page-current">
                                    <b>1</b> to <b>2</b> of 7 entries
                                </li>
                                <li className="vertical-dash">|</li>
                                <li className="text-page d-inline-flex">Find page : &nbsp;
                                <div className="form-group">
                                        <input type="number" className="form-control square page-number text-center" name="page_find" placeholder="Number" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTable;
