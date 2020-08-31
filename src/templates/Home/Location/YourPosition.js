import React from 'react';
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { MapPosition } from "../../../components/common/Map/index";

const YourPosition = (props) => {
    let { active } = props;
    return (
        <div className={`map_my-place map_tab ${active.position == true ? "active" : "" }`}>
            <MapPosition />
        </div>
    )
}
export default YourPosition;