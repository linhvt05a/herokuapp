import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h4>Dự Án Royal Garden</h4>
                <p>17 đường D2, Phường 4, Quận Bình Thạnh, Tp.HCM</p>
                <ul>
                    <li>Hotline tư vấn:  012 345 567 89</li>
                    <li>Liên hệ qua mạng xã hội : 
                        <a href="/">a</a>
                        <a href="/">b</a>
                    </li>
                </ul>
                <p><a href="/">Chi tiết chính sách bán hàng</a></p>
            </div>
        )
    }
}
