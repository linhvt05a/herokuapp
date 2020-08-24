import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import Contact from '../Contact';

class Info extends Component {
    render() {
        const { dataInfo } = this.props;
        return (
            <div className="info">
                {
                    dataInfo.map((infoItem, index) => (
                        <div key={index}>
                            {
                                infoItem.id == 1 ?
                                    <div>
                                        <div className="sales_heading">
                                            <span className="text">{infoItem.title01}
                                                <i className="icon_info fas fa-info-circle" />
                                            </span>
                                            <span className="number">{infoItem.listed_price}<Trans>đ</Trans></span>
                                            <p className="compare_price">
                                                <span className="num">{infoItem.compare_price}<Trans>đ</Trans></span>
                                                <span className="discount_label"><Trans>Giảm</Trans>7<Trans>%</Trans></span>
                                            </p>
                                        </div>
                                        <div className="info_1">
                                            <div className="item">
                                                <span className="title">
                                                    {infoItem.title02}
                                                    <i className="icon_info fas fa-info-circle" />
                                                </span>
                                                <span className="number water">
                                                    {infoItem.clearance_price}
                                                </span>
                                                <span className="unit">
                                                    <Trans>( đồng/m<sup>2</sup> )</Trans>
                                                </span>
                                            </div>
                                            <div className="item">
                                                <span className="title">
                                                    {infoItem.title03}
                                                    <i className="icon_info fas fa-info-circle" />
                                                </span>
                                                <span className="number acreage">
                                                    {infoItem.dientich}
                                                </span>
                                                <span className="unit">
                                                    <Trans>( m<sup>2</sup> )</Trans>
                                                </span>
                                            </div>
                                            <div className="item">
                                                <span className="title">
                                                    {infoItem.title04}
                                                </span>
                                                <span className="number direction">
                                                    {infoItem.huong}
                                                </span>
                                            </div>
                                        </div>
                                        <Contact/>
                                    </div>
                                    :
                                    <div className="info_2">
                                        <div className="heading">{infoItem.title}</div>
                                        <table>
                                            <tbody>
                                                {
                                                    infoItem.content.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className="icon">
                                                                    <i class="icon_label fas fa-couch"></i>
                                                                </td>
                                                                <td className="name">
                                                                    <Trans>{item.room} ( m<sup>2</sup> )</Trans>
                                                                </td>
                                                                <td className="number">
                                                                    {item.acreage}
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                        <div className="list_button d-flex">
                                            <a href="/" className="btn btn_green text-uppercase"><Trans>MUA NGAY</Trans></a>
                                            <a href="/" className="btn btn_purple text-uppercase"><Trans>NGÂN SÁCH</Trans></a>
                                        </div>
                                        <div className="see_bank_list"><a href="/"><Trans>XEM NGÂN HÀNG</Trans></a></div>
                                    </div>
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default Info;
