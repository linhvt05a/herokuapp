import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemTimeLine from "../../components/common/Timeline/TimeLineItem";
import ItemProduct from "../../components/common/ItemProduct";
import HeadingLine from '../../components/common/HeadingLine';
import Slider from "react-slick";
import Pagination from '../../components/common/Pagination';
import { LoadDataPaging } from '../../functions/Utils';
import { productAction } from "../../store/action/index";
import SkeletonLoading from "../../components/common/Loading/SkeletonLoading";
import { PROJECT_SALE_GROUP, PRODUCT_LIST_TYPE_ID, PRODUCT_LIST_TYPE_VALUE } from "../../functions/Helper";
import {useLocation} from "react-router-dom";


const ProductList = (props) => {

    const {labelHeader, numberItem, showSlider,
          showFilter, productListType, viewType, readmore, bannerImg, classSaleQuick, classMb0 } = props
    const location = useLocation()
    const product = useSelector(state => state.productReducer);
    const isGetHotProductListSuccess = product.hotProductList.success;
    const datas = isGetHotProductListSuccess ? product.hotProductList : null;
    const dispatch = useDispatch();
    const [projectGroupId, setProjectGroupId] = useState(null);
    const dataProduct = datas && datas.detail.list_product

    useEffect(() => {
        if (numberItem != 0) {
            dispatch(productAction.loadHotProductList({ page: 1, limit: numberItem }));
        } else {
            dispatch(productAction.loadHotProductList({}));
        }
    }, []);

    const onProjectGroupFilterChange = (value) => {
        if (value != 0) {
            dispatch(productAction.loadHotProductList({ page: 1, limit: numberItem, list_product_type_id: `[${value}]` }));
            setProjectGroupId(value);
        } else {
            dispatch(productAction.loadHotProductList({ page: 1, limit: numberItem }));
            setProjectGroupId(null);
        }
    }

    const onPageChange = (value) => {
        if (projectGroupId != null) {
            dispatch(productAction.loadHotProductList({ page: value, limit: numberItem, list_product_type_id: `[${projectGroupId}]` }));
        } else {
            dispatch(productAction.loadHotProductList({ page: value, limit: numberItem }));
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
        <div className={`project_detail--list bg_grey ${classSaleQuick?classSaleQuick:''}`}>
            <div className="container container-sm container-md">
                <HeadingLine
                    headerBodyClassName={`label_filter--heading ${classMb0}` }
                    labelHeader={labelHeader}
                    data={PROJECT_SALE_GROUP}
                    options={showFilter}
                    readmore={readmore}
                    link={`/${PRODUCT_LIST_TYPE_ID(productListType ).text}`}
                    onChange={onProjectGroupFilterChange} trans
                />

                {bannerImg ? <figure className="mb-5"><img className="w-100" src={bannerImg} alt='Minerva' /></figure> : ''}

                {
                    (productListType == PRODUCT_LIST_TYPE_VALUE('flash-sale').id)
                        ? <ItemTimeLine datas={['2020-09-08T09:00:00', '2020-09-08T12:00:00', '2020-09-08T14:30:00', '2020-09-08T16:00:00', '2020-09-08T18:30:00']} />
                        : ""
                }
                <div className="striking_apartment--content">
                    {
                        datas
                            ? (datas.detail && datas.detail.list_product && datas.detail.list_product != null && datas.detail.list_product.length > 0)
                                ? showSlider
                                    ? <Slider {...settings}>
                                        {
                                            datas.detail.list_product.map((item, index) => (
                                                <ItemProduct key={item.product_id} data={item} dataProduct={dataProduct} />
                                            ))
                                        }
                                    </Slider>
                                    : <div className="row">
                                        {
                                            datas.detail.list_product.map((item, index) => (
                                                <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                                    <ItemProduct data={item} dataProduct={dataProduct} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                : <SkeletonLoading />
                            : <SkeletonLoading />
                    }
                </div>
                {
                    (numberItem == 0 && datas) &&
                    <Pagination data={LoadDataPaging(datas.total_record, datas.page, datas.total_page, numberItem)} onChange={onPageChange} />
                }
            </div>
        </div>
    )
}

export default ProductList;
