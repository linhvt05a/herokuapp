import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import DropItem from "./DropItem.js"
import { Link } from 'react-router-dom'

class DropdownEnd extends DropItem {

    onClick = (e) => {
        if( this.props.onClick ){
            this.props.onClick(e.target.name)
        }
    }

    render() {
        return (
            <div className="ml-auto d-flex">
                <div className="exchange-rate">
                    <span className="exchange-rate__label text-uppercase">
                        {
                            <Trans>{this.props.title}</Trans>
                        }
                    </span>
                    <div className={this.state.show ? "dropdown show" : "dropdown"}>
                        <button type="button" id="dropdownMenuButtonConvertMoney" className="dropdown-toggle btn_outline-purple text-uppercase">
                            {this.props.label}
                        </button>
                        <div class={this.state.show ? "dropdown-menu show" : "dropdown-menu"} style={{willChange: "transform", position: "absolute", transform: "translate3d(0px, 41px, 0px)", top: "0px", left: "0px"}}>
                            {
                                this.props.datas && this.props.datas.map((item, index) => <Link className="text-uppercase dropdown-item product_type" to={item.href} key={index} name={item.value} onClick={this.onClick}><Trans>{item.label}</Trans></Link>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DropdownEnd;
