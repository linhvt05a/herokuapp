import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import DropItem from './DropItem';

class DropdownAction extends DropItem {
    render() {
        return (
            <div className="dropdown m-action" ref={node => this.node = node } >
                <button type="button" className="btn-uni-action dropdown-toggle" >
                    <Trans>{this.props.label}</Trans>
                </button>
                <div className={this.state.show ? "dropdown-menu show" : "dropdown-menu"} style={{borderRadius: "0"}} >
                {
                    this.props.datas && this.props.datas.map((item, index) => (
                        item.href
                        ? <a className="dropdown-item " href={item.href?item.href:'#'} key={index}>{item.icon && item.icon }<i className="la la-plus blue" style={{marginRight: "5px"}}/> <Trans>{item.value}</Trans></a>
                        : <a className="dropdown-item "  name={index } onClick={this.props.onClickAction}> {item.icon && item.icon } <i className="la la-plus blue" style={{marginRight: "5px"}}/> <Trans>{item.value}</Trans></a>
                    ))
                }
                </div>
            </div>
        )
    }
}


export default DropdownAction;
