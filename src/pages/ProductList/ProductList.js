import React, {useState, useEffect } from "react";
import CardHeader from "../../components/common/CardHeader";
import {ProductRightBar, ProductContent, ProductSignInModal} from './index'
import {Modal} from 'antd'
import {validateSignup, validateLogin} from '../../components/base/ValidateInput/ValidateInput'
import {useFormSignup, useFormSignIn} from '../../components/base/ValidateInput/useForm'
import { useDispatch, useSelector } from "react-redux";
import { productListAction, productSignupAction, productIncentivesAction } from "../../store/action/index";

const ProductList = (props) => {
  const product = useSelector(state => state.productListReducer);
  const productListSuccess = product.productList.success
  const productList = productListSuccess ? product.productList : null ;

  const total_page = productList && productList != null ? productList.total_page : null
  const total_record =productList && productList != null ? productList.total_record: null
  const page = productList && productList != null ? productList.page: null
  const dispatch = useDispatch();

  const productIncentive = useSelector(state => state.productIncentiveReducer);
  const productIncentiveSuccess = productIncentive.productIncentive.success
  const productListIncentive = productIncentiveSuccess ? productIncentive.productIncentive.detail : null;

  useEffect(() => {
      dispatch(productListAction.productList({page: 1, limit: 5}));
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
function onPageChange (value) {
  dispatch(productListAction.productList({page: value, limit: 2}))
}
  const [showSignInModal, setShowSignIn] = useState(false)
  return (
    <div className="save_product bg_grey">
      <div className="container container-sm container-md">
        <div className="striking_apartment label_filter">
          <CardHeader label="List of products" />
          <div className="row">
            <ProductContent data={productList}  limit ={10} total_page={total_page} total_record={total_record} page={page} onPageChange ={onPageChange}/>
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
