import React from 'react';
import {Trans } from 'react-i18next';
import {Link} from 'react-router-dom'

const ButtonStyle = (props) => {
    const {className, label, href, onClick} = props
    return <Link to={href ? href : ""} onClick={onClick} className={className}><Trans>{label}</Trans></Link>
}

export default ButtonStyle;
