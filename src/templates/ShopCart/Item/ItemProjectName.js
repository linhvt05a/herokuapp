import React from 'react';
import InputCheckboxViolet from '../../../components/base/Input/InputCheckboxViolet'

const ItemProjectName = (props) => {
    return (
        <div className="block select-check  uni-text-6d30ab fw-bold">
            <InputCheckboxViolet checked={props.checked} onChange={props.onChange} />
            <span className="title-project">Dự án Royal Garden</span>
        </div>
    )
}
export default React.memo(ItemProjectName);
