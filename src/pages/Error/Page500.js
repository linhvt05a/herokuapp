import React, { Component } from 'react';

import Error from './Error.js'

class Page500 extends Component {
    render() {
        return (
            <Error code="500" description="Services error !"/>
        )
    }
}

export default Page500;
