
import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import { IMAGE_URL } from '../../../../contant';
import Slider from './Slider';



const ImagesFirst = (props) => {
    const { data } = props;
        console.log(data)
    const saveProduct = () =>{
        
    }
    return (
        <div className="apartment_slider">
            <div className="sales_timeline--heading">
                <figure className="image">
                    <img src={`${IMAGE_URL}images/clock.png`} alt="Sale chớp nhoáng" />
                </figure>
                <span className="label">Kết thúc trong</span>
                <span className="date_number">00 : 20 : 35</span>
            </div>

            <ul className="icon_like_down">
                <li>
                    <i className="fas fa-download" />
                </li>
                <li>
                    <i className="liked active fas fa-heart" onClick={saveProduct}/>
                </li>
            </ul>

            <Slider data={data} />
            
        </div>
    )
}

export default ImagesFirst;
