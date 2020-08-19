import React, { useState } from 'react';
import {Modal} from 'antd';
import {InputSelect} from '../../components/base/Select/index'
import {InputBase} from '../../components/base/index'

const RegisterModal = (props) =>{
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
                  <InputBase placeholder="Họ tên *" type="text" />
                  <InputBase  placeholder="Điện thoại *" type="text" />
                  <InputSelect />
                <div className="form-group">
                  <textarea placeholder="Nội dung *" className="form-control" style={{ height: 130 }} />
                </div>
              </div>
              <div className="modal-footer justify-content-center border-top-0 pt-0 pb-4">
                  <a href="#" className="btn btn_green"> ĐĂNG KÝ </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
  )
}

export default RegisterModal

