import React, { useState } from 'react';
import Incentives from '../../../../components/common/Incentives';
import FilterTransaction from './FilterTransaction';
import SortAccordion from './SortAccordion';

const TransactionRight = (props) => {
        const { data, onFilterClick, inputSelectDatas, sliderDatas, onPageChange, blockName } = props;

        const [state, setState] = useState({
            active: false
        });

        const handleClick = () => {
            setState({
                active: !state.active
            })
        }

        return (
            <>
                <div className="exchanges_filter">
                    <div className="heading">
                        <span className="title">Sản phẩm khối {blockName}</span>
                        <span className="icon_filter fas fa-filter" onClick={handleClick} />
                    </div>
                    <FilterTransaction isStatusActive={state.active}
                        limit={6}
                        data={data}
                        inputSelectDatas={inputSelectDatas}
                        sliderDatas={sliderDatas}
                        onPageChange={onPageChange}
                        onFilterClick={onFilterClick}
                    />
                    <SortAccordion data={data}/>
                </div>                    
                <Incentives />
            </>
        )
}

export default TransactionRight;