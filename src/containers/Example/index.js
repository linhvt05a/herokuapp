/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../actions";
import ExampleItem from "./ExampleItem";
// import { TOKEN } from "../../../../env";


const Example = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(examAction.LoadList({}))
    }, [])
    const data = useSelector(state => state.examReducer.List.detail)
    console.log('Example Data:', data);
    return (
        <div className="album py-5 bg-light">
            <br /><br /><br /><br /><br /><br />
            <div className="container">
                <div className="row">
                    {data && data.length > 0 ? data.map((item, index) => {
                        return <ExampleItem key={index} data={item} index={index} />
                    }) : null}
                </div>
            </div>
        </div>

    )
}
export default Example;