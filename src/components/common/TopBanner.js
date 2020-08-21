import React from "react";

const TopBanner = (props) => {
    let { data } = props;
    // console.log(1, data)
    return (
        <div className={`top_banner ${data.banner_show ? '' : 'd-none'}`}
            style={{ backgroundImage: `url("${data.banner_url}")` }}
        >
            <h2 className="top_banner--heading">{data.banner_title}</h2>
        </div>
    )
}

export default TopBanner;
