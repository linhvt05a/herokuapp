import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trans } from 'react-i18next';
import { Link } from "react-router-dom";
import ItemProduct from "../../../components/common/ItemProduct";
import HeadingLine from '../../../components/common/HeadingLine';
import CardNoData from "../../../components/common/CardNoData";
import Pagination from '../../../components/common/Pagination';
import { LoadDataPaging } from '../../../functions/Utils';
import { productAction } from "../../../store/action/index";
import { PROJECT_SALE_GROUP } from "../../../contant";

const CardHotProduct = (props) => {
    const { headerBodyClassName, labelHeader, location, limit, detail, options } = props
    const product = useSelector(state => state.productReducer);
    const isGetHotProductListSuccess = product.hotProductList.success;
    const datas = isGetHotProductListSuccess ? product.hotProductList : null;
    const dispatch = useDispatch();
    const dataProduct = datas && datas.detail.list_product
    const [projectGroupId, setProjectGroupId] = useState(null);

    useEffect(() => {
        if (detail) {
            if (location.state && location.state.projectGroupId && location.state.projectGroupId != null && location.state.projectGroupId != 0) {
                dispatch(productAction.loadHotProductList({ page: 1, limit: limit, list_product_type_id: `[${location.state.projectGroupId}]` }));
                setProjectGroupId(location.state.projectGroupId)
            } else {
                dispatch(productAction.loadHotProductList({ page: 1, limit: limit }));
            }
        } else {
            dispatch(productAction.loadHotProductList({}));
        }
    }, [location]);

    const onProjectGroupFilterChange = (value) => {
        if (value != 0) {
            dispatch(productAction.loadHotProductList({ list_product_type_id: `[${value}]` }));
            setProjectGroupId(value);
        } else {
            dispatch(productAction.loadHotProductList({}));
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

    return (
        <div className="striking_apartment label_filter bg_grey">
            <div className="container container-sm container-md">
                <HeadingLine
                    headerBodyClassName={headerBodyClassName}
                    data={PROJECT_SALE_GROUP}
                    labelHeader={labelHeader}
                    onChange={onProjectGroupFilterChange}
                    options trans
                />
                <div className="striking_apartment--content">
                    {
                        (datas && datas.detail && datas.detail.list_product && datas.detail.list_product != null && datas.detail.list_product.length > 0) ?
                            <>
                                <div className="row">
                                    {
                                        datas.detail.list_product.map((item, index) => (
                                            detail
                                                ? <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                                    <ItemProduct data={item} dataProduct={dataProduct} />
                                                </div>
                                                : index < 6
                                                    ? <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                                        <ItemProduct data={item} dataProduct={dataProduct} />
                                                    </div>
                                                    : ""
                                        ))
                                    }
                                </div>
                                {
                                    (options && datas.detail.list_product.length > 6) &&
                                    <div className="text-center text-uppercase">
                                        <Link to={{ pathname: "/hot-product", state: { projectGroupId: projectGroupId } }}
                                            className="btn btn_purple">
                                            <Trans>see_all</Trans>
                                        </Link>
                                    </div>
                                }
                            </> :
                            <CardNoData />
                    }
                    {
                        (detail && datas) &&
                        <Pagination data={LoadDataPaging(datas.total_record, datas.page, datas.total_page, limit)} onChange={onPageChange} />
                    }
                </div>
            </div>
        </div>
    )
}

export default CardHotProduct;
