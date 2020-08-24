import React, { Component } from 'react'
import { Trans } from 'react-i18next';

const dataContact = [
    {
        project_name: "Dự Án Biệt thự Hưng Lợi",
        address : "17 đường D2, Phường 4, Quận Bình Thạnh, Tp.HCM",
        tel_title: "Hotline tư vấn:",
        tel: '01234556789',
        sns_title: "Liên hệ qua mạng xã hội : ",
        img01: "./assets/images/icon_skype.png",
        img02: "./assets/images/icon_message.png"
    }
]

export default class Contact extends Component {
    render() {
        // const { dataContact } = this.props;
        return (
            <div className="product_contact">
            {
                dataContact.map((item,index) => (
                    <div key={index}>
                        <h5>{item.project_name}</h5>
                        <p className="address">{item.address}</p>
                        <ul className="contact_detail">
                            <li>{item.tel_title}  <a className="tel" tel={item.tel}>{item.tel}</a></li>
                            <li className="sns"><span>{item.sns_title}</span>
                                <a href="/"><img src={item.img01}/></a>
                                <a href="/"><img src={item.img02}/></a>
                            </li>
                        </ul>
                        <p className="policy_detail"><i class="fas fa-file-alt"></i><a href="/"><Trans>Chi tiết chính sách bán hàng</Trans></a></p>
                    </div>
                ))
            }
            </div>
        )
    }
}