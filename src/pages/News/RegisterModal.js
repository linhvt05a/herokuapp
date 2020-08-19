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

  const hanleInput = (e) =>{
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
    const phoneRex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    const onSubmitted = () =>{
     if(fullName ==="" && mobile ==="" && content ==="" && projectSelect ===""){
        setValidate('Missing information field require')
        setValidMobile('Missing information field require')
        setValidContent('Missing information field require')
        setValidSelect('Missing information field require')
     }else if(mobile !== phoneRex){
        setValidMobile('Please enter a phone number with 10 digits.  1 not necessary')
     }
     
  }

  
  return (
          <Modal visible={true}  footer={null}>
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
                  <InputBase placeholder="Họ tên *" type="text" name = "full_name" value={fullName} onChange={hanleInput} validateMessage={validateMessage}/>
                
                  <InputBase  placeholder="Điện thoại *" type="text" name="phone_number" value={mobile} onChange="" onChange={hanleInput} validateMobile={validateMobile}/>
               
                  <InputSelect name="project"  onChange="" datas={project} onChange="" onChange={handleSelect} validSelect={validSelect}/>
                 
                <div className="form-group">
                  <textarea placeholder="Nội dung *" name="content" className="form-control" style={{ height: 130 }} value= {content} onChange={hanleInput}  />
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

