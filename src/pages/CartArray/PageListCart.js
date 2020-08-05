import React, { useEffect, useState } from 'react';
import {CardInfo, CardApprovedHistory} from './Layout/index'
import {DialogResponeHistory} from '../../components/dialogs'
const PageListCart = () =>{
    const [showPopUp, setShowPopUp] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        setShowPopUp(!showPopUp)
    }
    return (
       <>   
        <CardInfo />
        <CardApprovedHistory handleClick ={handleClick}/>
        <DialogResponeHistory showPopUp={showPopUp} close ={setShowPopUp}/>
       </>
    )
}

export default PageListCart;