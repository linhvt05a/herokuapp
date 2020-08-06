import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../store/action/shipping"
import Item from "./Layout";
import Title from "../../../components/common/CardHeader"
const Edit = props => {

    const dispatch = useDispatch();
    const token = 'MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx';
    // const createData = (buttomName, date_from, date_to, Apartment_from = 0, Apartment_to = 0, Studio_from = 0, Studio_to = 0) => {
    //     return { buttomName, date_from, date_to, Apartment_from, Apartment_to, Studio_from, Studio_to }
    // }
    useEffect(() => {
        dispatch(actions.LoadDetail({ token: token, id: props.params.id }));
        dispatch(actions.LoadSellOpen({ token: token, id: props.params.id }));
        dispatch(actions.LoadSellOpenList({ token: token, id: props.params.id }));
        dispatch(actions.LoadSellOpenCart({ token: token, id: props.params.id }));

    }, [])
    const data = useSelector(state => state.shipping);
    // console.log(data);
    // const newData = [
    //     createData("Sell open 1", "10/06/2020", "31/10/2020", 16, 15),
    //     createData("Sell open 2", "01/07/2020", "30/08/2020", 10, 10),
    //     createData("Sell open 3", "02/10/2020", "31/10/2020", 10, 10, 2, 2),
    //     createData("Sell open 4", "02/10/2020", "31/10/2020", 0, 0, 4, 5),
    // ]

    // const ONLICK = (target) => {
    //     if (target.className.indexOf('la-plus-circle') > -1) {
    //         target.className = "icon icon_collapse las la-minus-circle"
    //     }
    //     else target.className = "icon icon_collapse las la-plus-circle"
    // }
    const contentDropdown = [
        { href: "#", value: "1", label: "Khu Valencia" },
        { href: "#", value: "2", label: "Đang chờ" },
        { href: "#", value: "3", label: "Đang triển khai" },
        { href: "#", value: "4", label: "Dừng" },
        { href: "#", value: "5", label: "Hoàn thành" },
    ]
    return (


        <div className="container-fluid">
            <div className="row mt-3">
                <div style={{ paddingLeft: 0 }} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex flex-column">
                    <Title label="Thông tin dự án" />
                    <Item.Detail_info data={data.Detail} />
                </div>
                <div style={{ paddingRight: 0 }} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex flex-column">
                    <Title label="THỐNG KÊ CÁC ĐỢT MỞ BÁN" />
                    <Item.Detail_progress data={data.Detail} dataSellOpen={data.Sell_Open} />
                </div>
            </div>
            <div>
                <Title label="DANH SÁCH CÁC KHU" dropdown={{ title: "Tất cả khu", data: contentDropdown }} />
                <Item.Detail_content data={data.Sell_Open_Floor} />
            </div>
            <div>
                <Title label="CHI TIẾT RỔ HÀNG" dropdown={{ title: "Đợt 1", data: contentDropdown }} />
                <Item.Detail_InfoShipping data={data.Sell_Open_Floor} dropdown={{ title: "Đợt 1", data: contentDropdown }} />
            </div>
        </div>
    )
}
export default Edit;