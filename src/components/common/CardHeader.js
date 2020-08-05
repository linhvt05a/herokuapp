import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { DropdownAction, DropdownPurple, DropdownBlue } from '../dropdown';
import { SearchField } from '../common';

const CardHeader = props => {
    console.log(props);
    return (
        <div className={props.classHeading ? props.classHeading : "m_heading"}>
            <button className="m_button no-event">
                <span><Trans>{props.label}</Trans>{props.labelEnd}</span>
            </button>
            {props.dropdown ?
                <div className="dropdown m_select m_dropdown">
                    <button className=" m_select--label m_dropdown--label square  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {props.dropdown.title}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {props.dropdown.data.map((value, index) => {
                            return <a key={index} className="dropdown-item" href={`${value.href}`}>{value.label.toUpperCase()}</a>
                        })}
                    </div>
                </div>
                : null}
        </div>

        // {
        //     this.props.actionData &&
        //     <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
        //         <DropdownAction datas={this.props.actionData} label={this.props.actionLabel ? this.props.actionLabel : "Action"} onClickAction={this.props.onClickAction} />
        //     </div>
        // }
        // {
        //     this.props.classbtn &&
        //     <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
        //         {
        //             this.props.classbtn &&
        //             <button type="button" className={this.props.classbtn} onClick={this.props.handleClick}>
        //                 <Trans>{this.props.titleAction}</Trans>
        //                 {
        //                     this.props.classIcon &&
        //                     <i className={this.props.classIcon} />
        //                 }
        //             </button>
        //         }
        //     </div>
        // }
    );
}

export default CardHeader;

