import React, { useState } from 'react';
import { Trans } from 'react-i18next';

const PageLegend = () =>{
    return (
        <div className="col-12 col-sm-12 col-md-12 col-xl-10">
            <ul className="m_filter--type">
                <li className="first"><span><Trans>Filter by</Trans>: </span></li>
                    {/* this.state.datas && this.state.datas.map((data, index) => ( */}
                        <li >
                            <i ></i>
                            <span className={'text-danger'}>
                                
                                <Trans> </Trans>
                                <a className="uni_text_black" href="#" >
                                        <Trans></Trans></a>
                            </span>
                        </li>
                    
            </ul>
        </div>
    );
}
export default PageLegend
