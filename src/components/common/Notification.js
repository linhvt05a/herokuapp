import React from "react";
import { IMAGE_URL } from '../../contant';

const Notification = (props) => {
    const {datas} = props;

    return (
        <div className="notifi">
            {
                (datas && datas.length > 0) ? datas.map((value, key) => {
                    return (
                        <div className="notifi__item" key={key}>
                            <div className="notifi__wrap">
                                <figure className="notifi__icon">
                                    <span className="notifi__icon_img">
                                        <img src={`${IMAGE_URL}images/bullhorn.svg`} alt={value} />
                                    </span>
                                </figure>
                                <div className="notifi__text">
                                    {value}
                                </div>
                            </div>
                        </div>
                    )
                }) : ''
            }
        </div>
    )
}

export default Notification;
