import React, { useState, useEffect, useRef } from 'react';
import { Trans } from "react-i18next";

const UploadAvatar = (props) => {
    let { avatar, handleUploadAvatar } = props;

    const uploadedImage = useRef(null);
    const imageUploader = useRef(null);
    const handleImageUpload = (e) => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = avatar;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
        handleUploadAvatar(file.name);
    }
    return (
        <div class="avatar">
            <div class="avatar__image">
                <div class="center no-data">
                    <i class="icon fas fa-camera-retro"></i>
                    <span class="text">Cập nhật ảnh</span>
                </div>
                <div class={`center has-data ${avatar == null ? "d-none" : ""}`}>
                    <img class="uploaded_avatar" src={avatar} alt="avatar" ref={uploadedImage}/>
                </div>

                <input class="upload" type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} />
            </div>
            <div class={`upload_again ${avatar == null ? "d-none" : ""}`}>
                <i class="icon fas fa-camera-retro"></i>
                <input class="upload" type="file" />
            </div>
        </div>
    )
}
export default UploadAvatar;