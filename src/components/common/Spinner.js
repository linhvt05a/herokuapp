import React, { Component } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

import { css } from "@emotion/core";

const override = css`

    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    
`;

class Spinner extends Component {

    render() {
        return (
            <div style={{ width: '100%', height: '100%', minHeight: '100px' }}>
                <ClipLoader css={override} size={28} color={"#6d30ab"} />
            </div>
        )
    }
}

export default Spinner;
