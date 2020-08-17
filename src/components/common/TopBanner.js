import React from "react";

class TopBanner extends React.Component {
    render() {
        return (
            <div
                className="top_banner"
                style={{
                    backgroundImage: "url(./assets/images/project.jpg)",
                }}
            >
                <h2 className="top_banner--heading">Dự án</h2>
            </div>
        );
    }
}

export default TopBanner;
