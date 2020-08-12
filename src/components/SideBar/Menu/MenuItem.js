import React, { Component } from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Label } from "reactstrap";

function strcmp(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}

const MenuItem = props => {
    const [state, setState] = React.useState({
        labelParent: "",
        LabelChirld: ""
    })

    const handleClick = (e) => {
        props.click(props.data.label);
    };

    //sidebar-item active

    const { data, children, click } = props;
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
            onClick={data.active == true ? null : handleClick}
        >
            {/* {console.log(1, data)} */}
            {props.data.href ?
                // <Link to={props.data.href}>
                <Link to={props.data.href} className={clsname} style={{ color: props.active == data.label ? "#6d30ab" : null }}>
                    <i className={data.icon ? data.icon : "las la-home"}></i>
                    <span className="hide-menu" >
                        <Trans>{data.label}</Trans>
                    </span>
                </Link>
                // {/* </Link> */}
                :
                <div>
                    <ul className={clsname} style={{ color: data.active ? "#6d30ab" : null }}>
                        <i className={data.icon ? data.icon : "las la-home"}></i>
                        <span className="hide-menu">
                            <Trans>{data.label}</Trans>
                        </span>
                    </ul>

                    <ul className="collapse first-level base-level-line">
                        {data.children &&
                            data.children.map((item, index) => (
                                <MenuItem key={index} data={item} click={click} active={props.active} />
                            ))}
                    </ul>
                </div>
            }

        </li>
    );
}
//
//( children ? 'sidebar-link active has-arrow' : 'sidebar-link active') :
//                    ( this.children ? 'sidebar-link has-arrow' : 'sidebar-link' ) }

//                    ( this.children ? 'sidebar-link active has-arrow' : 'sidebar-link active') :
//                    ( this.children ? 'sidebar-link has-arrow' : 'sidebar-link' ) }

export default MenuItem;
