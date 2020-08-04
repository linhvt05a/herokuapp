import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import ClipLoader from "react-spinners/ClipLoader";
import Modal from 'react-bootstrap/Modal'
import { CardHeader } from "../common";

import { userService, imageService } from '../../services';

import "./Dialog.css"

class DialogAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar_url: null,
            file: null,
            loading: false,
            error: '',
        };
        this.wrapper = React.createRef();
    }

    componentDidMount() {
        this.setState({
            avatar_url: this.props.info.avatar_url
        });
    }

    handleChange = (e) => {
        this.setState({
            file: e.target.files[0]
        });
    }

    editUserAvatar = (e) => {
        const { file } = this.state;
        if (file == null) {
            this.setState({ error: 'Bạn chưa chọn file.' });
            return;
        }

        this.setState({ loading: true });
        imageService.uploadFile(file).then(
            url => {
                this.uploadAvatar(file, url)
            },
            error => {
                this.setState({ error, loading: false })
                this.props.save(error,true)
            }
        )
    }

    uploadAvatar = (file, url) => {
        userService.editUserAvatar(this.props.user.token, file, url)
            .then(
                info => {
                    this.setState({ loading: false });
                    this.props.save(info['detail'])
                },
                error => {
                    this.setState({ error, loading: false })
                    this.props.save(error,true)
                }
            );
    }

    render() {
        if( !this.props.visible ){
            return <></>;
        }
        const { file, error, loading, avatar_url } = this.state;

        let image = '/static/img/profile-pic-round.png';
        if (file != null) {
            image = URL.createObjectURL(file);
        }
        else if (avatar_url != null) {
            image = avatar_url
        }

        return (
            <Modal size="lg" animation={true} show={true} ref={this.wrapper} >
                <CardHeader label="update avatar" />
                <div className="modal-content square w-100 border-0">
                    <div className="modal-body pb-0 w-100 pb-2" >
                        <div className="row body_profile">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="imgUp mt-1">
                                    <div className="imagePreview">
                                        <img className="previewImage" src={image} height="225px" style={{ "maxWidth": "225px" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8 input-user-profile">
                                <div className="row pt-2">
                                    <div className="col-lg-4 col-md-4 col-sm-12  pr-0 mr-0">
                                        <label className="btn square btn-upload " id="id_avatar">
                                            <i className="la la-image" style={{ "fontSize": "14px", "paddingRight": "10px" }}></i><Trans>choose image</Trans>
                                        </label>
                                        <input type="file" className="imageUpload img" accept="image/x-png,image/gif,image/jpeg,image/jpg" value="" name="file" style={{ "position": "absolute", "bottom": "13px", "left": "10px", "opacity": "0" }} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 pr-0 mr-0">
                                        <label className="btn square italic uni-very-light-pink name_image" style={{ "fontStyle": "italic", "color": "#d0c6c6", "marginLeft": "42px" }}>Chưa có file được chọn!</label>
                                    </div>

                                </div>
                                <label className="black text-bold-400"><Trans>note</Trans></label>
                                <div className="row">
                                    <ul>
                                        <li>
                                            Image size 128 x 128 pixels. Larger files will be resized and cropped to fit.
                                        </li>
                                        <li>
                                            <Trans>Photo format includes:</Trans>
                                            <b>png, jpg, jpeg …</b>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row m-0 p-0">
                                    <div className="col-12 m-0 p-0 pt-1 pr-2 mr-2">
                                        {
                                            error && <div className={'alert alert-danger'}>{error}</div>
                                        }
                                        {
                                            loading
                                            ? (<center><ClipLoader size={32} color={"#6d30ab"} /></center>)
                                            : (<button type="button" className="btn btn-save btn-uni-purple save_image" style={{ "float": "right", "width": "150px" }} onClick={this.editUserAvatar} ><Trans>Save</Trans></button>)
                                        }
                                        <button type="button" className="btn-uni-purple cancel_image mr-3" style={{ "float": "right", "width": "20%", "border": "1px solid #c5c5c5", "backgroundColor": "initial", "color": "red" }} onClick={this.props.close} ><Trans>Cancel</Trans></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default DialogAvatar;
