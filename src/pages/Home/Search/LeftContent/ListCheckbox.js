import React, { useState } from 'react';
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import InputCheckbox from "../../../../components/base/Input/InputCheckbox";
import { PROJECT_SALE_GROUP } from "../../../../contant";

const ListCheckbox = (props) => {
    let { data, OnSearchProject, listCheckbox } = props;
    // console.log(PROJECT_SALE_GROUP);

    const [toggle, settoggleSearch] = useState(false);
    return (
        <div className="map_search--option">
            <div className={`search_option ${toggle ? "active" : ""}`}>
                <div className="search_option-header">
                    <div className={`search_option-toggle ${toggle ? "active" : ""}`} onClick={() => settoggleSearch(!toggle)} />
                    <p className="search_option-title">
                        Lựa chọn loại hình bất động sản
                    </p>
                </div>
                <div className="search_option-content">
                    <div className="search_option-content-inner">
                        <InputCheckbox data={PROJECT_SALE_GROUP} listCheckbox={listCheckbox}/>
                    </div>
                </div>
            </div>
            <Link className="btn btn_green" onClick={OnSearchProject}>
                TÌM KIẾM
            </Link>
        </div>
    )
}
export default ListCheckbox;