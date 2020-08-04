import React from 'react';
import Item from "./Layout"

const Shipping = props => {
    const SEARCH = value => {
        alert(`text ${value}`)
    }
    let data = [
        { name: "Dự án test", type: "Biệt thự cao cấp", address: "Hai Phong, Cao Sơn, Bạch Thông, Bắc Kạn", acreage: "100,0", count: "1", investor: "Công Ty Cổ Phần Bất Động Sản Hoa Anh Đào" },
        { name: "Dự án test", type: "Biệt thự cao cấp", address: "Hai Phong, Cao Sơn, Bạch Thông, Bắc Kạn", acreage: "100,0", count: "1", investor: "Công Ty Cổ Phần Bất Động Sản Hoa Anh Đào" },
        { name: "Dự án test", type: "Biệt thự cao cấp", address: "Hai Phong, Cao Sơn, Bạch Thông, Bắc Kạn", acreage: "100,0", count: "1", investor: "Công Ty Cổ Phần Bất Động Sản Hoa Anh Đào" },
        { name: "Dự án test", type: "Biệt thự cao cấp", address: "Hai Phong, Cao Sơn, Bạch Thông, Bắc Kạn", acreage: "100,0", count: "1", investor: "Công Ty Cổ Phần Bất Động Sản Hoa Anh Đào" }
    ]
    return (
        <div >
            <Item.header SEARCH={value => SEARCH(value)} />
            <Item.body
                data={data}
            />
            {/* <Item.footer /> */}
        </div>
    )
}
export default Shipping;