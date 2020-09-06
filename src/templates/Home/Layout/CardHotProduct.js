import React, { useState } from "react";
import { Trans } from 'react-i18next';  
import { Link } from "react-router-dom";
import { ItemProduct } from "../Item/index";
import HeadingLine from '../../../components/common/HeadingLine';
import CardNoData from "../../../components/common/CardNoData";
import Pagination from '../../../components/common/Pagination';
import { LoadDataPaging } from '../../../functions/Utils';

const CardHotProduct = (props) => {

    const { headerBodyClassName, labelHeader, datas, limit, detail, options, onFilterChange, onPageChange } = props

    return (
        <div className="striking_apartment label_filter bg_grey">
            <div className="container container-sm container-md">
                <HeadingLine headerBodyClassName={headerBodyClassName} labelHeader={labelHeader} options={options ? options : undefined} trans onChange={onFilterChange ? onFilterChange : undefined} />
                <div className="striking_apartment--content">
                    {
                        (datas && datas.detail && datas.detail.list_product && datas.detail.list_product != null && datas.detail.list_product.length > 0) ?
                        <div className="row">
                            {
                                datas.detail.list_product.map((item, index) => (
                                    detail ?
                                    <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <ItemProduct data={item} />
                                    </div> :
                                    index < 6 ?
                                    <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <ItemProduct data={item} />
                                    </div> : ""
                                ))
                            }
                        </div> :
                        <CardNoData />
                    }
                    {
                        options &&
                        <div className="text-center text-uppercase">
                            <Link to="/hot-product" className="btn btn_purple"><Trans>see_all</Trans></Link>
                        </div>
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
