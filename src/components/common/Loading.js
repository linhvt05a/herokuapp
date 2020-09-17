import React from 'react';
import { Spin } from 'antd';


const Loading = (props) => {
    return (
        <div className={props ? props.className : ''}>
            <Spin className="loading_full" tip="Loading..."></Spin>
        </div>
    )
}

export default Loading;