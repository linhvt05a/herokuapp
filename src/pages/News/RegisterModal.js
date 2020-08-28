import React, { useState } from 'react';
import {Modal} from 'antd';
import {InputSelect} from '../../components/base/Select/index'
import {InputBase, ButtonStyle} from '../../components/base/index'
import { Trans } from 'react-i18next';
import TextArea from '../../components/base/TextArea/TextArea'
import {validateVisit} from '../../components/base/ValidateInput/ValidateInput'
import {useFormVisit} from '../../components/base/ValidateInput/useForm'

const project = [{value:"", label:'--Select--'},{value:1, label:'donalll'},{value:2, label:'cat'},{value:3, label:'dog'}]


const RegisterModal = (props) =>{
  const [showModal, setShowModal] = useState(true)
  const signValue = {visitName: '',visitMobile: '',visitSelect:'',visitContent:''}
  const {signValues, signErrors, handleChangeVisit, handleSelectVisit, handleSignVisit} = useFormVisit(signValue, visitRegister, validateVisit)

  function visitRegister(){
      console.log(signValues)
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
                  <InputBase placeholder="Họ tên *" type="text" name = "visitName" value={signValues.visitName} errors={signErrors.visitName} onChange={handleChangeVisit}/>
                
                  <InputBase placeholder="Điện thoại *" type="text" name="visitMobile" value={signValues.visitMobile} errors={signErrors.visitMobile} onChange={handleChangeVisit}/>

                  <InputSelect name="visitSelect" defaultValue={project[0].label} style={346}  datas={project}  errors={signErrors.visitSelect} onChange={handleSelectVisit} />

                  <TextArea name="visitContent" placeholder="Nội dung *"  className="form-control" value={signValues.visitContent} errors={signErrors.visitContent} handleChange={handleChangeVisit}/>
              </div>
              <div className="modal-footer justify-content-center border-top-0 pt-0 pb-4">
                  <ButtonStyle label="REGISTRATION" className="btn btn_green" onClick={handleSignVisit}/>
              </div>
            </div>
          </div>
        </div>
      </Modal>
  )
}

export default RegisterModal

