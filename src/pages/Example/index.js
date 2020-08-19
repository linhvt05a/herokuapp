/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../actions";
import ExampleItem from "./ExampleItem";
import Input from '../../components/base/Input/Input';
import Select from '../../components/base/Select/Select';
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
            <br /><br /><br /><br /><br /><br />
            <div className="container">
                <div className="row">
                    {data && data.length > 0 ? data.map((item, index) => {
                        return <ExampleItem key={index} data={item} index={index} />
                    }) : null}
                </div>
                <div className="row" style={{marginTop: "30px"}}>
                    <Input className="col-12 col-sm-6 col-md-6 col-lg-4" />
                    <Select onChange={handleChange}
                        datas={[
                            { value: 1, label: "Việt Nam" },
                            { value: 2, label: "Lào" },
                            { value: 3, label: "Cam pu chia" },
                        ]}
                    >
                    </Select>
                </div>
            </div>
        </div>

    )
}
export default Example;