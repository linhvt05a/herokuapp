import React from 'react';
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const YourPosition = props => {
    let { active } = props;
    return (
        <div className={`map_my-place map_tab ${active.position == true ? "active" : "" }`}>
            <figure>
                <img
                    className="w-100"
                    src="./assets/images/map_my_place.jpg"
                    alt="Bạn muốn tìm dự án bất động sản của Minerva"
                />
            </figure>
        </div>
    )
}
export default YourPosition;