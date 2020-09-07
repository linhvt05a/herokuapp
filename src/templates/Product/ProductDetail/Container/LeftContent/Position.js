

import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import CardCollapse from '../../component/CardCollapse';


const Position = (props) => {
    const { data } = props;

    return (
        <CardCollapse title='Position' {...props}>
            
            <div className="list_style_01">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                <p className="list_style_01--item">
                                    Dự án : <span className="value">Royal Garden</span>
                                </p>
                                <p className="list_style_01--item">
                                    Khu : <span className="value">Valencia</span>
                                </p>
                                <p className="list_style_01--item">
                                    Khối : <span className="value">A</span>
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                <p className="list_style_01--item">
                                    Mã sản phẩm : <span className="value">CH0123</span>
                                </p>
                                <p className="list_style_01--item">
                                    Tầng/Lô : <span className="value">B1</span>
                                </p>
                                <p className="list_style_01--item">
                                    Đường : <span className="value">Lí Thường Kiệt</span>
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                                <p className="list_style_01--item">
                                    Phường : <span className="value">12</span>
                                </p>
                                <p className="list_style_01--item">
                                    Quận/Huyện : <span className="value">Hồ Chí Minh</span>
                                </p>
                                <p className="list_style_01--item">
                                    Tỉnh/Thành phố : <span className="value">Hồ Chí Minh</span>
                                </p>
                            </div>
                        </div>
                    </div>
               
        </CardCollapse>
    )
}

export default Position;

