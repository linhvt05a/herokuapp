/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect } from 'react';
import Select from '../../components/base/Select/Select';

const SelectStory = props => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <Select
                        data={[{ name: 'name1', value: 'value1', label: 'item1' }, { name: 'name2', value: 'value2', label: 'item2' },]}
                        placeholder='Choose a option'
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectStory;