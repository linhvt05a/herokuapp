import React, { useEffect, useState } from 'react';
import { CardHeader, Spinner } from '../../components/common';
import { useDispatch, useSelector } from "react-redux";
import { PageGrid, PageList, PageLegend} from './Layout/index'

const PageListCart = () =>{
    const[page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [grid, setGrid] = useState(true)
    return (
        <div>
            <CardHeader 
                purpleLabel = "NEWS PROJECT"
                purpleData = {[]}
                label="Project List"
                searchLabel="Search"
                searchHolder="Name Currency"
            />
            <Content grid = {grid}/>
        </div>
    )
}

const Content  = (props) => {
   return (
    <div className="m_table--wrapper">
        <div className="m_filter">
            <div className="row">
                <PageLegend />
                <div className="col-12 col-sm-12 col-md-12 col-xl-2">
                    <ul className="m_filter--show">
                        <li className="first"><span>Display</span></li>
                        <Mode act = {props.grid} content={<i className="la la-th"></i>} grid ={true}/>
                        <Mode act = {!props.grid} content={<i className="la la-th-list"></i>} grid={false}/>
                    </ul>
                </div>
            </div>
        </div>
                
                {
                    props.grid === true ? <PageGrid  /> : <PageList  />
                }
    </div>
   )
}

const Mode = (props) => {
   const touched =  val =>  {
        console.log('fdfdsfdsfdsfsd')
    }
  return (
    <li className={props.act === true ? 'active' : ''} >
        <a onClick = {touched}>
            {props.content}
        </a>
    </li>       
  )
}

export default PageListCart;