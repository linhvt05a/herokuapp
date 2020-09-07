

import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import CardCollapse from '../../component/CardCollapse';


const Ultilities = (props) => {
    const { data } = props;

    return (
        <CardCollapse title='Ulitilities' {...props}>
            <div className="list_style_02">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                <p className="list_style_02--item">Bể bơi người lớn</p>
                                <p className="list_style_02--item">Giàn hoa, ghế nghỉ</p>
                                <p className="list_style_02--item">Vườn thiền</p>
                                <p className="list_style_02--item">Sân tập gym ngoài trời</p>
                            </div>
                            <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                <p className="list_style_02--item">Bể bơi trẻ em</p>
                                <p className="list_style_02--item">Vườn cảnh quan</p>
                                <p className="list_style_02--item">Thảm cỏ dưỡng sinh</p>
                                <p className="list_style_02--item">Thảm cỏ đa năng</p>
                            </div>
                            <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                <p className="list_style_02--item">Đường dạo quanh bể bơi</p>
                                <p className="list_style_02--item">Vườn dưỡng sinh- chơi cờ</p>
                                <p className="list_style_02--item">Sân chơi trẻ em</p>
                                <p className="list_style_02--item">Chòi nghỉ cảnh quan</p>
                            </div>
                        </div>
                    </div>
        </CardCollapse>
    )
}

export default Ultilities;

