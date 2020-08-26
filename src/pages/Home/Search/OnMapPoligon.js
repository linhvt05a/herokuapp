import React from 'react';
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { ListSelect, InputRange, ListCheckbox } from "./index";
import { MapPoligon } from "../../../components/common/Map/index";

const OnMapPoligon = props => {
    let { active } = props;
    return (
        <div className={`map_search map_tab ${active.search == true ? "active" : "" }`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-xl-6 p-0 bg_image d-flex justify-content-center flex-column">
                        <div className="map_search--content_home">
                            <h2 className="heading">
                                Tìm kiếm dự án theo{" "}
                            </h2>
                            <ListSelect />
                            <InputRange />
                            <ListCheckbox />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-xl-6 p-0">
                        {active.search == true ? <MapPoligon /> : ''} 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OnMapPoligon;