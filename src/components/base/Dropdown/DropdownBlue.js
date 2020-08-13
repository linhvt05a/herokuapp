import React  from 'react';
import { Trans } from 'react-i18next';
import DropItem from "./DropItem.js";
import {Link} from 'react-router-dom';

class DropdownBlue extends DropItem {
    onClick=(e)=>{
        if( this.props.onClick ){
            this.props.onClick(e.target.name)
        }
    }
    render() {
        return (
            <div className="m_select m_dropdown" ref={node => this.node = node} >
                <button className="uni_dropdown_67a0f5 m_select--label m_dropdown--label square  dropdown-toggle" type="button" >
                    <Trans>{this.props.label}</Trans>
                </button>
                <div className={this.state.show ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownMenuButton">
                {
                    this.props.datas && this.props.datas.map((item, index) => <Link className="dropdown-item " to={item.href} key={index} name={item.value} onClick={this.onClick}>  <Trans>{item.label}</Trans> </Link> )
                }
                </div>
            </div>
        )
    }
}
export default DropdownBlue;
