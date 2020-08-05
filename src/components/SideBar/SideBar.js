import React, { Component } from 'react';

import Profile from './Profile/Profile.js'
import Menu from './Menu/Menu.js'

class SideBar extends Component {
    render() {
        console.log('sidebar render');
        return (
            <aside className='left-sidebar'>
                <Profile user={this.props.user} />
                <Menu menudata={this.props.menudata} active={this.props.active} setItemActive={this.props.setItemActive} />
            </aside>
        )
    }
}

export default SideBar;
