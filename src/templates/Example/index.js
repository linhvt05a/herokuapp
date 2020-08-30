/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../store/action";
import ExampleItem from "./ExampleItem";
import Select from '../../components/base/Select/Select';
import InputBase from '../../components/base/Input/InputBase';
// import { TOKEN } from "../../../../env";



const Example = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(examAction.LoadList({}))
    }, [])


    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const data = useSelector(state => state.examReducer.List.detail)
    console.log('Example Data:', data);
    return (
        <div className="album py-5 bg-light">
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