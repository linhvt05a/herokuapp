import React from 'react';
import { withTranslation, Trans } from 'react-i18next';


const ButtonStyle = (props) => {
    const { className, trans, require, value, element } = props;
    let url = "";
    return (
        <button className={`btn ${className}`}>
            <Trans>{value}</Trans>
        </button>
    )
}

export default ButtonStyle;
