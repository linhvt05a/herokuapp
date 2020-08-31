import React, { Component } from 'react';
import PolicyTitle from './PolicyTitle';
import { Trans } from 'react-i18next';
import ViewVertical from './ViewVertical';

export default class Policy extends Component {
    render() {
        const { data, projectName, blockName, areaName } = this.props;
        return (
            data ?
                <div className="project_item__detail">
                    <PolicyTitle 
                        projectName={projectName}
                        blockName={blockName}
                        areaName={areaName}
                    />
                    <ViewVertical data={ data } />
                </div>
                : ""
        )
    }
}
