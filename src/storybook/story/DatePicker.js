/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import DatePicker from '../../components/base/DatePicker/DatePicker';

const DatePickerStory = () => {

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <DatePicker
                        className="col-2"
                        placeholder="This is placeholder!!"
                        label="Input"
                    />
                </div>
            </div>
        </div>
    )
}

export default DatePickerStory;