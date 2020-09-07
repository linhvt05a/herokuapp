import React, { useState, useEffect  } from 'react';
import CardInputSliderFilter from '../../../components/common/CardInputSliderFilter'

const BlockSearchProduct = (props) => {

    const { onFilterChange, onDeleteFilterClick } = props

    return (
        <div className="project_page--filter project_page--filter_exchanges">
            <CardInputSliderFilter 
                title="product_filter" 
                filterWhite
                
                onFilterChange={onFilterChange}
                onDeleteFilterClick={onDeleteFilterClick}
            />
        </div>
    )
}


export default BlockSearchProduct