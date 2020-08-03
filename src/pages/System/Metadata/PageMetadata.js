import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import {
    Pagination, CardHeader, Spinner
} from '../../../components/common';


import './PageMetadata.css';

let datas = [
    { 
        "name": "Chung Cư Căn Hộ",
        "datas":[
            { "idx": 1, "unit": "m2", "notes": "", "formular": "","vi": "Diện tích xây dựng",  "en": "Area" },
            { "idx": 2, "unit": "m2", "notes": "", "formular": "","vi": "Diện tích xây dựng",  "en": "Area" },
            { "idx": 3, "unit": "m2", "notes": "", "formular": "","vi": "Diện tích xây dựng",  "en": "Area" },
            { "idx": 4, "unit": "m2", "notes": "", "formular": "","vi": "Diện tích xây dựng",  "en": "Area" },
            { "idx": 5, "unit": "m2", "notes": "", "formular": "","vi": "Diện tích xây dựng",  "en": "Area" },
            { "idx": 6, "unit": "m2", "notes": "", "formular": "","vi": "Diện tích xây dựng",  "en": "Area" },
            { "idx": 7, "unit": "m2", "notes": "", "formular": "","vi": "Diện tích xây dựng",  "en": "Area" },
            { "idx": 8, "unit": "m2", "notes": "", "formular": "","vi": "Diện tích xây dựng",  "en": "Area" },
            { "idx": 9, "unit": "m2", "notes": "", "formular": "","vi": "Diện tích xây dựng",  "en": "Area" },
        ]
    }
]


class Metadata extends Component {
    onChange = (e) =>{
    }
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td className="align-middle">{data.idx}</td>
                <td className="code cl-title">
                    <input type="text" className="form-control square input-sm" name="vi" value={data.vi} onChange={this.onChange} />
                </td>
                <td className="code cl-title">
                    <input type="text" className="form-control square input-sm" name="en" value={data.en} onChange={this.onChange} />
                </td>
                <td className="align-middle">{data.notes}</td>
                <td className="align-middle">{data.unit}</td>
                <td className="align-middle">{data.formular}</td>
            </tr>
        )
    }
};

class Group extends Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <tr>
                    <td colSpan="9" className="text-bold-600 text-uppercase cl-color text-white">{data.name}</td>
                </tr>
                { data.datas.map( (item1, index1) => <Metadata key={index1} data={item1} />) }
            </>
        )
    }
}
class Card_content extends Component {
    render() {
        return (
            <div className="card square">
                <div className="card-body">
                    <div className="m_table m_table--list_project mt-3">
                        <div className="table-responsive table-hover">
                            {
                                this.props.datas ?
                                (
                                    <>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase " width="50px">ID</th>
                                                    <th className="text-uppercase " width="20%">Tiếng Việt</th>
                                                    <th className="text-uppercase " width="20%">English</th>
                                                    <th className="text-uppercase ">Ghi Chú</th>
                                                    <th className="text-uppercase ">Đơn Vị Tính</th>
                                                    <th className="text-uppercase ">Công Thức Tính</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.datas && this.props.datas.map( (group, index) => <Group key={index} index={index} data={group}/> )
                                                }
                                            </tbody>
                                        </table>
                                        <Pagination />
                                    </>
                                ) :
                                (
                                    <Spinner />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//


class PageMetadata extends Component {
    render() {
        return (
            <div>
                <CardHeader label="Metadata" searchLabel="Search" />
                <Card_content datas={datas}/>
            </div>
        )
    }
}



export default PageMetadata;
