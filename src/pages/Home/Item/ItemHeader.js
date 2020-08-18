import React from "react";
import { Trans } from 'react-i18next';
import { Link } from "react-router-dom";
import { Select } from 'antd'

const ItemHeader = (props) => {

    const { label, readmore, options } = props
    const { Option } = Select

    return (
        <div className="latest_news--heading">
            <h2 className="main_heading">
                <span><Trans>{label}</Trans></span>
            </h2>
            {
                readmore &&
                <Link to="/#" className="readmore">
                    <Trans>read_more</Trans>
                    <i className="icon fas fa-angle-double-right" />
                </Link>
            }
            {
                options &&
                <div class="filter_select">
                    <div class="text"><Trans>filter_by</Trans> : </div>
                    <div class="form-group filter_project">
                        <Select
                            className="form-control"
                            children={options.length > 0 && options.map((e, key) => {
                                return <Option name={name} key={key} value={e.value}>{trans ? <Trans>{e.label}</Trans> : e.label}</Option>;
                            })}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemHeader;
