/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../store/action";
import ProductItem from './ProductItem';

const ProductDetail = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productAction.ProductLoadList({}))
    }, [])

    const data = useSelector(state => state.productReducer.List.detail)
    console.log('Product Data:', data);
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    <ProductItem data={data}/>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;