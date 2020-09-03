import React, { useState } from 'react';
import PolicyAdvice from '../../../../components/common/PolicyAdvice';
import FilterTransaction from './FilterTransaction';
import SortAccordion from './SortAccordion';

const TransactionRight = (props) => {
        const { data, onFilterClick, inputSelectDatas, sliderDatas, onPageChange, blockName } = props;

        console.log('data',data);

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
                <PolicyAdvice noFilter={true} data={data.list_promotion_policy} heading={'Chính sách ưu đãi'} />
                {/* <div className="exchanges_filter">
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
                </div>                     */}
                
            </>
        )
}

export default TransactionRight;