/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect } from 'react';
import { CardHeader } from '../../../components/Card';

const CardHeaderStory = props => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <CardHeader
                        label="Header 1"
                    />
                </div>
                <br />
                <div className="row">
                    <label>Card header with search</label>
                    <CardHeader
                        label="Header 1"
                        searchBox
                    />
                </div>
            </div>
        </div>
    )
}

export default CardHeaderStory;