import React from "react";

class TopBanner extends React.Component {
    render() {
        return (
            <div
                className="top_banner"
                style={{
                    backgroundImage: "url(./assets/images/project.jpg)",
                    height: 350
                }}
            >
                <h2 className="top_banner--heading" style={{marginTop: 40}}>Tin tức</h2>
            </div>
        );
    }
}

export default TopBanner;
