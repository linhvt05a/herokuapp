import React, { useEffect } from 'react';
import { Trans } from 'react-i18next';
import { SellOpenListRequest } from '../../../../../store/action/project';
import { useDispatch, useSelector } from "react-redux";

const TabSellopenlist = (props) => {
    const token = 'MTAwNjpNVEF3Tmpwa05ESmlPVGc1WldVM05HWmhNMlZrWXpWaFlqQXhOalV4T1RReFl6QmtOVFUyTW1Oa1pUVTQ=';
    let { project_id } = props;
    const dispatch = useDispatch();
    const sellopenStore = useSelector(state => state.project);
    useEffect(() => {
        dispatch(SellOpenListRequest({ token: token, project_id: project_id }));
    }, []);

    const isSellOpenListSuccess = sellopenStore.sellopenList.success;
    const isSellOpenListRes = isSellOpenListSuccess ? sellopenStore.sellopenList.detail : null;

    return (
        <div>
            <div className="row">
                <div className="col-12" style={{marginTop: "15px"}}>
                    <h6 className=" mb-1 uni_text_6d30ab text-uppercase">
                        <Trans>DANH SÁCH CÁC ĐỢT MỞ BÁN</Trans>
                    </h6>
                </div>
            </div>
            <div className="m_table m_table--sales min-width-100-pc table-height mb-0">
                <table className="table table-sticky-01">
                    <thead>
                    <tr>
                        <th className="pl-0 col-1" style={{width: "5%"}}><Trans>STT</Trans></th>
                        <th className="col-2" style={{width: "25%"}}><Trans>ĐỢT</Trans></th>
                        <th className="col-2" style={{width: "15%"}}><Trans>TỪ NGÀY</Trans></th>
                        <th className="col-2" style={{width: "15%"}}><Trans>ĐẾN NGÀY</Trans></th>
                        <th className="col-2" style={{width: "15%"}}><Trans>TỔNG SỐ KÊNH ĐẠI LÝ</Trans></th>
                        <th className="col-2" style={{width: "15%"}}><Trans>TỔNG SỐ KÊNH NỘI BỘ</Trans></th>
                    </tr>
                    </thead>
                    <tbody style={{maxHeight: "400px"}}>
                            <RowListOpenSell data={isSellOpenListRes}/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const RowListOpenSell = (props) => {
    const { data } = props;
    console.log('yyyyyyy', data);
    return (
        data && data.map((item, index) => (
        <tr key={index}>
            <td className="pl-0 col-1" style={{width: "5%"}}>{index + 1}</td>
            <td className="col-2" style={{width: "25%"}}>
                <div className="form-group mb-0 input_open_sale" style={{width: "80%"}}>
                    <input type="text" className="form-control text-uppercase" value={item.sell_open_name} readonly=""/>
                </div>
            </td>
            <td className="col-2" style={{width: "15%"}}>{item.sell_open_date}</td>
            <td className="col-2" style={{width: "15%"}}>{item.sell_end_date}</td>
            <td className="col-2" style={{width: "15%"}}>
                { 
                    item.total_agent_distribute > 0 ?
                    <a href="#" class="link_href_6d30ab fw-medium">
                        Channel agent list [{item.total_agent_distribute}]
                    </a>
                    : <span className="uni_text_6d30ab">-</span>
                }
            </td>
            <td className="col-2" style={{width: "15%"}}>
                { 
                    item.total_internal_distribute > 0 ?
                    <a href="#" class="link_href_6d30ab fw-medium">
                        Channel internal list [{item.total_internal_distribute}]
                    </a>
                    : <span className="uni_text_6d30ab">-</span>
                }
            </td>
        </tr>
        ))
    )
}

export default TabSellopenlist;