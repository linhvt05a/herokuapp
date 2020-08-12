import React from 'react';

import Profile from './Profile/Profile.js'
import Menu from './Menu/Menu.js';
import MenuTest from "./test";

const SideBar = (props) => {
    const { user, menudata, active, setActiveItemMenu } = props;
    return (
        <aside className='left-sidebar' >
            <Profile user={user} />
            <Menu menudata={menudata} active={active} setItemActive={setActiveItemMenu} />
        </aside >
    )
}

export default React.memo(SideBar);
