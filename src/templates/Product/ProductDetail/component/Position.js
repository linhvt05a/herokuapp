

import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import CardCollapseGreenCircle from '../../../../components/common/CardCollapseGreenCircle';



const Position = (props) => {
    const { data } = props;

    return (
        <CardCollapseGreenCircle title='Vị trí' {...props}>

            <div className="list_style_01">
                <div className="row">
                    <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                        <p className="list_style_01--item">
                            Dự án : <span className="value">{data.project_name}</span>
                        </p>
                        <p className="list_style_01--item">
                            Khu : <span className="value">{data.area_name}</span>
                        </p>
                        <p className="list_style_01--item">
                            Khối : <span className="value">{data.block_name}</span>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                        <p className="list_style_01--item">
                            Mã sản phẩm : <span className="value">{data.product_code}</span>
                        </p>
                        <p className="list_style_01--item">
                            Tầng/Lô : <span className="value">{data.floor_or_lot_name}</span>
                        </p>
                        <p className="list_style_01--item">
                            Đường : <span className="value">{data.address}</span>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-sm-6 col-md-4">
                        <p className="list_style_01--item">
                            Phường : <span className="value">{data.ward_name}</span>
                        </p>
                        <p className="list_style_01--item">
                            Quận/Huyện : <span className="value">{data.district_name}</span>
                        </p>
                        <p className="list_style_01--item">
                            Tỉnh/Thành phố : <span className="value">{data.province_name}</span>
                        </p>
                    </div>
                </div>
            </div>

        </CardCollapseGreenCircle>
    )
}

export default Position;

