import React from 'react';
import { Trans } from 'react-i18next';
import { Exchanges, Policy } from './../Container/ContainerLeft';
import SideBarRight from './SideBarRight';

const CardTransactionList = (props) => {

    const { data, limit, inputSelectDatas, sliderDatas, onFilterClick, onPageChange } = props

    return (
        <div className="exchanges bg_grey">
            <div className="container container-sm container-md">
                <h2 className="main_heading"><span><Trans>Sàn giao dịch</Trans></span></h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-8 mb-4 mb-lg-0">
                        <Policy data={data} />
                        <Exchanges data={data} />
                    </div>
                    <SideBarRight
                       limit={limit}
                       data={data}
                       inputSelectDatas={inputSelectDatas}
                       sliderDatas={sliderDatas}
                       onPageChange={onPageChange}
                       onFilterClick={onFilterClick}
                    />
                </div>
            </div>
        </div>
        )
}

export default CardTransactionList;
