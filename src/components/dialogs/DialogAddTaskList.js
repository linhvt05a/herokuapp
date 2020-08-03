import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import { CardHeader } from "../common"
import {InputText, InputSelect,mapping} from '../input'
import { Trans } from 'react-i18next'

const FSList= [
    {value : 1, label: "fs1"},
    {value : 2, label: "fs2"},
    {value : 3, label: "fs3"}
]

class DialogAddTaskList extends Component{
    
    render(){
        return(
            <Modal show={this.props.visible} animation={true} onHide={this.props.Close}>
                <CardHeader label="Add" />
                <div className="modal-content square w-100 border-0">
                    <div className="modal-body pb-0 w-100 pb-2" >
                        <div className="row">
                            <InputText className="col-12" label="FS Name" name="name" value onChange={this.props.onChange}/>
                            <InputText className="col-12" label="New version number" name="name" value onChange={this.props.onChange}/>
                            <InputSelect className="col-12" label="Choose FS" options={FSList} name="name" value onChange={this.props.onChange}/>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <button type="button" className="btn-uni-purple float-right" onClick={this.props.ADD}>
                                    <Trans>Add</Trans>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default DialogAddTaskList