import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import ProjectPosition from './ProjectPosition';
import Exchanges from './Exchanges';
import SearchProduct from './SearchProduct';

const TransactionLeft = (props) => {
    const { dataFilter, projectInfoInit } = props;
    // console.log('dataFilter',dataFilter);
    return (
        <>
            <div className="project_item__detail">
                {projectInfoInit ? <ProjectPosition data={projectInfoInit} /> : ''}
            </div>

            <SearchProduct />

            {dataFilter ? <Exchanges data={dataFilter} /> : ''}

        </>
    )
}
export default TransactionLeft;