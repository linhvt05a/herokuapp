import React, { Component } from 'react'
import { Trans } from 'react-i18next';

export default class Contact extends Component {
    render() {
        const { dataInfo } = this.props;
        console.log(dataInfo);
        return (
            dataInfo ?
                <div className="product_contact">
                    <h5>{dataInfo.project_name}</h5>
                    {/* <p className="address">{dataInfo.full_address}</p> */}
                    <ul className="contact_detail">
                        <li>Hotline tư vấn:  <a className="tel" tel="01234556789"><Trans>01234 556 789</Trans></a></li>
                        <li className="sns"><span><Trans>Liên hệ qua mạng xã hội : </Trans></span>
                            <a href="/"><img src="./assets/images/icon_skype.png" /></a>
                            <a href="/"><img src="./assets/images/icon_message.png" /></a>
                        </li>
                    </ul>
                    <p className="policy_detail"><i class="fas fa-file-alt"></i><a href="/"><Trans>Chi tiết chính sách bán hàng</Trans></a></p>
                </div> : ""
        )
    }
}