import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import DropItem from "./DropItem.js";
import { Link } from 'react-router-dom';

class DropdownPurple extends DropItem {

    onClick = (item) => {
        if (this.props.onFilter) {
            this.props.onFilter(item)
        }
    }

    render() {
        let { backgroundColor, color } = this.props;
        return (
            <div className="m_select m_dropdown" ref={node => this.node = node} >
                <button className="m_select--label m_dropdown--label square  dropdown-toggle" type="button" style={{ backgroundColor: backgroundColor, color: color }} >
                    <Trans>{this.props.label}</Trans>
                </button>
                <div className={this.state.show ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownMenuButton">
                    {
                        this.props.datas && this.props.datas.map((item, index) => <a className="dropdown-item " key={index} name={item.value} onClick={() => this.onClick(item)}><Trans>{item.label}</Trans> </a>)
                    }
                </div>
            </div>
        )
    }
}
export default DropdownPurple;
