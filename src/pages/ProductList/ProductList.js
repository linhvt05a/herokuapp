import React, { Component, useState } from "react";
import CardHeader from "../../components/common/CardHeader";
import {ProductRightBar, ProductContent, ProductSignInModal} from './index'
import {Modal} from 'antd'
import {validateSignup, validateLogin} from '../../components/base/ValidateInput/ValidateInput'
import {useForm} from '../../components/base/ValidateInput/useForm'

const productList = [
  {
    id: 1, 
    title:' Căn hộ B6 - F01',
    prices: "3.24 tỷ",
    priceDefine: 'Giá bán đã niêm yết (đồng)',
    acreage:'100',
    bedRoom:'2',
    direction:'DB',
    toilet:'2'
  },
  {
    id: 2, 
    title:' Căn hộ B6 - F01',
    prices: "3.24 tỷ",
    priceDefine: 'Giá bán đã niêm yết (đồng)',
    acreage:'100',
    bedRoom:'2',
    direction:'DB',
    toilet:'2'
  },{
    id: 3, 
    title:' Căn hộ B6 - F01',
    prices: "3.24 tỷ",
    priceDefine: 'Giá bán đã niêm yết (đồng)',
    acreage:'100',
    bedRoom:'2',
    direction:'DB',
    toilet:'2'
  },
  {
    id: 4, 
    title:' Căn hộ B6 - F01',
    prices: "3.24 tỷ",
    priceDefine: 'Giá bán đã niêm yết (đồng)',
    acreage:'100',
    bedRoom:'2',
    direction:'DB',
    toilet:'2'
  }
  ]
  
  const product_incentives = [
    {
    id:1, 
    title: 'Thanh toán 30% căn hộ A01 - Royal Garden', 
    time:' Từ: 02/03/2020 - Đến: 02/06/2020', 
    pro1:'Giảm 2% giá trị',
    pro2:'Tặng 1 lượng vàng 9999',
    pro3:'Tặng gói bảo trì 1 năm căn hộ'
  },
  {
    id:2, 
    title: 'Thanh toán 30% căn hộ A01 - Royal Garden', 
    time:' Từ: 02/03/2020 - Đến: 02/06/2020', 
    pro1:'Giảm 2% giá trị',
    pro2:'Tặng 1 lượng vàng 9999',
    pro3:'Tặng gói bảo trì 1 năm căn hộ'
  },
  {
    id:3, 
    title: 'Thanh toán 30% căn hộ A01 - Royal Garden', 
    time:' Từ: 02/03/2020 - Đến: 02/06/2020', 
    pro1:'Giảm 2% giá trị',
    pro2:'Tặng 1 lượng vàng 9999',
    pro3:'Tặng gói bảo trì 1 năm căn hộ'
  },
  ]

const ProductList = () => {
  const signupValue = {fullName: '', emailSignup: '', passwordSignup: '', rePass:''}
  const { signupValues,signupErrors, handleChangeSignup, handleSignUp} = useForm(signupValue,register, validateSignup)

  function register(){
    console.log(signupValues)
  }

  const [showSignInModal, setShowSignIn] = useState(false)
  return (
    <div className="save_product bg_grey">
      <div className="container container-sm container-md">
        {/* striking apartment  */}
        <div className="striking_apartment label_filter">
          <CardHeader label="List of products" />
          <div className="row">
            <ProductContent data={productList}/>
            <ProductRightBar 
                data ={product_incentives} 
                showSignInModal={()=>setShowSignIn(true)}
                handleSignUp={handleSignUp} 
                handleChange={handleChangeSignup} 
                values= {signupValues} 
                errors={signupErrors}
            />
        </div>
        </div>
        {/* end striking apartment  */}
      </div>
        <Modal visible={showSignInModal}>
            <ProductSignInModal closeModal={()=> setShowSignIn(false)} handleSignIn="" handleChange="" values="" errors=""/>
        </Modal>
    </div>
  );
};

export default ProductList;
