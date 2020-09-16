import React from "react";
import { Trans } from "react-i18next";

const TopBanner = (props) => {
    let { data } = props;
    // console.log(2, data)
    return (
        <div className={`top_banner ${data.banner_show ? '' : 'd-none'}`}
            style={{ backgroundImage: `url("${data.banner_url}")` }}
        >
            <h2 className="top_banner--heading"><Trans>{data.banner_title}</Trans></h2>
        </div>
    )
}

export default TopBanner;
