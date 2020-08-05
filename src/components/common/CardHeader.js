import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { DropdownAction, DropdownPurple, DropdownBlue } from '../dropdown';
import { SearchField } from '../common';

class CardHeader extends Component {

    render() {

        return (
            <div className={this.props.classHeading ? this.props.classHeading : "m_heading"}>
                <button className="m_button no-event">
                    <span><Trans>{this.props.label}</Trans>{this.props.labelEnd}</span>
                </button>
                {
                    this.props.endData && <DropdownEnd title={this.props.title} datas={this.props.endData} label={this.props.endLabel} onClick={this.props.onEndFilter} />
                }
            </div>
        );
    }
}

export default CardHeader;

