import React, { Component } from "react";
import { Trans } from "react-i18next";

const OverView = (props) => {

    const { cardClassName } = props

    const list = [
        {
            number: "1",
            title: "Bất động sản",
            text:
                "Xây dựng các công trình bất động sản chất lượng, đạt chuẩn cao cấp và đáp ứng yêu cầu của bạn",
        },
        {
            number: "2",
            title: "Công nghệ thông minh",
            text:
                "Áp dụng công nghệ thông minh vào ngôi nhà mơ ước của bạn. Giúp bạn có được cuộc sống thoải mái và đầy tiện nghi",
        },
        {
            number: "3",
            title: "Nâng cấp công nghệ",
            text:
                "Bảo trì, cập nhật và nâng cấp công nghệ thông minh của người dùng theo mọi thời điểm công nghệ mới nhất",
        },
    ];

    return (
        <div className={`overview ${cardClassName ? cardClassName : ''}`}>
            <div className="container container-sm container-md">

                <h2 className="overview_heading">
                    <Trans>Tổng quan Minerva</Trans>
                    <span className="sub">
                        <Trans>
                            Minerva phát triển các mảng bất động sản có áp
                            dụng các công nghệ thông minh hiện nay. Giúp mọi
                            người có cuộc sống thoải mái và tiện nghi với
                            công nghệ
                        </Trans>
                    </span>
                </h2>

                <div className="overview_services">
                    {list.map((Item, index) => (
                        <ItemOverView key={index} item={Item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ItemOverView = (props) => {
    const { item } = props;
    return (
        <div className="item">
            <p className="number">{item.number}</p>
            <p className="title">{item.title}</p>
            <p className="text">{item.text}</p>
        </div>
    );
};

export default OverView;
