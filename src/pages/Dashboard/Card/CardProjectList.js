import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';

import { CardHeader } from '../../../components/common';
import { mappingListToSelectList, InputSelect } from '../../../components/input';
import { regionListRequest, typeListRequest, statusListRequest, provinceListRequest } from '../../../store/action/dashboard';
import { useDispatch, useSelector } from "react-redux";

const CardProjectList = (props) => {
    
    return (
        <div className={props.className ? props.className : ''}>
            <CardHeader label="ProjectFilterTitle" />
            {
                regionSuccess &&
                <div className="card square">
                    <div className="card-body">
                        <div className="row">
                            <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" value={region === null ? '' : region} name="region" label="ByRegionTitle" placeholder="RegionHintText" options={regionData} onChange={onChange} />
                            <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" value={province === null ? '' : province} name="province" label="ByProvinceTitle" placeholder="ProvinceHintText" options={provinceData} onChange={onChange} />
                            <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" value={type === null ? '' : type} name="type" label="ByProjectTypeTitle" placeholder="ProjectTypeHintText" options={typeData} onChange={onChange} />
                            <InputSelect className="col-xl-3 col-lg-6 col-md-12 col-sm-12" value={status === null ? '' : status} name="status" label="ByProjectStatusTitle" placeholder="ProjectStatusHintText" options={statusData} onChange={onChange} />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button type="submit" style={{float: "right"}} className="btn-uni-purple"><Trans>Search</Trans></button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CardProjectList;