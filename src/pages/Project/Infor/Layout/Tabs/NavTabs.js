import React from 'react';
import { Trans } from 'react-i18next';

const NavTabs = (props) => {
    let { data, index, onItemClickTab, active } = props;
    const onClickTab = () => {
        onItemClickTab(index, data.tabTitle)
    }
    return (
        <li className="nav-item">
            <a className={`nav-link ${active != index ? "" : 'active'}`} onClick={onClickTab} >
                <Trans>{data.tabTitle}</Trans></a>
        </li>
    )
}

export default NavTabs;