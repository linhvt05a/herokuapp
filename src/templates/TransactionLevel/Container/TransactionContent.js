import React from 'react';
import { Trans } from 'react-i18next';
import TransactionLeft from './Left/TransactionLeft';
import TransactionRight from './Right/TransactionRight';
import CardNoData from '../../../components/common/CardNoData';


const CardTransactionList = (props) => {
    
    const { dataFilter, projectInfoInit, error } = props
    console.log('dataFilter', dataFilter);
    console.log('error', error);
    return (
           
            <div className="exchanges bg_grey">
                <div className="container container-sm container-md">
                    <h2 className="main_heading"><span><Trans>Sàn giao dịch</Trans></span></h2>
                    {!error ? 
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-8 mb-4 mb-lg-0">
                            {dataFilter ? <TransactionLeft projectInfoInit = {projectInfoInit} dataFilter={dataFilter} /> : ''}
                                
                            </div>
                            <div className="col-12 col-sm-12 col-lg-4">
                                {dataFilter && <TransactionRight
                                    data={dataFilter}
                                    inputSelectDatas={props.inputSelectDatas}
                                    sliderDatas={props.sliderDatas}
                                    onPageChange={props.onPageChange}
                                    onFilterClick={props.onFilterClick}
                                />}
                                
                            </div>
                        </div> : <CardNoData />
                    }
                </div>
            </div> 
    )
}

export default CardTransactionList;
