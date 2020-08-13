import React from 'react';
import { CardHeader } from "../../../../components/Card";
import Item from "../modal"

const step2 = props => {
    return (
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 d-flex flex-column">
                <CardHeader label="Hình ảnh" />
                <div className="card h-100">
                    <div className="card-body">
                        <div className="m_slider mw-100">
                            <figure className="image default_image_minerva">
                                <img src='http://superapp.minerva.vn:9210/static/img/default_image_minerva.png' alt="Minerva" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 d-flex flex-column">
                <CardHeader label="Vị Trí" />
                <div className="card h-100">
                    <Item.Map />
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 d-flex flex-column">
                <CardHeader label="Cơ cấu vốn" />
                <div className="card h-100" style={{ justifyContent: "center" }}>
                    <Item.ChartDonut />
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3 d-flex flex-column">
                <CardHeader label="Thông số" />
                <div className="card h-100">
                    <figure><img className="w-100" src="/static/images/no_data.png" alt /></figure>
                </div>
            </div>
            <div className="container-fluid">
                <CardHeader label="Thông tin vốn cơ cấu" />
                <div className="card square h-100 w-100">
                    <Item.ChartArea />
                </div>
            </div>
            <div>
                <div className="card square h-100">
                </div>
            </div>
        </div >


    )
}
export default step2;