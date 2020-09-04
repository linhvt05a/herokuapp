import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const UploadAvatar = (props) => {
    return (
        <div class="avatar">
            <div class="avatar__image">
                <div class="center no-data">
                    <i class="icon fas fa-camera-retro"></i>
                    <span class="text">Cập nhật ảnh</span>
                </div>
                <div class="center has-data d-none">
                    <img class="uploaded_avatar" src="" alt="avatar"/>
                </div>

                <input class="upload" type="file" name="" id=""/>
            </div>
            <div class="upload_again d-none">
                <i class="icon fas fa-camera-retro"></i>
                <input class="upload" type="file" name="" id=""/>
            </div>
        </div>
    )
}
export default UploadAvatar;