import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { DialogEdit, DialogAvatar } from "../../../components/dialogs"
import { InputText,InputDate } from '../../../components/input'
import { CardHeader, Spinner } from '../../../components/common'
import { userService } from '../../../services';

class CardlLeft extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDialog: false
        };
    }

    openDialog = (e) => { this.setState({ showDialog: true }); }
    closeDialog = (e) => { this.setState({ showDialog: false }); }
    saveDialog = (message,error) => { this.setState({ showDialog: false }); this.props.onSave(message,error) }

    render() {
        const { info, user } = this.props;
        return (
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 d-flex flex-column">
                <CardHeader label="image"/>
                {
                    info ?
                    (
                        <>
                            <div className="card square h-100 ">
                                <div className="card-body">
                                    <div className="imgUp mt-1">
                                        <div className="imagePreview">
                                            <img className="w-100" src={info.avatar_url} />
                                            <small className="uni_text_6d30ab float-right mt-2 mb-1" onClick={this.openDialog}
                                            style={{fontSize:"13px", textDecoration:"underline", fontWeight: "600"}}
                                            >
                                                <Trans>update avatar</Trans>
                                            </small>
                                        </div>
                                        

                                    </div>
                                </div>
                            </div>
                            <DialogAvatar info={info} user={user} visible={this.state.showDialog} close={this.closeDialog} save={this.saveDialog} />

                        </>
                    ) :
                    (
                        <Spinner />
                    )
                }
            </div>
        )
    }
}

class CardRight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showChange: false
        };
    }

    // openDialog = (e) => { this.setState({ showDialog: true }); }
    // closeDialog = (e) => { this.setState({ showDialog: false }); }
    // saveDialog = (e) => { this.setState({ showDialog: false }); this.props.onSave(e) }
    Change = (e) =>{
        this.setState({
            showChange: true
        })
    }



    onChange = (name, value ) => {
        this.setState({ [name]: value });
        // console.log("name value", name, value);
    }

    componentDidMount() {
        const { info } = this.props;
        this.setState({
            nick_name: info.nick_name
        });
    }

    onSave = (e) =>{    
        const { nick_name } = this.state;
        console.log("nick_name", this.state.nick_name);
        if (!(nick_name)) {
            return;
        }

        this.setState({ loading: true });
        userService.editUserInfo(this.props.user.token, nick_name)
        .then(
                info => { 
                    this.setState({ loading: false,
                        info : info['Detail'],
                        onSave: this.props.onSave(info['Detail'])
                 },
                        );
                    },
                error => {  this.setState({ error, loading: false,
                            onSave: this.props.onSave(info['Detail'])
                }) }
            );

    }

    render() {
        const { info, user } = this.props;
        return (
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 d-flex flex-column">
                <CardHeader label="information" classbtn="m-action btn-uni-action" titleAction="Change" handleClick={this.Change}/>
                {
                    info ?
                    (
                        <>
                            <div className="card square">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="text-uppercase uni_text_6d30ab"><Trans>Account</Trans></h5>
                                        </div>
                                    </div>
                                    <div className="row body_profile">
                                        <div className="col-lg-12 col-md-12 col-sm-12 input-user-profile">
                                            <div className="row">
                                                <InputText className="col-xl-4 col-lg-6 col-md-6 col-sm-12" name="username" label="username" value={info.username} onChange={this.onChange} disabled />
                                                <InputText className="col-xl-4 col-lg-6 col-md-6 col-sm-12" name="password" label="password" value={info.password} type="password" onChange={this.onChange} disabled classhref="uni_text_6d30ab" linkhref="/changepass" titlehref="[Password change]"/>
                                                {
                                                    this.state.showChange === false &&
                                                    <InputText className="col-xl-4 col-lg-6 col-md-6 col-sm-12" name="nick_name" label="Nickname" value={info.nick_name} onChange={this.onChange} disabled />
                                                    
                                                }
                                                {
                                                    this.state.showChange &&
                                                    <InputText className="col-xl-4 col-lg-6 col-md-6 col-sm-12" name="nick_name" label="Nickname" value={info.nick_name} onChange={this.onChange} />
                                                }
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-12">
                                                    <h5 className="text-uppercase uni_text_6d30ab"><Trans>Employee Information</Trans></h5>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <InputText className="col-lg-4 col-md-4 col-sm-4" name="full_name" label="Full Name" value={info.full_name} onChange={this.onChange} disabled />
                                                <InputText className="col-lg-4 col-md-4 col-sm-4" name="department_name" label="Department" value={info.department_name} onChange={this.onChange} disabled />
                                                <InputText className="col-lg-4 col-md-4 col-sm-4" name="position_name" label="Position" value={info.position_name} onChange={this.onChange} disabled />
                                                <InputText className="col-lg-4 col-md-4 col-sm-4" name="email" label="Email" value={info.email} onChange={this.onChange} disabled />
                                                <InputText className="col-lg-4 col-md-4 col-sm-4" name="mobile" label="Mobile" value={info.mobile} onChange={this.onChange} disabled />
                                                <InputDate className="col-lg-4 col-md-4 col-sm-4" label="Birthday" name="birthday" value={info.birthday} onChange={this.onChange} disabled/>
                                                <InputText className="col-12" name="office_address" label="Address" value={info.office_address} onChange={this.onChange} disabled />
                                            </div>
                                            {
                                                this.state.showChange && 
                                                <div className="row">
                                                    <div className="col-12" id="append_btn_update"> 
                                                        <button type="submit" id="btn_update_profile" className="btn btn-save btn-uni-purple float-right" onClick={this.onSave}  >Update                
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ):
                    (
                        <Spinner />
                    )
                }
            </div>
        )
    }
}


class PageProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: null,
        };
    }

    componentDidMount() {
        this.loadInfoData();
    }

    onSave = (message,error) => {
        if(error){
            this.props.showToast('error',message);
        }else{
            this.props.showToast('success',message);
            this.loadInfoData();
        }
       

    }

    loadInfoData = (e) => {
        userService.getUserInfo(this.props.user.token).then(
            info => {
                this.setState({ info: info['detail']}, () => {
                    this.forceUpdate();
                    console.log('loadInfoData');
                });
            },
            err => {
                this.props.showToast('error', err);
            }
        );
    }

    render() {
        if( !this.state.info ){
            return (<div></div>);
        }
        return (
            <div className="row">
                <CardlLeft info={this.state.info} user={this.props.user} onSave={this.onSave}/>
                <CardRight info={this.state.info} user={this.props.user} onSave={this.onSave}/>
            </div>
        )
    }
}


export default PageProfile;
