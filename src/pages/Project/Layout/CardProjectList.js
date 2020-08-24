import React, { useState } from "react";
import { ItemProjectDetail } from "../Item/index";
import HeadingFilter from '../../../components/common/HeadingFilter';
import CardNoData from "../../../components/common/CardNoData";
import { CardProjectFilter } from './index';
import Pagination from '../../../components/common/Pagination'

const CardProjectList = (props) => {

    const { headerBodyClassName, labelHeader, datas } = props
    const [paging, setPaging] = useState({
        totalItem: 18,
        currentPage:  2,
        totalPage: 5,
        itemOnPage: 6
    });

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
                                <Pagination dataPaging={paging}/>
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
