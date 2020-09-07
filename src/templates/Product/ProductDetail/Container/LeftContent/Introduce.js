

import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import CardCollapse from '../../component/CardCollapse';


const Introduce = (props) => {
    const { data } = props;

    return (
        <CardCollapse title='introduce' {...props}>
            Khu VALLEN gồm 3 tòa căn hộ, được thiết kế hiện đại với 6 loại hình căn hộ từ 29 - 95m2, đáp ứng được mọi nhu cầu của khách hàng. Phân khu Sapphire 3 được đánh số thứ tự (tính từ tuyến đường sắt đô thị số 6 vào công viên trung tâm) lần lượt là S3.01, S3.02, S3.03.
            <iframe className="mt-3" width="100%" height={425} src="https://www.youtube.com/embed/pQiq9RGSg20" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </CardCollapse>
    )
}

export default Introduce;

