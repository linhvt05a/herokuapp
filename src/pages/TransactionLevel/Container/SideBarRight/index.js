import React, { useState } from 'react';
import Incentives from '../../../../components/common/Incentives';
import FilterTransaction from './FilterTransaction';
import SortAccordion from './SortAccordion';

const SideBarRight = (props) => {
        const { data, onFilterClick, inputSelectDatas, sliderDatas, limit, onPageChange } = props;

        const [state, setState] = useState({
            active: false
        });

        const handleClick = () => {
            setState({
                active: !state.active
            })
        }

        return (
            data ?
                <div className="col-12 col-sm-12 col-lg-4">
                    <div className="exchanges_filter">
                        <div className="heading">
                            <span className="title">Sản phẩm khối B</span>
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
                </div>
                : ""

        )
}

export default SideBarRight;