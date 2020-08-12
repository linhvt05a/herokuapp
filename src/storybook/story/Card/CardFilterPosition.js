/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { CardFilterPosition } from '../../../components/Card';

const CardStory = props => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <CardFilterPosition
                        label="Header 1"
                    />
                </div>
                <br />
            </div>
        </div>
    )
}

export default CardStory;