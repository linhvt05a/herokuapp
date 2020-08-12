import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from "react-router-dom";
import { CardNodata } from "../Card"

const ListProductTable = props => {
    const trPerant = (data, index) => {
        return (
            <tr key={data.about + index}>
                <td className="text-left align-middle">{index}</td>
                <td className="text-left fw-medium align-middle">
                    <Link to={`${props.link_to}${data.project_id}`} className="link_href_6d30ab" >{data.project_name}</Link>
                </td>
                <td className="text-left align-middle" style={{ color: `#${data.setting_type_bg_color}` }}>{data.setting_type_name}</td>
                <td className="text-left align-middle">{data.investor_name}</td>
                <td className="text-left align-middle">{data.address}</td>
                <td className="text-left align-middle">{data.project_duration_type ? data.project_duration_type : "-"}</td>
                <td className="text-left align-middle">{data.project_acreage}<sup>2</sup> </td>
                <td className="text-left align-middle">{data.number_of_floor} (T)</td>
                <td className="text-left align-middle">{data.building_density}%</td>
                <td className="text-center align-middle">{data.total_area}</td>
                <td className="text-center align-middle">
                    <a className="uni_text_6d30ab" href="/backend/management/category/project/13/" title="Edit project">
                        {/* <i className="edit fs-20 icon las la-pen" /> */}
                    </a>
                    <Link to={`${props.link_to}${data.project_id}`} className="uni_text_6d30ab" title="News project">
                        <i className="news fs-20 icon las la-newspaper" />
                    </Link>
                </td>
            </tr>
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th className="text-uppercase"><Trans>No.</Trans></th>
                    <th className="text-uppercase">Project name</th>
                    <th className="text-uppercase">Project type</th>
                    <th className="text-uppercase">Project investor</th>
                    <th className="text-uppercase">Address</th>
                    <th className="text-uppercase">Land use term</th>
                    <th className="text-uppercase">Total area</th>
                    <th className="text-uppercase">Number of floor &amp; height</th>
                    <th className="text-uppercase">Building density</th>
                    <th className="text-uppercase text-center">Number of area</th>
                    <th className="text-uppercase text-center"><i className="las la-cog" style={{}} /></th>
                </tr>
            </thead>
            <tbody>
                {props.data.length > 0 ? props.data.map((item, index) => (
                    trPerant(item, index)
                )) : <CardNodata />}

            </tbody>
        </table>
    )
}

export default ListProductTable;