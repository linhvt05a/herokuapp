import React from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { IMAGE_URL } from "../../../contant";

const ItemProject = (props) => {

    const { data } = props

    return (
        <div className="d-flex flex-column col-12 col-sm-6 col-md-6 cols-lg-4 col-xl-4">
            <div className="project_page--item">
                <div className="wrap">
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
                    <figure className="image" style={{backgroundImage: "url("+ data.avatar_url +")"}} />
                    <div className="text">
                        <p className="name">
                            {data.project_name}
                        </p>
                        <p className="address">
                            {data.address}
                        </p>
                        <div className="list-btn">
                            <Link to="/project/1" className="btn btn_green text-uppercase">
                                <Trans>home_detail_button_title</Trans>
                            </Link>
                            <Link to="/#" className="btn btn_white text-uppercase">
                                <Trans>home_product_button_title</Trans>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="icon_big_sale">
                    <img src={IMAGE_URL + "/images/icon_big_sale.png"} />
                </div>
            </div>
        </div>
    )
}

export default ItemProject;
