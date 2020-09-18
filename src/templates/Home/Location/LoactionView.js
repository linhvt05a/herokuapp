import React, { useState } from 'react';
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const LocationView = props => {
    let { data, HandlerPosition, HandlerSearch, clearLocation } = props;
    const setMylocation = () => {
        HandlerPosition(clearLocation())
    }
    return (
        <div className="map_origin--content">
            <h1 className="heading text-center">
                <Trans>text_in_map_home</Trans>
            </h1>
            <div className="list_button d-flex justify-content-center">
                <a onClick={setMylocation}
                    className="btn btn_white map_to"
                    data-maptab="map_my-place"
                >
                    <Trans>your_location</Trans>
                </a>
                <a onClick={HandlerSearch}
                    className="btn btn_green map_to"
                    data-maptab="map_search"
                >
                    <Trans>search</Trans>
                </a>
            </div>
        </div>
    )
}
export default LocationView;