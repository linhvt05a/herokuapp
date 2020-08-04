import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import ClipLoader from "react-spinners/ClipLoader";
import Modal from 'react-bootstrap/Modal'
import { CardHeader } from "../common";
import { InputText } from "../input";

import { userService } from '../../services';
class DialogEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            mobile: '',
            loading: false,
            error: ''
        };
    }

    componentDidMount() {
        const { info } = this.props;
        this.setState({
            first_name: info.first_name,
            last_name: info.last_name,
            email: info.email,
            mobile: info.mobile
        });
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });
    }

    editUserInfo = (e) => {
        this.setState({ submitted: true });
        const { first_name, last_name, email, mobile } = this.state;
        if (!(first_name && last_name && email && mobile)) {
            return;
        }

        this.setState({ loading: true });
        userService.editUserInfo(this.props.user.token, first_name, last_name, email, mobile)
            .then(
                info => { this.setState({ loading: false }); this.props.save(info['detail']) },
                error => { this.setState({ error, loading: false }) }
            );
    }

    render() {
        const { email, mobile, first_name, last_name, loading, error } = this.state
        return (
            <Modal size="lg" animation={true} show={this.props.visible}  >
                <CardHeader label="Profile Edit" />
                <div className="modal-content square border-0">
                    <div className="modal-body pb-0 w-100 pb-2">

                        <div className="row mt-2">
                            <InputText isEmpty submitted={this.state.submitted} className="col-lg-6 col-md-6 col-sm-6" label="first name" name="first_name" value={first_name} onChange={this.handleChange} />
                            <InputText isEmpty submitted={this.state.submitted} className="col-lg-6 col-md-6 col-sm-6" label="last name" name="last_name" value={last_name} onChange={this.handleChange} />
                        </div>

                        <div className="row ">
                            <InputText isEmpty isEmail submitted={this.state.submitted} className="col-lg-6 col-md-6 col-sm-6" label="email" name="email" value={email} onChange={this.handleChange} />
                            <InputText isEmpty isPhone submitted={this.state.submitted} className="col-lg-6 col-md-6 col-sm-6" label="mobile" name="mobile" value={mobile} onChange={this.handleChange} />
                        </div>
                        <button type="button" className="btn bg-grey-blue bg-lighten-4 square btn-cancel font-weight-bold" style={{ "float": "right", "width": "20%" }} onClick={this.props.close}> <Trans>cancel</Trans> </button>
                        {
                            loading ?
                                (<center><ClipLoader size={32} color={"#6d30ab"} /></center>) :
                                (<button type="button" className="btn btn-save btn-uni-purple" style={{ "float": "right", "width": "150px" }} onClick={this.editUserInfo}> <Trans>Save</Trans> </button>)
                        }

                    </div>

                </div>
            </Modal>
        )
    }
}

export default DialogEdit;

//
//            <Modal className="modal-dialog  modal-lg h-100 my-0 mx-auto d-flex flex-column justify-content-center"
//                width="50%" visible={this.props.visible} effect="fadeInUp" onClickAway={this.props.close} >
