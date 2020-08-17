import React from "react";
import { Trans } from 'react-i18next';
import { Link } from "react-router-dom";

const ItemHeader = (props) => {

    const { label } = props

    return (
        <div className="latest_news--heading">
            <h2 className="main_heading">
                <span><Trans>{label}</Trans></span>
            </h2>
            <Link to="/#" className="readmore">
                <Trans>read_more</Trans>
                <i className="icon fas fa-angle-double-right" />
            </Link>
        </div>
    )
}

export default ItemHeader;
