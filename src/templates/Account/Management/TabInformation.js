import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { UploadAvatar, CardFile } from "../index";
import { accountAction, commonAction } from "../../../store/action/index";

const TabInformation = (props) => {
    let { activeTab } = props;
    const dispatch = useDispatch();

    const [state, setState] = useState({
        avatar: '',
        dataCustumer: null
    });

    useEffect(() => {
        dispatch(accountAction.loadProfile({}))
    }, [])
    const isprofile = useSelector(state => state.accountReducer);
    const profileSuccess = isprofile.profile.success
    const profile = profileSuccess ? isprofile.profile.detail : null;

    const isimg = useSelector(state => state.accountReducer);
    const imageSuccess = isimg.uploadImage.success
    const img = imageSuccess ? isimg.uploadImage.detail : null;

    const handleUploadAvatar = (avatarName) => {
        dispatch(accountAction.loadImage({ image: avatarName }))
        const image = URL.createObjectURL(avatarName);
        setState({ avatar: img })
    }

    useEffect(() => {
        if (profile) {
            let dataCustumer = {
                birthday: profile.birthday,
                department_name: profile.department_name,
                email: profile.email,
                full_address: profile.full_address,
                mobile: profile.mobile,
                name: profile.name,
                gender: profile.position_role
            }
            setState({ ...state, dataCustumer })
        }
    }, [profile])

    return (
        <div className={`tab-pane fade ${activeTab === 0 ? "active show" : ""}`} id="tab_01" role="tabpanel" aria-labelledby="tab_01">
            {profile && profile != null ?
                <div className="row user-acc__info">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-4 mb-lg-0">
                        <UploadAvatar avatar={profile.avatar} handleUploadAvatar={handleUploadAvatar} />
                    </div>
                    {state.dataCustumer &&
                        <CardFile data={state.dataCustumer} avatarUpload={state.avatar} />}
                </div> : ''
            }
        </div>
    )
}
export default TabInformation;