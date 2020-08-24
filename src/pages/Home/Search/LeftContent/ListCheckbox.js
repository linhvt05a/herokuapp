import React, { useState } from 'react';
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import InputCheckbox from "../../../../components/base/Input/InputCheckbox";


const ListCheckbox = (props) => {
    let { data } = props;

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
                        <ul className="list-inline list-inline-sm list_checkbox_while">
                            <li>
                                <InputCheckbox label="Chung cư căn hộ" />
                            </li>
                            <li>
                                <InputCheckbox label="Biệt thự cao cấp" />
                            </li>
                            <li>
                                <InputCheckbox label="Văn phòng cho thuê" />
                            </li>
                            <li>
                                <InputCheckbox label="Siêu thị" />
                            </li>
                            <li>
                                <InputCheckbox label="Trung tâm thương mại" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Link
                to="/#"
                className="btn btn_green"
            >
                TÌM KIẾM
            </Link>
        </div>
    )
}
export default ListCheckbox;