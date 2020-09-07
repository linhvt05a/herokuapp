import React from 'react';
import { Trans } from 'react-i18next';

import CardNoData from '../../../components/common/CardNoData';
import {BlockBankPolicy, BlockExchanges, BlockInternalUtility, BlockProjectPosition, BlockPromotionPolicy, BlockSearchProduct} from './index';

const TransactionContent = (props) => {
    
    const { dataFilter, projectInfoInit, error , onProductTypeChange, onHouseDirectionChange, onPriceRangeChange, onAreaChange, onDeleteFilterClick } = props
    
    // console.log(dataFilter);

    return (
           
            <div className="exchanges bg_grey">
                <div className="container container-sm container-md">
                    <h2 className="main_heading"><span><Trans>exchanges_heading</Trans></span></h2>
                    {!error ? 
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-8 mb-4 mb-lg-0">

                                <div className="project_item__detail">
                                    {projectInfoInit ? <BlockProjectPosition data={projectInfoInit} /> : ''}
                                </div>

                                <BlockSearchProduct
                                    onProductTypeChange={onProductTypeChange}
                                    onHouseDirectionChange={onHouseDirectionChange}
                                    onPriceRangeChange={onPriceRangeChange}
                                    onAreaChange={onAreaChange}
                                    onDeleteFilterClick={onDeleteFilterClick}
                                />
 
                                { dataFilter ? <BlockExchanges data={dataFilter} /> : '' } 
                                
                            </div>
                            <div className="col-12 col-sm-12 col-lg-4">

                                <BlockPromotionPolicy 
                                    data={dataFilter} 
                                    heading='heading_policy_advice' 
                                />
                                <BlockBankPolicy 
                                    className='mt-5'
                                    data={dataFilter} 
                                    heading='heading_banking_policy' 
                                />
                                <BlockInternalUtility 
                                    className='mt-5'
                                    data={dataFilter} 
                                    heading='heading_internal_utility' 
                                />
                                
                            </div>
                        </div> : <CardNoData />
                    }
                </div>
            </div> 
    )
}

export default TransactionContent;
