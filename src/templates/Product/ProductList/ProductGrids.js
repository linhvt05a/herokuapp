import React, {useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { IMAGE_URL } from "../../../contant";
import {Link} from 'react-router-dom'
import {ProductNodata} from './index'
import {formatCurrency} from '../../../functions/Utils'
import { useDispatch, useSelector } from "react-redux";
import { productAction} from "../../../store/action/index";

const ProductGrids = (props) => {
    const{data, productLocal, loginData} = props
    console.log(data)
   
    return (
        <div className="striking_apartment--content">
        {loginData && loginData.user_id !== null ? 
        <div className="row">
            {data && data.detail.list_product.map((item, index)=><ProductRow loginData={loginData} data={item} key={index}/>)}
        </div>:
        <div className="row">
            {productLocal && productLocal.map((item, index)=><ProductRow loginData={loginData}  data={item} key={index}/>)}
            
        </div>
        }
      </div>   
    )
}

const ProductRow = (props) =>{
    const{data, loginData} = props
    const[is_favorite, setIs_favorite] = useState(false)
    const [postFavor,setFavor] = useState([])
    const dispatch = useDispatch();
    const saveToOder = (product_id) =>{
      localStorage.setItem('product', product_id)
    }
    
    var postData = []
    const isFavor = JSON.parse(sessionStorage.getItem("favor")) 
    
    const saveToStorage = (productID) => {
     if(loginData !== null){
        setIs_favorite(!is_favorite)
        var newData = []
        newData.push(data)
        console.log(newData)
     }else {
      setIs_favorite(!is_favorite)
      var favorite = JSON.parse(sessionStorage.getItem('favor'))
        for (var index = 0; index < favorite.length; index++) {
             if(favorite[index].product_id == productID){
              favorite[index].is_favorite = is_favorite
                sessionStorage.setItem("favor", JSON.stringify(favorite))
            }  
        }
        var index = favorite.indexOf(function (favorItem) {
          return favorItem.product_id == productID;
      });
   
      if(index !== -1){
       
      }else {
        for (let index = 0; index < favorite.length; index++) {
          if(favorite[index].product_id == productID){
          const newData = [...favorite]
            newData.filter((item)=> {
              if(item.product_id == productID){
                for (var i = 0;  i < newData.length; i++){
                    const newPost = {product_id: newData[i].product_id, is_favorite: newData[i].is_favorite}
                   postData.push(newPost)
                    
                }
                  
              }
            })
          }
        }
          sessionStorage.setItem('saveFavor',JSON.stringify(postData))
        
      }
      if (!favorite) {
        favorite = [];
    }  
     }
         
  }
    return(
        <div className="col-12 col-sm-12 col-md-6">
        <div className="item">
          <figure className="image">
            
           {loginData === null ? 
           <i className={!is_favorite && data.is_favorite === true ? "liked active fas fa-heart" : "liked fas fa-heart"} onClick={()=>saveToStorage(data.product_id)}/>
           :
          <i className={!is_favorite || data.is_favorite === true ? "liked active fas fa-heart" : "liked fas fa-heart"} onClick={()=>saveToStorage(data.product_id)}/>
          }
            <img
              src={data.product_avatar_url !="" ? data.product_avatar_url : IMAGE_URL +  "/images/no_data.png"}
              
            />
          </figure>
          <div className="heading">
            <div className="top">
              <a href="#" className="name">
                {data.product_name}
              </a>
              <p className="price mb-0">{formatCurrency(data.product_estimate_price)} tỷ</p>
            </div>
            <p className="address mb-0">
                <Trans>Listed price (VND)</Trans>
              <i
                className="noted fas fa-info-circle"/>
            </p>
          </div>
          <div className="details">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                <p className="child mb-0">
                  <i className="icon far fa-object-ungroup" />
                  <span className="text">
                    Diện tích :{data.product_acreage} ( m<sup>2</sup> )
                    <i
                      className="noted fas fa-info-circle"/>
                  </span>
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                <p className="child mb-0">
                  <i className="icon fas fa-bed" />
                  <span className="text">Phòng ngủ : {data.product_total_bedroom}</span>
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                <p className="child mb-0">
                  <i className="icon fas fa-compass" />
                  <span className="text">Hướng : {data.product_direction_name}</span>
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-6 pr-0 pb-1">
                <p className="child mb-0">
                  <i className="icon fas fa-restroom" />
                  <span className="text">Nhà vệ sinh : {data.product_total_bathroom}</span>
                </p>
              </div>
            </div>
          </div>
            <ProductButton saveToOder={()=>saveToOder(data.product_id)}/>
        </div>
      </div>
   
    )
}

const ProductButton = (props) =>{
  const {saveToOder} = props
    return(
        <div className="actions">
            <button className="btn btn_purple" onClick={saveToOder}>
                <Trans>ADD TO CART</Trans>
            </button>
            <button className="btn btn_white">
                <Trans>SEE DETAIL</Trans>
            </button>
      </div>
    )
}
export default ProductGrids