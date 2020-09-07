import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import TabsSlider from './TabsSlider';
import SideBar from './SideBar/Info';
import SalesAccordion from './SalesAccordion';
import { productDetailAction } from "../../../store/action";
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
    
    const dispatch = useDispatch();

    const { id } = useParams();
    
    useEffect(() => {
        dispatch(productDetailAction.ProductDetailLoadList({ product_id:id, tab_include:`["detail","price","image","layout","document","history"]`}))
    }, [])

    const data = useSelector(state => state.productDetailReducer.List.detail);

    return (
        data ?
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="product_detail--apartment bg_grey">
                            <div className="container container-sm container-md">
                                <h2 className="main_heading"><span>{data.address_house}</span></h2>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-lg-8">
                                        {
                                            data.dataImg || data.layout ?
                                            <div className="slider_in_tab">
                                                <TabsSlider dataImg={data.image} dataLayout={data.layout} />
                                            </div>
                                            :""
                                        }
                                        
                                        <div className="description">
                                            <div>{data.description}</div>
                                        </div>
                                        <SalesAccordion data={data} />
                                    </div>
                                    <div className="col-12 col-sm-12 col-lg-4">
                                        <SideBar dataInfo={data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        : ""
    )
}
export default ProductDetail;