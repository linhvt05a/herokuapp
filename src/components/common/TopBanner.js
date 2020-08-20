import React from "react";

const TopBanner = (props) => {

    let { data } = props;
    return (
        <div
            className="top_banner"
            style={{
                backgroundImage: "url(./assets/images/"+ data?.img +")",
                height: 350
            }}
        >
            <h2 className="top_banner--heading" style={{marginTop: 40}}>{data.title}</h2>
        </div>
    )
}

export default TopBanner;
