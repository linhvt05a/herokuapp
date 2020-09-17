import React from "react";
import {IMAGE_URL} from "../../contant";

class Error404 extends React.Component {
    render() {
        return (
            <div className="errorPage error404Page">
                <div className="container">
                    <div className="404-page pt-5 pb-5 text-center">
                        <figure className="image">
                            <img
                                src={`${IMAGE_URL}images/404.svg`}
                                alt="Error 404"
                                className="img-fluid wow fadeIn animated"
                            />
                        </figure>
                        <h2
                            className="h2-responsive mb-4 text"
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
