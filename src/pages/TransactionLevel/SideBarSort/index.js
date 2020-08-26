import React, { Component } from 'react'
import Incentives from '../../../components/common/Incentives'
import SortAccordion from '../SortAccordion/SortAccordion';
import SidebarSortItem from './SidebarSortItem';

export default class SideBarSort extends Component {
    render() {
        const { data } = this.props;
        return (
            data ?
                <div className="col-12 col-sm-12 col-lg-4">
                    
                    <div className="exchanges_filter">
                        <div className="heading">
                            <span className="title">Sản phẩm khối B</span>
                            <span className="icon_filter fas fa-filter" />
                        </div>
                        <SidebarSortItem />
                        <SortAccordion data={data}/>
                    </div>
                    
                    <Incentives />
                </div>
                : ""

        )
    }
}
