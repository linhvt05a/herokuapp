import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Parser from 'html-react-parser';
import ProductDetailRight from './Container/ProductDetailRight';
import ProductDetailLeft from './Container/ProductDetailLeft';

import { productAction } from "../../../store/action";
import { useParams } from 'react-router-dom';


const ProductDetail = (props) => {

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(productAction.ProductDetailLoadList({ product_id: id, tab_include: `["detail","price","image","layout","document","history"]` }))
    }, [])

    const data = useSelector(state => state.productReducer.productDetailList.detail);

    return (
        data ?
            <div className="project_detail--apartment bg_grey">
                <div className="container container-sm container-md">
                    <h2 className="main_heading"><span>{data.product_name}</span></h2>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-lg-8">
                            <ProductDetailLeft data={data} />
                        </div>
                        <div className="col-12 col-sm-12 col-lg-4">
                            <ProductDetailRight data={data} />
                        </div>
                    </div>
                </div>
            </div>
            : ""
    )
}
export default ProductDetail;