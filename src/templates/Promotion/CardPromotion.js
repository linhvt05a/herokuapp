import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

import ItemProduct from "../../components/common/ItemProduct";
import HeadingLine from '../../components/common/HeadingLine';
import CardNoData from "../../components/common/CardNoData";
import Pagination from '../../components/common/Pagination';
import { LoadDataPaging } from '../../functions/Utils';
import { productAction } from "../../store/action/index";

const CardPromotion = (props) => {

    const { headerBodyClassName, labelHeader, limit, banner, detail, options, readmore } = props

    const product = useSelector(state => state.productReducer);
    const isGetHotProductListSuccess = product.hotProductList.success;
    const datas = isGetHotProductListSuccess ? product.hotProductList : null;
    const dispatch = useDispatch();
    const [projectGroupId, setProjectGroupId] = useState(null);

    useEffect(() => {
        if (detail) {
            dispatch(productAction.loadHotProductList({ page: 1, limit: limit }));
        } else {
            dispatch(productAction.loadHotProductList({}));
        }
    }, []);

    const onProjectGroupFilterChange = (value) => {
        if (value != 0) {
            dispatch(productAction.loadHotProductList({ page: 1, limit: limit, list_product_type_id: `[${value}]` }));
            setProjectGroupId(value);
        } else {
            dispatch(productAction.loadHotProductList({ page: 1, limit: limit }));
            setProjectGroupId(null);
        }
    }

    const onPageChange = (value) => {
        if (projectGroupId != null) {
            dispatch(productAction.loadHotProductList({ page: value, limit: limit, list_product_type_id: `[${projectGroupId}]` }));
        } else {
            dispatch(productAction.loadHotProductList({ page: value, limit: limit }));
        }
    }

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="project_detail--list bg_grey sales_quick">
            <div className="container container-sm container-md">
                <HeadingLine
                    headerBodyClassName={headerBodyClassName}
                    labelHeader={labelHeader}
                    options={options}
                    readmore={readmore}
                    link="/promotions-attractive"
                    onChange={onProjectGroupFilterChange} trans
                />
                {
                    banner ? <img src="../images/sale_banner.png" style={{ width: "100%", marginBottom: "40px" }}></img> : ""
                }
                <div className="striking_apartment--content jsSalesQuick">
                    {
                        (datas && datas.detail && datas.detail.list_product && datas.detail.list_product != null && datas.detail.list_product.length > 0) ?
                            detail ?
                                <div className="row">
                                    {
                                        datas.detail.list_product.map((item, index) => (
                                            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                                <ItemProduct data={item} detail />
                                            </div>
                                        ))
                                    }
                                </div> :
                                <Slider {...settings}>
                                    {
                                        datas.detail.list_product.map((item, index) => (
                                            <ItemProduct key={index} data={item} />
                                        ))
                                    }
                                </Slider> :
                            <CardNoData />
                    }
                </div>
                {
                    (detail && datas) &&
                    <Pagination data={LoadDataPaging(datas.total_record, datas.page, datas.total_page, limit)} onChange={onPageChange} />
                }
            </div>
        </div>
    )
}

export default CardPromotion;
