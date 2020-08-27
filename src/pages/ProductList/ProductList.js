import React, {useState, useEffect } from "react";
import CardHeader from "../../components/common/CardHeader";
import {ProductRightBar, ProductContent, ProductSignInModal} from './index'
import {Modal} from 'antd'
import {validateSignup, validateLogin} from '../../components/base/ValidateInput/ValidateInput'
import {useFormSignup, useFormSignIn} from '../../components/base/ValidateInput/useForm'
import { useDispatch, useSelector } from "react-redux";
import { productListAction, productSignupAction, productIncentivesAction } from "../../store/action/index";

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

const ProductList = (props) => {
  const[totalItem, setTotalItem] = useState(0)
  const[currentPage, setCurrentPage] = useState(0)
  const[totalPage, setTotalPage] = useState(0)
  const[itemOnPage, setItemOnPage] = useState(0)

  const product = useSelector(state => state.productListReducer);
  const productListSuccess = product.productList.success
  const productList = productListSuccess ? product.productList.detail : null;
  const dispatch = useDispatch();

  const productIncentive = useSelector(state => state.productIncentiveReducer);
  const productIncentiveSuccess = productIncentive.productIncentive.success
  const productListIncentive = productIncentiveSuccess ? productIncentive.productIncentive.detail : null;

  useEffect(() => {
      dispatch(productListAction.productList({}));
      dispatch(productIncentivesAction.productIncentive({}));
  }, []);
  
  const signupValue = {fullName: '', emailSignup: '', passwordSignup: '', rePass:''}
  const signInValue = {emailSignIn:'', passwordSignIn:''}

  const { signupValues,signupErrors, handleChangeSignup, handleSignUp} = useFormSignup(signupValue,register, validateSignup)
  const {signInValues, signInErrors, handleChangeSignIn, handleSignIn} = useFormSignIn(signInValue, signIn, validateLogin)

  function signIn(){
    const user = signInValues.emailSignIn
    const password = signupValues.passwordSignIn
  }
  function register(){
    dispatch(productSignupAction.productSignup({signupValues}))
  }

  const [showSignInModal, setShowSignIn] = useState(false)
  return (
    <div className="save_product bg_grey">
      <div className="container container-sm container-md">
        {/* striking apartment  */}
        <div className="striking_apartment label_filter">
          <CardHeader label="List of products" />
          <div className="row">
            <ProductContent data={productList} totalItem={totalItem} currentPage={currentPage} totalPage={totalPage} itemOnPage={itemOnPage}/>
            <ProductRightBar 
                data ={productListIncentive} 
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
            <ProductSignInModal 
              closeModal={()=> setShowSignIn(false)} 
              handleSignIn={handleSignIn} 
              handleChangeSignIn={handleChangeSignIn} 
              signValues={signInValues} 
              signInErrors={signInErrors}
            />
        </Modal>
    </div>
  );
};

export default ProductList;
