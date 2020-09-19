import React from "react";
import ItemProduct from "../../components/common/ItemProduct";
import HeadingLine from '../../components/common/HeadingLine';
import CardNoData from "../../components/common/CardNoData";
import CardInputSliderFilter from '../../components/common/CardInputSliderFilter';
import Pagination from '../../components/common/Pagination';
import { LoadDataPaging } from '../../functions/Utils';
import StaticLoading from "../../components/common/Loading/StaticLoading";

const DataProjectList = (props) => {

    const { headerBodyClassName, labelHeader, datas, limit, onPageChange, onFilterChange, isloading } = props

    return (
        <div className="project_detail--list bg_grey sales_quick">
            <div className="container container-sm container-md">
                {isloading ? <StaticLoading /> :
                    <div className="striking_apartment--content jsSalesQuick">
                        <HeadingLine headerBodyClassName={headerBodyClassName} labelHeader={labelHeader} />
                        <div className="row">
                            {
                                (datas && datas.detail && datas.detail.list_product && datas.detail.list_product != null && datas.detail.list_product.length > 0) ?
                                    <div className="col-12 col-sm-12 col-lg-8">
                                        <div className="striking_apartment--content">
                                            <div className="row">
                                                {
                                                    datas.detail.list_product.map((item, index) => (
                                                        <div key={index} className="col-12 col-sm-12 col-md-6 mb-3">
                                                            <ItemProduct data={item} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <Pagination data={LoadDataPaging(datas.total_record, datas.page, datas.total_page, limit)} onChange={onPageChange} />
                                    </div> :
                                    <div className="col-12 col-sm-12 col-lg-8">
                                        <CardNoData />
                                    </div>
                            }
                            <div className="col-12 col-sm-12 col-lg-4">
                                <CardInputSliderFilter
                                    title="product_filter"
                                    onFilterChange={onFilterChange} />
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default DataProjectList;
