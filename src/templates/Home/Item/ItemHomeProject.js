import React from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../contant";
import { convertDateShow } from "../../../functions/Utils"

const ItemHomeProject = (props) => {

    const { bodyClassName, data, projectStatus } = props

    return (
        <div className={bodyClassName}>
            <div className="project_list--item">
                <figure className="image" style={{ backgroundImage: "url(" + data.avatar_url + ")" }} />
                <div className="heading">
                    <div className="heading__name">
                        {data.project_name}
                    </div>
                    <div className="heading__date">
                        {data.current_project_sell_open_name != null ? data.current_project_sell_open_name + ":" : ""}
                        {data.current_sale_open_date != null ? convertDateShow(data.current_sale_open_date) + "-" : ""}
                        {data.current_sale_end_date != null ? convertDateShow(data.current_sale_end_date) + "-" : ""}
                    </div>
                    <div className="heading__list-btn">
                        <Link to="/#" className="btn btn_green text-uppercase">
                            <Trans>home_detail_button_title</Trans>
                        </Link>
                        <Link to={{ pathname: "/project/" + data.project_id, state: { projectId: data.project_id, projectName: data.project_name, projectStatus: projectStatus } }} className="btn btn_white text-uppercase">
                            <Trans>home_product_button_title</Trans>
                        </Link>
                    </div>
                </div>
                {
                    data.project_sale_status === 3 ?
                        <div className="sell_status selling">
                            <Trans>home_selling</Trans>
                        </div> :
                        data.project_sale_status === 2 ?
                            <div className="sell_status will_sell">
                                <Trans>home_coming_soon</Trans>
                            </div> : ""
                }
                <div className="icon_big_sale">
                    <img src={IMAGE_URL + "/images/icon_big_sale.png"} />
                </div>
            </div>
        </div>
    )
}

export default ItemHomeProject;
