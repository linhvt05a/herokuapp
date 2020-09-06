import React, { useState, useEffect  } from 'react';
import CardInputSliderFilter from '../../../components/common/CardInputSliderFilter'

const BlockSearchProduct = (props) => {

    const { onProductTypeChange, onHouseDirectionChange, onPriceRangeChange, onAreaChange, onDeleteFilterClick } = props

    return (
        <div className="project_page--filter project_page--filter_exchanges">
            <CardInputSliderFilter 
                title="project_filter" 
                filterWhite
                
                onProductTypeChange={onProductTypeChange}
                onHouseDirectionChange={onHouseDirectionChange}
                onPriceRangeChange={onPriceRangeChange}
                onAreaChange={onAreaChange}
                onDeleteFilterClick={onDeleteFilterClick}
            />
        </div>
    )
}


export default BlockSearchProduct