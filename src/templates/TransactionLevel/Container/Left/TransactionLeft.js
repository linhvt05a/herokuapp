import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import ProjectPosition from './ProjectPosition';
import ProjectUltilities from './ProjectUltilities';
import Exchanges from './Exchanges';

const TransactionLeft = (props) => {
    const { dataFilter, projectInfoInit } = props;
    // console.log('dataFilter',dataFilter);
    return (
        <>
            <div className="project_item__detail">
                {projectInfoInit ? <ProjectPosition data={projectInfoInit} /> : ''}
                {dataFilter ? <ProjectUltilities data={dataFilter} /> : ''}
            </div>
            {dataFilter ? <Exchanges data={dataFilter} /> : ''}

        </>
    )
}
export default TransactionLeft;