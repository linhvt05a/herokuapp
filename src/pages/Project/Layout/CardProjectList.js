import React, { useState } from "react";
import { ItemProjectDetail } from "../Item/index";
import HeadingFilter from '../../../components/common/HeadingFilter';
import CardNoData from "../../../components/common/CardNoData";
import { CardProjectFilter } from './index';
import Pagination from '../../../components/common/Pagination';
import { LoadDataPaging } from '../../../utils/Utils';

const CardProjectList = (props) => {

    const { headerBodyClassName, labelHeader, datas } = props

    return (
        <div className="project_detail--list bg_grey sales_quick">
            <div className="container container-sm container-md">
                <div className="striking_apartment--content jsSalesQuick">
                    <HeadingFilter headerBodyClassName={headerBodyClassName} labelHeader={labelHeader} />
                    {
                        (datas && datas.length > 0) ?
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-8">
                                <div className="striking_apartment--content">
                                    <div className="row">
                                        {
                                            datas.map((item, index) => (
                                                <div key={index} className="col-12 col-sm-12 col-md-6 mb-3">
                                                    <ItemProjectDetail data={item} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <Pagination data={LoadDataPaging(18, 2, 5, 6)} />
                            </div>
                            <div class="col-12 col-sm-12 col-lg-4">
                                <CardProjectFilter />
                            </div>
                        </div> :
                        <CardNoData />
                    }
                </div>
            </div>
        </div>
    )
}

export default CardProjectList;
