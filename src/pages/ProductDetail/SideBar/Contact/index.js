import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="product_contact">
                <h5>Dự Án Biệt thự Hưng Lợi</h5>
                <p className="address">17 đường D2, Phường 4, Quận Bình Thạnh, Tp.HCM</p>
                <ul className="contact_detail">
                    <li>Hotline tư vấn:  <a className="tel" tel="01234556789">012 345 567 89</a></li>
                    <li>Liên hệ qua mạng xã hội : 
                        <a href="./asset/images/icon_skype.png"><img src="./asset"/></a>
                        <a href="./asset/images/icon_message.png"><img src=""/></a>
                    </li>
                </ul>
                <p className="policy_detail"><i class="fas fa-file-alt"></i><a href="/">Chi tiết chính sách bán hàng</a></p>
            </div>
        )
    }
}