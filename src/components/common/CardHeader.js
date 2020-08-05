import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import {
    DropdownAction, DropdownPurple, DropdownBlue
} from '../dropdown';


import {
    SearchField
} from '../common';

class CardHeader extends Component {

    render() {

        return (
            <div className={this.props.classBody ? this.props.classBody : "row align-items-end"}>
                <div className={this.props.classChild ? this.props.classChild : "col-xl-9 col-lg-9 col-md-12 col-sm-12"}>
                    <div className={this.props.classHeading ? this.props.classHeading : "m_heading"}>
                        <button className="m_button no-event text-uppercase">
                            <span><Trans>{this.props.label}</Trans>{this.props.labelEnd}</span>
                        </button>
                        {
                            this.props.purpleData && <DropdownPurple datas={this.props.purpleData} label={this.props.purpleLabel ? this.props.purpleLabel : "--ALL--"} onClick={this.props.onPurpleFilter} />
                        }
                        {
                            this.props.blueData && <DropdownBlue datas={this.props.blueData} label={this.props.blueLabel ? this.props.blueLabel : "--ALL--"} onClick={this.props.onBlueFilter} />
                        }
                        {
                            this.props.searchLabel && <SearchField label={this.props.searchLabel} value={this.props.searchValue} onSearch={this.props.onSearch} placeholder={this.props.searchHolder} />
                        }
                        {
                            this.props.clickDetail && <a className="m_link-detail" href="#" onClick={this.props.clickDetail}><Trans>Detail</Trans></a>
                        }
                    </div>
                </div>

                {
                    this.props.actionData &&
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                        <DropdownAction datas={this.props.actionData} label={this.props.actionLabel ? this.props.actionLabel : "Action"} onClickAction={this.props.onClickAction} />
                    </div>
                }
                {
                    this.props.classbtn &&
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                        {
                            this.props.classbtn &&
                            <button type="button" className={this.props.classbtn} onClick={this.props.handleClick}>
                                <Trans>{this.props.titleAction}</Trans>
                                {
                                    this.props.classIcon &&
                                    <i className={this.props.classIcon} />
                                }
                            </button>
                        }
                    </div>
                }

            </div>
        );
    }
}

export default CardHeader;