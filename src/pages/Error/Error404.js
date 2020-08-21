import React from "react";

import TopBanner from "../../components/common/TopBanner";

class Error404 extends React.Component {
    render() {
        return (
            <div className="error404Page">
                <div className="container">
                    <div className="404-page pt-5 pb-5 text-center">
                        <figure>
                            <img
                                src="https://mdbootstrap.com/img/Others/404_mdb.png"
                                alt="Error 404"
                                className="img-fluid wow fadeIn animated"
                            />
                        </figure>
                        <h2
                            className="h2-responsive wow fadeIn mb-4 animated"
                            data-wow-delay="0.2s"
                        >
                            Oops! This obviously isn't a page you were looking
                            for.
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}
export default Error404;
