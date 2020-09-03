import React from 'react';
import {Trans } from 'react-i18next';
import {Link} from 'react-router-dom'

const ButtonStyle = (props) => {
    const {className, label, href, onClick, paramsSearch} = props
    return <Link  onClick={onClick} to={{
        pathname: href, state:{paramsSearch}}}
     className={className}><Trans>{label}</Trans></Link>
}

export default ButtonStyle;
