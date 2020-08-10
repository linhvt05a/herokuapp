import React, { Component } from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

function strcmp(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}

class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        this.props.click(this.props.data.label);
    };
    routeTo = (e) => {
        if (this.props.data.href) return this.props.data.href;
    };
    //sidebar-item active
    render() {
        const { data, children, click } = this.props;
        var clsname = "sidebar-link";
        if (data.children) {
            clsname = clsname + " has-arrow";
        }
        if (data.active) {
            clsname = clsname + " active";
        }
        return (
            <li
                className={data.active == true ? "sidebar-item active" : "sidebar-item"}
                onClick={this.handleClick}
            >
                {console.log(this.props.data.href)}
                {this.props.data.href ?
                    <Link to={this.props.data.href}>
                        <ul className={clsname}>
                            <i className={data.icon ? data.icon : "las la-home"}></i>
                            <span className="hide-menu">
                                <Trans>{data.label}</Trans>
                            </span>
                        </ul>


                        <ul className="collapse first-level base-level-line">
                            {data.children &&
                                data.children.map((item, index) => (
                                    <MenuItem key={index} data={item} click={click} />
                                ))}
                        </ul>
                    </Link> :
                    <div>
                        <ul className={clsname}>
                            <i className={data.icon ? data.icon : "las la-home"}></i>
                            <span className="hide-menu">
                                <Trans>{data.label}</Trans>
                            </span>
                        </ul>

                        <ul className="collapse first-level base-level-line">
                            {data.children &&
                                data.children.map((item, index) => (
                                    <MenuItem key={index} data={item} click={click} />
                                ))}
                        </ul>
                    </div>
                }
                {/* <Link to={this.props.data.href}>
                    <ul className={clsname}>
                        <i className={data.icon ? data.icon : "las la-home"}></i>
                        <span className="hide-menu">
                            <Trans>{data.label}</Trans>
                        </span>
                    </ul>
                </Link>

                <ul className="collapse first-level base-level-line">
                    {data.children &&
                        data.children.map((item, index) => (
                            <MenuItem key={index} data={item} click={click} />
                        ))}
                </ul> */}
            </li>
        );
    }
}
//
//( this.children ? 'sidebar-link active has-arrow' : 'sidebar-link active') :
//                    ( this.children ? 'sidebar-link has-arrow' : 'sidebar-link' ) }

//                    ( this.children ? 'sidebar-link active has-arrow' : 'sidebar-link active') :
//                    ( this.children ? 'sidebar-link has-arrow' : 'sidebar-link' ) }

export default MenuItem;
