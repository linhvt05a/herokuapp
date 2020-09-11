import React, {useState, useEffect } from "react";
import CardHeader from "../../../components/common/CardHeader";
import {ProductRightBar, ProductContent, ProductSignInModal} from './index'
import ModalCustom from '../../../components/base/Modal/ModalCustom'
import {validateSignup, validateLogin} from '../../../components/base/ValidateInput/ValidateInput'
import {useFormSignup, useFormSignIn} from '../../../components/base/ValidateInput/useForm'
import { useDispatch, useSelector } from "react-redux";
import { productAction, accountAction} from "../../../store/action/index";

const ProductList = (props) => {
  const product = useSelector(state => state.productReducer);
  const productListSuccess = product.productFavoriteList.success
  const productList = productListSuccess ? product.productFavoriteList : null ;
  const total_page = productList && productList != null ? productList.total_page : null
  const total_record =productList && productList != null ? productList.total_record: null
  const page = productList && productList != null ? productList.page: null
  const dispatch = useDispatch();

  const productIncentive = useSelector(state => state.productReducer);
  const productIncentiveSuccess = productIncentive.productIncentive.success
  const productListIncentive = productIncentiveSuccess ? productIncentive.productIncentive.detail : null;

  const login = useSelector(state => state.accountReducer)
  const isLoginSuccess = login.login.success
  const loginData = localStorage.getItem('user')
  const [localData,setLocalData] = useState([])
  const newArray = [];
  
  useEffect(() => {
      dispatch(accountAction.loadLogin({}))
     
      if(loginData && loginData.user_id !== null){
        dispatch(productAction.productFavoriteList({page: 1, limit: 5}));
      }else {
        const dataStorage = sessionStorage.getItem('favor')
        const data = JSON.parse(dataStorage)
          data && data.forEach(obj => {
            if (!newArray.some(o => o.product_id == obj.product_id)) {
              newArray.push({ ...obj })
            }
          });
          setLocalData(newArray)
      }
      dispatch(productAction.productIncentive({}));
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
    dispatch(productAction.productSignup({signupValues}))
  }
function onPageChange (value) {
  dispatch(productAction.productFavoriteList({page: value, limit: 2}))
}
  const [showSignInModal, setShowSignIn] = useState(false)
  
  return (
    <div className="save_product bg_grey">
      <div className="container container-sm container-md">
        <div className="striking_apartment label_filter">
          <CardHeader label="List of products" />
          <div className="row">
            <ProductContent data={productList} loginData={loginData} productLocal = {localData} limit ={10} total_page={total_page} total_record={total_record} page={page} onPageChange ={onPageChange}/>
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
      <ModalCustom showAccountModal={showSignInModal} visible={showSignInModal} widthModal="400px"/>
    </div>
  );
};

export default ProductList;
