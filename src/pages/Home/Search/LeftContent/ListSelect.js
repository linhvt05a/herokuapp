import React from 'react';
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { InputSelect } from '../../../../components/base/Select/index'

const ListSelect = (props) => {
    let { active } = props;
    const province = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
    const district = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
    const status = [{value:1, label :'--Select--'},{value:2, label :'TPHCM'}, {value:3, label :'Ha Noi'}, {value:4, label :'Hai Phong'}]
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-4">
                <div className="form-group">
                    <InputSelect placeholder="Tỉnh/Thành Phố" datas={province}/>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="form-group">
                    <InputSelect placeholder="Quận/Huyện" datas={district}/>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="form-group">
                    <InputSelect placeholder="Chọn tiến độ" datas={status}/>
                </div>
            </div>
        </div>
    )
}
export default ListSelect;