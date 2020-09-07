import React, { Component, useState } from 'react'
import { Trans } from 'react-i18next';
import Parser from 'html-react-parser';

import CardNoData from '../../../../components/common/CardNoData'
import { Banks, Ground, Introduce, Position, ImagesFirst, Ultilities } from './LeftContent';

const ProductDetailLeft = (props) => {
    const { data } = props;

    const [ show, setShow] = useState({
        position : false,
        ground : false,
        introduce : false,
        banks : false,
        ultilities : false,
    }) 

    console.log('ProductDetailLeft', data);

    return (
        data ?
            <>  
                <ImagesFirst data={data} />
                <div className="description">{data.description ? Parser(data.description) : ''}</div>
                <Position data={data} active={show.position} onClick={()=>setShow({...show, position : !show.position})} />
                <Ground data={data} active={show.ground}  onClick={()=>setShow({...show, ground : !show.ground})} />
                <Introduce data={data} active={show.introduce}  onClick={()=>setShow({...show, introduce : !show.introduce})} />
                <Ultilities data={data} active={show.ultilities}  onClick={()=>setShow({...show, ultilities : !show.ultilities})} />
                <Banks data={data} active={show.banks}  onClick={()=>setShow({...show, banks : !show.banks})} />
            </>
            : <CardNoData />
    )
}

export default ProductDetailLeft;
