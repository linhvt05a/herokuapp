/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CardNodata from "./CardNodata"
import { Trans } from 'react-i18next';

const CardProductFilter = props => {
    let { dataFilter, label, onFilter } = props;
    return (
        <ul className="m_filter--type">
            <li className="first"><span><Trans>{label}</Trans></span></li>
            {dataFilter ? dataFilter.map((item, index) => {
                return (
                    <li key={index}>
                        <i className={`las la-square ${item.color}`}></i>
                        <span><a onClick={() => onFilter(item)} style={{ textDecorationLine: "underline" }}><Trans>{item.name}</Trans></a></span>
                    </li>
                )
            }) : <CardNodata />}
        </ul>
    )
}
export default CardProductFilter;