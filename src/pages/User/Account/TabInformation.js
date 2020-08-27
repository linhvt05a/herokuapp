import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { UploadAvatar, CardFile } from "../index";

const TabInformation = (props) => {
    return (
        <div class="tab-pane fade active show" id="tab_01" role="tabpanel" aria-labelledby="tab_01">
            <div class="row user-acc__info">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <UploadAvatar />
                </div>
                <CardFile />
            </div>
        </div>
    )
}
export default TabInformation;