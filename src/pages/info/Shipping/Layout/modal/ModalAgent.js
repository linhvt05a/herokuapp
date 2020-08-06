import React from 'react';

const ModalAgent = props => {
    const styleActive = [{
        display: 'block', paddingRight: `17px`
    }]
    console.log(props);
    return (
        <div className={props.active ? "modal fade show" : "modal fade"} tabIndex={-1} role="dialog" id="listAgencyChannel" aria-modal="true">
            <div className="modal-dialog center" role="document" style={{ maxWidth: 1200 }}>
                <div className="m_heading">
                    <button className="m_button no-event"><span>Channel agent list</span></button>
                </div>
                <div className="modal-content square">
                    <div className="modal-body">
                        <div className="m_table m_table--sales table-height min-width-100-pc mb-0">
                            <table className="table table-sticky-01">
                                <thead>
                                    <tr>
                                        <th className="pl-0 col-1" style={{ width: '10%' }}>NO.</th>
                                        <th className="col-3">Company name</th>
                                        <th className="col-3">Address</th>
                                        <th className="col-3">Person representative</th>
                                        <th className="col-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody style={{ maxHeight: 400 }}>
                                    <tr>
                                        <td className="pl-0 col-1">1</td>
                                        <td className="col-3">BẤT ĐỘNG SẢN Á CHÂU 01</td>
                                        <td className="col-3">1060 Tòa nhà Mapletree, Tân Phong, Quận 7, Hồ Chí Minh</td>
                                        <td className="col-3">Nguyễn Ngọc Linh Nhi</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">2</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">3</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                        <td className="col-3">119 Pastuer, Đức Châu, Đức Thọ, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">4</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">5</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">6</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">7</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">8</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">9</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">10</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">11</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">12</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">13</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">14</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">15</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">16</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">17</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">18</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">19</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">20</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">21</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">22</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">23</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">24</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">25</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">26</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">27</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">28</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">29</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">30</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">31</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">32</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">33</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">34</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">35</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">36</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3">admin</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">37</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">38</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">39</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">40</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">41</td>
                                        <td className="col-3">Kênh phân phối thử nghiệm</td>
                                        <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">42</td>
                                        <td className="col-3">KÊNH PHÂN PHỐI QC</td>
                                        <td className="col-3">99/4 Cao Thắng, Phường 17, Quận Phú Nhuận, HCM, Phước Mỹ, Phan Rang–Tháp Chàm, Ninh Thuận</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">43</td>
                                        <td className="col-3">Steven Yu</td>
                                        <td className="col-3">13852 Hammond Locks Apt. 189Armstrongland, HI 38270, Bến Nghé, Quận 1, Hồ Chí Minh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">44</td>
                                        <td className="col-3">Công Ty Cổ Phần Xây Dựng COTECCONS (QC test)</td>
                                        <td className="col-3">236/6, Phường 17, Bình Thạnh, Hồ Chí Minh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">45</td>
                                        <td className="col-3">(1)Kênh Thị Nghè</td>
                                        <td className="col-3">119 Paster, Long Hòa, Cần Giờ, Hồ Chí Minh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">46</td>
                                        <td className="col-3">CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN CEN SÀI GÒN</td>
                                        <td className="col-3">Tầng 3, Tòa nhà SAMCO, Số 326 Võ Văn Kiệt, Cô Giang, Quận 1, Hồ Chí Minh</td>
                                        <td className="col-3">Đặng Huy Hậu</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">47</td>
                                        <td className="col-3">Công ty Sao Mai QC</td>
                                        <td className="col-3">333 Trần Hưng Đạo, Xuân Khánh, Ninh Kiều, Cần Thơ</td>
                                        <td className="col-3">Nguyễn Ngọc Anh</td>
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 col-1">48</td>
                                        <td className="col-3">Công ty Sông xanh</td>
                                        <td className="col-3">15 Pasteur, Lý Nhơn, Cần Giờ, Hồ Chí Minh</td>
                                        <td className="col-3" />
                                        <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className=" pt-0 pb-4 border-0 mt-4 text-right">
                            <button type="button" className="min-width-button min-height-40 btn-uni-exit btn-uni-exit-modal" data-dismiss="modal" aria-label="Close">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default ModalAgent;