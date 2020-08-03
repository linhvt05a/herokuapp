import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { CardHeader } from '../../../components/common';
import { InputSelect } from '../../../components/input';

const CardFilter = (props) => {
    return (
        <div className={props.className ? props.className : ''}>
            <CardHeader label="ProjectFilterTitle" />
            <div className="card square">
                <div className="card-body">
                    <div className="row">
                        <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" label="ByRegionTitle" name="region" />
                        <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" label="ByProvinceTitle" name="province" />
                        <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" label="ByProjectTypeTitle" name="project_type" />
                        <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" label="ByProjectStatusTitle" name="project_status" />
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <button type="submit" style={{float: "right"}} className="btn-uni-purple" ><Trans>Search</Trans></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFilter;