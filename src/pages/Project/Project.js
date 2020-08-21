import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import HeadingFilter from '../../components/common/HeadingFilter'
import { ItemProject } from './Item/index'
import Pagination from '../../components/common/Pagination';
import FilterProject from '../../components/common/FilterProject';


const Contact = (props) => {
    const [paging, setPaging] = useState({
        totalItem: 18,
        currentPage:  2,
        totalPage: 5,
        itemOnPage: 6
    });

    return (
        <div className="projectPage">
            <div className="project_page bg_grey">
                <FilterProject />
                <div className="project_page--list project_tab">
                    <div className="container container-sm container-md">
                        <HeadingFilter headerBodyClassName="project_list--heading" labelHeader="project_list" status />
                        <div className="row project_list--content project_tab--content">
                            <ItemProject />
                            <ItemProject />
                            <ItemProject />
                            <ItemProject />
                            <ItemProject />
                            <ItemProject />
                        </div>
                        <ul className="pagination">
                            <Pagination dataPaging={paging}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;
