/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

const header = props => {
    const [value, setValue] = useState(null);
    return (
        <div class="d-flex justify-content-between align-items-end">
            <div class="m_heading">
                <button class="m_button no-event"><span>Dự Án</span></button>
                <div class="dropdown m_select m_dropdown">
                    <button class="m_select--label m_dropdown--label square dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Trạng Thái Dự Án
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                        <a class="dropdown-item" href="/backend/project/?project_name=&amp;setting_type_id=&amp;status_id=1">Mới</a>
                        <a class="dropdown-item" href="/backend/project/?project_name=&amp;setting_type_id=&amp;status_id=2">Đang
                            chờ</a>
                        <a class="dropdown-item" href="/backend/project/?project_name=&amp;setting_type_id=&amp;status_id=3">Đang triển khai</a>
                        <a class="dropdown-item" href="/backend/project/?project_name=&amp;setting_type_id=&amp;status_id=4">Dừng</a>
                        <a class="dropdown-item" href="/backend/project/?project_name=&amp;setting_type_id=&amp;status_id=5">Hoàn
                            Thành</a>
                    </div>
                </div>
                <div class="m_search">
                    <label class="m_search--label d-none
                            d-md-block">Tên Dự Án</label>
                    <input name="project_name" id="filter-by-project-name" defaultValue="" value={value} class="m_search--input" type="text" onChange={item => setValue(item.target.value)} />
                    <button class="m_search--button" type="button" id="search_by_name"><i class="fa fa-search" aria-hidden="true" onClick={() => props.SEARCH(value)}></i>
                    </button>
                </div>
            </div>
            <div class="dropdown m-action">
                <button style={{ height: `40px`, color: "#367be3", borderColor: "#367be3", borderWidth: `0.5px`, paddingLeft: `17px`, backgroundColor: "#FFFFFF" }} type="button" class="btn_dropdown_outline dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Hành động
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ borderColor: "#367be3", borderWidth: `0.5px`, borderRadius: 0 }}>
                    <a class="dropdown-item" href="#" style={{ color: "#367be3" }}>Thêm dự án</a>
                </div>
            </div>
        </div>
    )
}
export default header;