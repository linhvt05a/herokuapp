import React from "react";
import { Trans } from 'react-i18next';
import { Link } from "react-router-dom";
import { Select } from 'antd'

const HeadingFilter = (props) => {

    const { headerBodyClassName, labelHeader, readmore, options, status, trans } = props
    const { Option } = Select

    return (
        <div className={headerBodyClassName}>
            <h2 className="main_heading">
                <span><Trans>{labelHeader}</Trans></span>
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
                    <div class="filter_project form-group">
                        <Select
                            placeholder="Select--"
                            className="form-control"
                            children={options.length > 0 && options.map((e, key) => {
                                return <Option name={name} key={key} value={e.value}>{trans ? <Trans>{e.label}</Trans> : e.label}</Option>;
                            })}
                        />
                    </div>
                </div>
            }
            {
                status &&
                <div className="project_list--status text-uppercase">
                    <Link to="/#" className="status working">
                        <Trans>on_sale</Trans>
                    </Link>
                    <Link to="/#" className="status done">
                        <Trans>about_to_sell</Trans>
                    </Link>
                </div>
            }
        </div>
    )
}

export default HeadingFilter;
