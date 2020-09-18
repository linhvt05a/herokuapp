
import React from 'react';
import { translate } from '../../../functions/Utils';
import { Upload } from "antd"

const CardRemittanceReceipt = props => {
    let { Dragger } = Upload;
    let { status } = props;
    return (<div className="block block__05">
        <h3 className="block__heading">
            <div className="d-flex flex-column flex-lg-row align-items-start  align-items-lg-center">
                {translate("cart_money_transfer_receipt")}
                <div className="can-edit ml-0 ml-lg-auto mt-2 mt-lg-0">
                    <i className="can-edit__icon fas fa-upload" />
                    <span className="can-edit__text"> {translate("cart_select_file")}</span>
                </div>
            </div>
            <span className="noted">
                {translate("cart_note_11")}
            </span>
        </h3>
        {!status ?
            <Dragger
                accept={"./pdf,image/*"}
                className="upload-files"
                listType={"picture-card"}
                children={(e) => console.log(e)}>
                {/* <input type="file" className="upload-files__input" /> */}
                <div className="upload-files__center">
                    <i className="upload-files__icon far las la-cloud-upload-alt" />
                    <span className="upload-files__text"> {translate("cart_upload_file")}</span>
                </div>
            </Dragger> :
            <div className="reply__master">
                <div className="files">
                    <div className="file">
                        <figure className="file-img"><img src="./images/pdf_default.png" /></figure>
                        <span className="file-name">
                            file-giay-to-01.xls</span>
                        <i className="file-delete fas fa-times-circle" />
                    </div>
                    <div className="file">
                        <figure className="file-img"><img src="./images/pdf_default.png" /></figure>
                        <span className="file-name">
                            file-giay-to-01.xls</span>
                        <i className="file-delete fas fa-times-circle" />
                    </div>
                </div>
                <div className="images">
                    <a className="image" href="./images/project_list03.jpg" data-fancybox="roadtrip">
                        <img src="./images/project_list03.jpg" />
                    </a>
                    <a className="image" href="./images/project_list04.jpg" data-fancybox="roadtrip">
                        <img src="./images/project_list04.jpg" />
                    </a>
                    <a className="image more" href="./images/project_list05.jpg" data-fancybox="roadtrip">
                        <img src="./images/project_list05.jpg" />
                        <span className="number">+4</span>
                    </a>
                    <a className="image d-none" href="./images/intro_project_6.jpg" data-fancybox="roadtrip">
                        <img src="./images/intro_project_6.jpg" />
                    </a>
                    <a className="image d-none" href="./images/intro_project_BietThuQ2.jpg" data-fancybox="roadtrip">
                        <img src="./images/intro_project_BietThuQ2.jpg" />
                    </a>
                    <a className="image d-none" href="./images/intro_project_CanHoQ2.jpg" data-fancybox="roadtrip">
                        <img src="./images/intro_project_CanHoQ2.jpg" />
                    </a>
                    <a className="image d-none" href="./images/intro_project_CentrelPark.jpg" data-fancybox="roadtrip">
                        <img src="./images/intro_project_CentrelPark.jpg" />
                    </a>
                </div>
            </div>

        }

    </div>
    )
}
export default CardRemittanceReceipt;