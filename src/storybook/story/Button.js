/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Button } from '../../components/base/Button';

const ButtonStory = props => {
    const onClick = () => {
        alert('click button');
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className='col-4'>
                        <Button className="border-0 bg_color_6d30ab text-white pl-2 pr-2 min-height-40 d-inline-block"
                            label="Purple Button"
                            onClick={onClick}
                        />
                    </div>
                    <div className='col-4'>
                        <Button className="border-0 bg_color_6d30ab text-white pl-2 pr-2 min-height-40 d-inline-block"
                            label="Purple Button"
                            onClick={onClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonStory;