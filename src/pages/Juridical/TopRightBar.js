import React, { Component } from 'react';
import Categories from '../News/Categories'
import {JuridicalCategories, JuridicalSearch, JuridicalBox} from './index'

const data = [{id: 1, title:'Transaction rules'}, {id: 2, title:'Sale contract'}, {id: 3, title:' Other'}]
const TopRightBar = () =>{
    return(
        <div className="col-md-5 col-lg-4 col-xl-4">
            <div className="options mb-4 bg_white">
                <JuridicalCategories label="Juridical Categories" data={data}/>
                <JuridicalSearch label="Search" />
            </div>
                <JuridicalBox />
      </div>
      
    )

}

export default TopRightBar