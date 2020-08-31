import React from "react";

const Notifi = (props) => {

    return (
        <div className="notifi">
            <div className="notifi__item">
                <div className="notifi__wrap">
                    <figure className="notifi__icon">
                        <span className="notifi__icon_img">
                            <img src="../images/bullhorn.svg" alt="Căn hộ B6 - F01 của Dự Án Royal Garden vừa được bán" />
                            </span>
                    </figure>
                    <div className="notifi__text">
                        Căn hộ B6 - F02 của Dự Án Royal Garden vừa được bán Dự Án Royal Garden vừa được bán
                    </div>
                </div>
            </div>
            <div className="notifi_item">
                <div className="notifi__wrap">
                    <figure className="notifi__icon">
                        <span className="notifi__icon_img">
                            <img src="../images/bullhorn.svg" alt="Căn hộ B6 - F01 của Dự Án Royal Garden vừa được bán" />
                            </span>
                    </figure>
                    <div className="notifi__text">
                        Căn hộ B6 - F01 của Dự Án Royal Garden vừa được bán
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifi;
