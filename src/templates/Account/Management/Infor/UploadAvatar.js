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
        handleUploadAvatar(file);
    }
    return (
        <div className="avatar">
            <div className="avatar__image">
                <div className="center no-data">
                    <i className="icon fas fa-camera-retro"></i>
                    <span className="text">Cập nhật ảnh</span>
                </div>
                <div className={`center has-data ${avatar == null ? "d-none" : ""}`}>
                    <img className="uploaded_avatar" src={avatar} alt="avatar" ref={uploadedImage} />
                </div>

                <input className="upload" type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg" onChange={handleImageUpload} ref={imageUploader} />
            </div>
            <div className={`upload_again ${avatar == null ? "d-none" : ""}`}>
                <i className="icon fas fa-camera-retro"></i>
                <input className="upload" type="file" />
            </div>
        </div>
    )
}
export default UploadAvatar;