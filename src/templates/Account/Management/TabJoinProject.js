import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { UploadAvatar, CardFile, UserFilter, ViewProject, TableOriginal, ViewProjectDetail, ViewPaymentNotice, ViewTotalMoney } from "../index";
import { accountAction, commonAction } from "../../../store/action/index";

const TabJoinProject = (props) => {
    let { activeTab } = props;
    const dispatch = useDispatch();
    const [girdlist, setGirdList] = useState(0);
    const onActiveGird = () => {
       setGirdList(0);
    } 
    const onActiveList = () => {
        setGirdList(1);
    }
    const handleIdProject = () => {
        setGirdList(2);
    }
    
    return (
        <div className={`tab-pane fade ${activeTab === 2 ? "active show" : ""}`} id="tab_03" role="tabpanel" aria-labelledby="tab_03">
            {/* <!-- list project  --> */}
            <div className="row user-acc__project">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                    <UserFilter 
                        activeGird={onActiveGird} 
                        activeList={onActiveList} 
                        filterTab={activeTab} 
                        girdlist={girdlist}
                    />
                    <div className="project_item__grid" style={{display: girdlist === 0 ? "block" : "none"}}>
                        <div className="row">
                            <ViewProject getIdProject={handleIdProject} />
                            <ViewProject getIdProject={handleIdProject} />
                        </div>
                    </div>
                    <div className="project_item__list" style={{display: girdlist === 1 ? "block" : "none"}}>
                        <TableOriginal />
                    </div>
                    <div className="project__detail" style={{display: girdlist === 2 ? "block" : "none"}}>
                        <ViewProjectDetail />
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                    <ViewPaymentNotice />
                    <ViewTotalMoney />
                </div>
            </div>
        </div>
    )
}
export default TabJoinProject;