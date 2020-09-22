import React, { Component } from 'react';
import Slider from "react-slick";
import {SwipeGuide} from './index'
import {BUY_GUIDE} from '../../../contant'


const ContentGuide = () =>{
    return(
        <div role="tabpanel" className="tab-pane fade active show" id="tab02">
          <div className="direction_product--slider slick-initialized ">
              <Slider >
                  { BUY_GUIDE && BUY_GUIDE.map((guide, index)=><SwipeGuide key={index} item={guide}/>)}
              </Slider>
          </div>
      </div>
    )
}

export default ContentGuide

