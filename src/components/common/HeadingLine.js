import React from "react";
import { Trans } from 'react-i18next';
import { Link } from "react-router-dom";
import { Select } from 'antd';
import { PROJECT_SALE_GROUP } from "../../contant";

const HeadingLine = (props) => {

    const { headerBodyClassName, labelHeader, readmore, options, status, trans, link, onStatusClick, projectStatus, onChange } = props
    const { Option } = Select

    return (
        <div className={headerBodyClassName}>
            <h2 className="main_heading">
                <span><Trans>{labelHeader}</Trans></span>
            </h2>
            {
                readmore &&
                <Link to={link ? link : ""} className="readmore">
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
                            onChange={onChange}
                            children={PROJECT_SALE_GROUP.length > 0 && PROJECT_SALE_GROUP.map((e, key) => {
                                return <Option name={name} key={key} value={e.value}>{trans ? <Trans>{e.label}</Trans> : e.label}</Option>;
                            })}
                        />
                    </div>
                </div>
            }
            {
                status &&
                <div className="project_list--status text-uppercase">
                    <a name={3} className={projectStatus === 3 ? "status working active" : "status working"} onClick={onStatusClick}>
                        <Trans>home_selling</Trans>
                    </a>
                    <a name={2} className={projectStatus === 2 ? "status done active" : "status done"} onClick={onStatusClick}>
                        <Trans>home_coming_soon</Trans>
                    </a>
                </div>
            }
        </div>
    )
}

export default HeadingLine;