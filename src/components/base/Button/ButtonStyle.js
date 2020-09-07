import React from 'react';
import {Trans } from 'react-i18next';
import {Link} from 'react-router-dom'
import moment from 'moment'
const ButtonStyle = (props) => {
    const {className,dateFrom, dateTo, label, href, onClick, paramsSearch, titleNews} = props
    function convertDate(value){
        const date = moment(value).format('YYYY-MM-DD')
        return date
    }
    return <Link  onClick={onClick} to={{
        pathname: href, state:{paramsSearch, titleNews, dateFrom, dateTo}}}
     className={className}><Trans>{label}</Trans></Link>
}

export default ButtonStyle;
