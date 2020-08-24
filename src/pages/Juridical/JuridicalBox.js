import React, { Component } from 'react';
import {TextArea, ButtonStyle, InputBase} from '../../components/base/index'

const JuridicalBox =(props) =>{
    return (
        <div className="juridical__advisory">
            <div className="juridical__advisory--title mb-2">{props.title}</div>
                <InputBase placeholder="Full name"/>
                <InputBase placeholder="Email"/>
                <TextArea placeholder="Content" className="w-100 mt-2"/>
                <ButtonStyle className="btn btn_green text-uppercase w-100" label="Submit a question"/>
        </div>
    )
  }

export default JuridicalBox
