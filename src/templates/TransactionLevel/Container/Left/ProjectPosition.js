import React from 'react';

const ProjectPosition = (props) => {
    const {data} = props;
    // console.log('ProjectPosition', dataPosition);
    return (
        <div className="view_horizontal">
            <div className="item">
                <i className="icon fas fa-building" />
                <div className="text">
                    <span className="text-uppercase">
                        DỰ ÁN
                    </span>
                    <span className="value">{data.projectName}</span>
                </div>
            </div>
            <div className="item">
                <i className="icon fas fa-money-bill-wave" />
                <div className="text">
                    <span className="text-uppercase">
                        KHU
                    </span>
                    <span className="value money">{data.areaName}</span>
                </div>
            </div>
            <div className="item">
                <i className="icon fas fa-boxes" />
                <div className="text">
                    <span className="text-uppercase">
                        KHỐI
                    </span>
                    <span className="value times">{data.blockName}</span>
                </div>
            </div>
        </div>
    )
}
export default ProjectPosition