import React from "react";
import { Trans } from 'react-i18next';
import { Link } from "react-router-dom";
import { Select } from 'antd';
import { PROJECT_SALE_GROUP_ID, PROJECT_SALE_GROUP_VALUE, PROJECT_STATUS_ID, PROJECT_STATUS_VALUE } from "../../functions/Helper";


const HeadingLine = (props) => {

    const { headerBodyClassName, data, labelHeader, readmore, options, selected, status, trans, link, onStatusClick, projectStatus, onChange } = props
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
                <div className="filter_select">
                    <div className="text"><Trans>filter_by</Trans> : </div>
                    <div className="filter_project form-group">
                        <Select
                            defaultValue={ selected ? selected : PROJECT_SALE_GROUP_VALUE('all').id}
                            placeholder="Select--"
                            className="form-control"
                            onChange={onChange}
                            children={data && data.length > 0 && data.map((e, key) => {
                                return <Option name={name} key={key} value={e.id}>{trans ? <Trans>{e.label}</Trans> : e.label}</Option>;
                            })}
                        />
                    </div>
                </div>
            }
            {
                status &&
                <div className="project_list--status text-uppercase">
                    <a 
                        name={PROJECT_STATUS_VALUE('on_sale').id}
                        className={projectStatus == PROJECT_STATUS_VALUE('on_sale').id ? "status working active" : "status working"}
                        onClick={onStatusClick}
                    >
                        <Trans>home_selling</Trans>
                    </a>
                    <a 
                        name={PROJECT_STATUS_VALUE('coming_soon').id}
                        className={projectStatus == PROJECT_STATUS_VALUE('coming_soon').id ? "status done active" : "status done"}
                        onClick={onStatusClick}
                    >
                        <Trans>home_coming_soon</Trans>
                    </a>
                </div>
            }
        </div>
    )
}

export default HeadingLine;
