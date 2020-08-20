import React, { useState } from 'react';
import {Modal} from 'antd';
import {InputSelect} from '../../components/base/Select/index'
import {InputBase} from '../../components/base/index'

const project = [{value:1, label:'donalll'},{value:2, label:'cat'},{value:3, label:'dog'}]

const RegisterModal = (props) =>{
  const[fullName, setFullname] = useState('')
  const[mobile, setMobile] = useState('')
  const[projectSelect, setProject] = useState('')
  const[content, setContent] = useState('')
  const[submitted, setSubmitted] = useState(false)
  const[validateMessage, setValidate] = useState('')
  const[validateMobile, setValidMobile] = useState('')
  const[validContent,setValidContent] = useState('')
  const[validSelect, setValidSelect] = useState('')

  const handleInput = (e) =>{
    const{name, value} = e.target
    if(name ==="full_name"){
      setFullname(value)
    }
    else if(name=== "phone_number"){
     setMobile(value)
    }
    else if(name ==="content"){
      setContent(value)
      
    }
  }
    const handleSelect = (value) => {
      setProject(value)
    }
    
    const onSubmitted = () =>{
     if(fullName ==="" && mobile ==="" && content ==="" && projectSelect ===""){
        setValidate('Missing information field require')
        setValidMobile('Missing information field require')
        setValidContent('Missing information field require')
        setValidSelect('Missing information field require')
     }else if (fullName !=="" && projectSelect !== null && content !=="" && mobile !=="" ){
        setValidate('')
        setValidSelect('')
        setValidContent('')
        MobileRex(mobile)
     }
  }

  function MobileRex (mobile){
    const phoneRex = /^([+]39)?((3[\d]{2})([ ,\-,\/]){0,1}([\d, ]{6,9}))|(((0[\d]{1,4}))([ ,\-,\/]){0,1}([\d, ]{5,10}))$/
     if(!mobile.match(phoneRex)){
      return setValidMobile('Please enter a phone number with 10 digits.  1 not necessary')
   }else{
    return setValidMobile('')
   }
  }
  
  return (
          <Modal visible={false}  footer={null}>
              <div  className="modal fade show" style={{ paddingRight: 15,display:'block'}}>
                <div className="modal-dialog open" role="document" style={{ maxWidth: 395 }}>
                    <div className="modal-content">
                    <div className="modal-header">
                <h5 className="modal-title">
                      Đăng ký tham quan
                </h5>
                <button type="button"  className="close">
                  <i className="fas fa-times-circle" />
                </button>
              </div>
                <div className="modal-body pt-4 pl-4 pr-4">
                  <InputBase placeholder="Họ tên *" type="text" name = "full_name" value={fullName} onChange={handleInput} validateMessage={validateMessage}/>
                
                  <InputBase  placeholder="Điện thoại *" type="text" name="phone_number" value={mobile} onChange="" onChange={handleInput} validateMobile={validateMobile}/>

                  <InputSelect name="project" style={346}  onChange="" datas={project} onChange="" onChange={handleSelect} validSelect={validSelect}/>

                <div className="form-group">
                  <textarea placeholder="Nội dung *" name="content" className="form-control" style={{ height: 130 }} value= {content} onChange={handleInput}  />
                  <span style={{color: 'red', fontSize: 12}}>{validContent}</span>
                </div>
              </div>
              <div className="modal-footer justify-content-center border-top-0 pt-0 pb-4">
                  <a href="#" className="btn btn_green" onClick={onSubmitted}> ĐĂNG KÝ </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
  )
}

export default RegisterModal

