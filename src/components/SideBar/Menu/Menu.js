import React, { Component } from 'react';
import MenuItem from './MenuItem.js'
import $ from 'jquery';

//// left sidebar
//$('.sidebar-item .active').parent().parent().parent('li').find('a:first').addClass('active');
//$('.sidebar-item .active').parent().parent().parent('li').addClass('active');
//
//$('.sidebar-link').on('click', function (e) {
//    e.stopPropagation();
//    $('.sidebar-item').removeClass("active");
//    var sidebar_item = $(this).closest('.sidebar-item');
//
//    if (sidebar_item.hasClass("active")) {
//        sidebar_item.removeClass("active");
//    }
//    else {
//        sidebar_item.addClass("active");
//    }
//})

//        this.setState(state => ({
//            isToggleOn: !state.isToggleOn
//        }));

//[this.active]

function contain(menus, label){
    var data = {
        'ret': false,
        'lst': menus
    }
    if( !menus ){
        return [];
    }
    for( var i = 0 ; i < menus.length ; i ++ ){
        let menu = menus[i];
        if( menu.label == label ){
            menu.active = !menu.active;
            data['ret'] = true;
        }
        else{
            var o = contain(menu.children, label);
            menu.active = o['ret'];
            menu.children = o['lst'];
            if( menu.active == true ){
                data['ret'] = true;
            }
        }
    }
    return data;
}

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menudata: [],
        };
    }

    componentDidMount(){
        this.updateActive(this.props.active);
    }

    handleClick = (value) => {
        this.updateActive(value);
    }

    updateActive(label){
        let o = contain(this.props.menudata, label);
        if( o != null ){
            this.setState( { menudata: o['lst']} );
        }
    }

    render() {
        return (
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul>
                        { this.props.menudata.map( (item, index) => (
                            <MenuItem key={index} data={item} click={this.handleClick} />
                        ))}
                    </ul>
                </nav>
            </div>
        )
    }
}



export default Menu;
