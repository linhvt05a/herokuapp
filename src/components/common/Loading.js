import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
    display: block;
    margin: auto;
`;

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div >
                <ClipLoader css={override} size={50} color={"#6d30ab"} />
            </div>
        )
    }
}

export default Loading;
