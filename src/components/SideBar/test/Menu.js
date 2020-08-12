import React from 'react';
import { Menu, Button } from 'antd';
import { Trans } from 'react-i18next';
import { Link } from "react-router-dom";

const MenuTest = props => {
    let data = props.menudata;
    const [state, setState] = React.useState({
        subMenu: "",
        menu: ""
    })
    const { SubMenu } = Menu;
    const activeSubMenu = (item, submenu = "") => {
        for (let i in item) {
            if (item[i].children) {
                activeSubMenu(item[i].children, item[i].label)
            }
            else if (item[i].label === data.active) {
                setState({ subMenu: submenu })

            }
        }
    }
    React.useEffect(() => {
        activeSubMenu(data.menudata);
    }, [props])
    const menuItem = (item) => {
        return (
            <Menu.Item key={item.label} icon={<i className={item.icon ? item.icon : "las la-home"}></i>}>
                <Link to={item.href}>
                    <Trans>{item.label}</Trans>
                </Link>
            </Menu.Item>
        )
    }
    return (
        <Menu
            OpenKeys={[state.subMenu]}
            mode="inline"
            theme="ligth"
            selectedKeys={[data.active]}
            onClick={(e) => e.domEvent.defaultPrevented()}>
            {data.menudata ? data.menudata.map((item, index) => {
                return (item.children ? <SubMenu key={item.label} icon={<i className={item.icon ? item.icon : "las la-home"}></i>} title={<Trans>{item.label}</Trans>}>
                    {item.children.map((value) => {
                        return menuItem(value)
                    })}
                </SubMenu> : menuItem(item))
            }) : null}

        </Menu>
    )
}

export default MenuTest