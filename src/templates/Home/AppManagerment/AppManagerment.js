import React from "react";
import { Link } from 'react-router-dom';
import Heading from './Heading';
import ListProject from './ListProject';
import Download from './Download';
import Picture from './Picture';

const AppManagerment = () => {
    return (

        <div className="app_managerment">
            <div className="container container-sm container-md">
                <h3 className="main_heading">
                    <span>Ứng dụng quản lý</span>
                </h3>
                <div className="app_managerment--content">
                    <div className="row">
                        <div className="col-12 col-lg-6">

                            <div className="app_managerment--left">
                                <Heading />
                                <ListProject />
                                <Download />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-end">
                            <Picture />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppManagerment;