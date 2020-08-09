import React from 'react';

const NavTabs = (props) => {
    let { data, index, onItemClickTab, active} = props;
    const onClickTab = () => {
        onItemClickTab(index, data.tabTitle)
    }
    return (
        <li className="nav-item">
            <a className={`nav-link ${active != index ? "" : 'active'}`} onClick={onClickTab} >
            {data.tabTitle}</a>
        </li>
    )
}

export default NavTabs;