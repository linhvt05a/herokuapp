import React, { useState } from 'react';
import {Modal} from 'antd';
import {InputSelect} from '../../components/base/Select/index'
import {InputBase} from '../../components/base/index'
import { Trans } from 'react-i18next';
import TextArea from '../../components/base/TextArea/TextArea'
import {validateVisit} from '../../components/base/ValidateInput/ValidateInput'
import {useFormVisit} from '../../components/base/ValidateInput/useForm'

const project = [{value:"", label:'--Select--'},{value:1, label:'donalll'},{value:2, label:'cat'},{value:3, label:'dog'}]


const RegisterModal = (props) =>{
  const signValue = {fullName: '',mobile: '',projectSelect:'',content:''}
  const {signValues, signErrors, handleChangeVisit, handleSelectVisit, handleSignVisit} = useFormVisit(signValue, visitRegister, validateVisit)
  const [showModal, setShowModal] = useState(true)

  function visitRegister(){
    console.log('Ready to register')
  }

  return (
          <Modal visible={showModal}  footer={null}>
              <div  className="modal fade show" style={{ paddingRight: 15,display:'block'}}>
                <div className="modal-dialog open" role="document" style={{ maxWidth: 395 }}>
                    <div className="modal-content">
                    <div className="modal-header">
                <h5 className="modal-title">
                      <Trans>Sign up to visit</Trans>
                </h5>
                <button type="button"  className="close" onClick={()=>setShowModal(false)}>
                  <i className="fas fa-times-circle" />
                </button>
              </div>
                <div className="modal-body pt-4 pl-4 pr-4">
                  <InputBase placeholder="Họ tên *" type="text" name = "fullName" value={signValues.fullName} errors={signErrors.fullName} onChange={handleChangeVisit}/>
                
                  <InputBase placeholder="Điện thoại *" type="text" name="mobile" value={signValues.mobile} errors={signErrors.mobile} onChange={handleChangeVisit}/>

                  <InputSelect name="projectSelect" defaultValue={project[0].label} style={346}  datas={project}  errors={signErrors.projectSelect} onChange={handleSelectVisit} />

                  <TextArea placeholder="Nội dung *" name="content" className="form-control" value={signValues.content} errors={signErrors.content} onChange={handleChangeVisit}/>
              </div>
              <div className="modal-footer justify-content-center border-top-0 pt-0 pb-4">
                  <a href="" className="btn btn_green" onClick={handleSignVisit}> <Trans>REGISTRATION</Trans> </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
  )
}

export default RegisterModal

