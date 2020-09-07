import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { IMAGE_URL } from '../../../../contant'

export default class Contact extends Component {
    render() {
        const { dataInfo } = this.props;
        return (
            dataInfo ?
            <div className="info_contact">
                <div className="info_contact_apart">
                    {dataInfo.project_name}
                    <span className="address">{dataInfo.project_full_address}</span>
                </div>
                <ul className="info_contact_support">
                    <li className="info_contact_item">
                        <i className="icon_fa fas fa-star-of-life" />
                        <span>Hotline tư vấn:</span>
                        <span className="text_phone"> <br /> <span className="pd-left">012 345 567 89</span></span>
                    </li>
                    <li className="info_contact_item">
                        <i className="icon_fa fas fa-star-of-life" /> Liên hệ qua mạng xã hội :
                        <span className="icon"><br />
                            <span className="pd-left">
                                <img className="icon_skype" src={IMAGE_URL + "images/icon_skype.svg"} alt="icon_skype" />
                                <img className="icon_messenger" src={IMAGE_URL + "images/icon_messenger.jpg"} alt="icon_messenger" />
                            </span>
                        </span>
                    </li>
                </ul>
                <a href="#" className="info_contact_link">
                    <i className="icon_file fas fa-file-alt" />
                    Chi tiết chính sách bán hàng
                </a>
            </div>
            : ""
        )
    }
}