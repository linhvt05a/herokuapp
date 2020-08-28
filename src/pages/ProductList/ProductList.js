import React, {useState, useEffect } from "react";
import CardHeader from "../../components/common/CardHeader";
import {ProductRightBar, ProductContent, ProductSignInModal} from './index'
import {Modal} from 'antd'
import {validateSignup, validateLogin} from '../../components/base/ValidateInput/ValidateInput'
import {useFormSignup, useFormSignIn} from '../../components/base/ValidateInput/useForm'
import { useDispatch, useSelector } from "react-redux";
import { productListAction, productSignupAction, productIncentivesAction } from "../../store/action/index";

  const product_incentives = [
    
  ]

const ProductList = (props) => {
  const[totalItem, setTotalItem] = useState(48)
  const[currentPage, setCurrentPage] = useState(1)
  const[totalPage, setTotalPage] = useState(48)
  const[itemOnPage, setItemOnPage] = useState(10)

  const product = useSelector(state => state.productListReducer);
  const productListSuccess = product.productList.success
  const productList = productListSuccess ? product.productList.detail.list_product : null;
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
        <div className="striking_apartment label_filter">
          <CardHeader label="List of products" />
          <div className="row">
            <ProductContent data={productList} totalItem={totalItem} currentPage={currentPage} totalPage={totalPage} itemOnPage={itemOnPage}/>
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
