import React, { useState } from "react";
import { Trans } from 'react-i18next';  
import { Link } from "react-router-dom";
import { ItemProduct } from "../Item/index";
import HeadingFilter from '../../../components/common/HeadingFilter';
import CardNoData from "../../../components/common/CardNoData";
import Pagination from '../../../components/common/Pagination';
import { LoadDataPaging } from '../../../utils/Utils';

const CardHotProduct = (props) => {

    const { headerBodyClassName, labelHeader, datas, detail, options, onFilterChange } = props

    return (
        <div className="striking_apartment label_filter bg_grey">
            <div className="container container-sm container-md">
                <HeadingFilter headerBodyClassName={headerBodyClassName} labelHeader={labelHeader} options={options ? options : undefined} trans onChange={onFilterChange ? onFilterChange : undefined} />
                <div className="striking_apartment--content">
                    {
                        (datas != null && datas.length > 0) ?
                        <div className="row">
                            {
                                datas.map((item, index) => (
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
                            <Link to="/hot_product/list" className="btn btn_purple"><Trans>see_all</Trans></Link>
                        </div>
                    }
                    {
                        detail &&
                        <Pagination data={LoadDataPaging(18, 2, 5, 6)} />
                    }
                </div>
            </div>
        </div>
    )
}

export default CardHotProduct;
