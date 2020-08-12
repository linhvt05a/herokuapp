import React from 'react';

const CardGrid = props => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="m_grid m_grid--list_project">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-6 col-xl-4 mb-4">
                            <div className="item">
                                <div>123123</div>
                                <div>adasd</div>
                                <div>123asdas123</div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 col-xl-4 mb-4">
                            <div className="item" >
                                <div>123123</div>
                                <div>adasd</div>
                                <div>123asdas123</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardGrid;