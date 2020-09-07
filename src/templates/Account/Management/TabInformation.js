import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { UploadAvatar, CardFile } from "../index";
import { accountAction, commonAction } from "../../../store/action/index";

const TabInformation = (props) => {
    
    const dispatch = useDispatch();

    const [state, setState] = useState({
        avatar: ''
    });
    
    useEffect(() => {
        dispatch(accountAction.loadProfile({ }))
    }, [])
    const isprofile = useSelector(state => state.accountReducer);
    const profileSuccess = isprofile.profile.success
    const profile = profileSuccess ? isprofile.profile.detail : null;
    const handleUploadAvatar = (avatarName) => {
        setState({ avatar: avatarName })
    }
    return (
        <div class="tab-pane fade active show" id="tab_01" role="tabpanel" aria-labelledby="tab_01">
            {profile && profile != null ?
            <div class="row user-acc__info">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <UploadAvatar avatar={profile.avatar} handleUploadAvatar={handleUploadAvatar} />
                </div>
                <CardFile data={profile} avatarUpload={state.avatar} /> 
            </div> :''
            }
        </div>
    )
}
export default TabInformation;