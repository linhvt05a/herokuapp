import React, { Component } from 'react';
import { Trans } from 'react-i18next';

export default class Info02 extends Component {
    render() {
        const { dataInfo } = this.props;        
        return (
            dataInfo ? <div className="info_2">
                <div className="heading">Thông tin chi tiết</div>
                <table>
                    <tbody>
                        {
                            dataInfo.detail.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="icon">
                                            <i class="icon_label fas fa-couch"></i>
                                        </td>
                                        <td className="name">
                                            <Trans>{item.name} ( {item.area_unit_name} )</Trans>
                                        </td>
                                        <td className="number">
                                            {item.area}
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
            </div> : ""
        )
    }
}
