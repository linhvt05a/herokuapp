import React, { useState } from 'react';
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Handler } from 'leaflet';

const LocationView = props => {
    let { data, HandlerPosition, HandlerSearch } = props;

    return (
        <div className="map_origin--content">
            <h1 className="heading text-center">
                Bạn muốn tìm dự án bất động sản của Minerva
            </h1>
            <div className="list_button d-flex justify-content-center">
                <Link onClick={HandlerPosition}
                    to="/#"
                    className="btn btn_white map_to"
                    data-maptab="map_my-place"
                >
                    VỊ TRÍ CỦA BẠN
                </Link>
                <Link onClick={HandlerSearch}
                    to="/#"
                    className="btn btn_green map_to"
                    data-maptab="map_search"
                >
                    TÌM KIẾM
                </Link>
            </div>
        </div>
    )
}
export default LocationView;