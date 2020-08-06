import React from 'react';

const ModalInternal = props => {
    const styleActive = [{
        display: 'block', paddingRight: `17px`
    }]
    return (
        <div className="modal fade" tabIndex={-1} role="dialog" id="listInternalChannel" aria-modal="true">
            <div className="modal-dialog center" role="document" style={{ maxWidth: 1200 }}>
                <div className="m_heading">
                    <button className="m_button no-event"><span>List of internal employees</span></button>
                </div>
                <div className="modal-content square">
                    <div className="modal-body">
                        <div className="m_table m_table--sales table-height min-width-100-pc mb-0">
                            <table className="table table-sticky-01">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }} className="col-1 pl-0">NO.</th>
                                        <th className="col-3 pl-0">Employee name</th>
                                        <th className="col-3">Position</th>
                                        <th className="col-3">Email</th>
                                        <th className="col-2">Mobile</th>
                                    </tr>
                                </thead>
                                <tbody style={{ maxHeight: 300 }}>
                                    <tr data-parent="row_720">
                                        <td style={{ width: '10%' }} className="col-1 pl-0">
                                            <span>1</span>
                                        </td>
                                        <td colSpan={3} className="col-12 pl-0">
                                            <span className="bg_color_6d30ab text-white pt-2 pb-2 pl-3 pr-3 d-inline-block">Nội bộ phòng kinh doanh</span>
                                        </td>
                                        <td className="col-2 text-right">
                                            <i className="active icon icon_toggle las la-plus-circle " />
                                        </td>
                                    </tr>
                                    <tr className="child-row_720">
                                        <td style={{ width: '10%' }} className="col-1 pl-0  border-bottom-none " />
                                        <td className="col-3 pl-0">
                                            <span>Lê Thị Kim Cương 1</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Employee
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                cuonglt1@gmail.com
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0985567899
                  </span>
                                        </td>
                                    </tr>
                                    <tr className="child-row_720">
                                        <td style={{ width: '10%' }} className="col-1 pl-0 " />
                                        <td className="col-3 pl-0">
                                            <span>Lê Thị Kim Cương</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Employee
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                cuonglt@gmail.com
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0985567898
                  </span>
                                        </td>
                                    </tr>
                                    <tr data-parent="row_726">
                                        <td style={{ width: '10%' }} className="col-1 pl-0">
                                            <span>2</span>
                                        </td>
                                        <td colSpan={3} className="col-12 pl-0">
                                            <span className="bg_color_6d30ab text-white pt-2 pb-2 pl-3 pr-3 d-inline-block">(2)Kênh Internal_2</span>
                                        </td>
                                        <td className="col-2 text-right">
                                            <i className="active icon icon_toggle las la-plus-circle " />
                                        </td>
                                    </tr>
                                    <tr className="child-row_726">
                                        <td style={{ width: '10%' }} className="col-1 pl-0 " />
                                        <td className="col-3 pl-0">
                                            <span>Nguyễn Văn Chín</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Employee
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                chinnv@gmail.com
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0245678904
                  </span>
                                        </td>
                                    </tr>
                                    <tr data-parent="row_728">
                                        <td style={{ width: '10%' }} className="col-1 pl-0">
                                            <span>3</span>
                                        </td>
                                        <td colSpan={3} className="col-12 pl-0">
                                            <span className="bg_color_6d30ab text-white pt-2 pb-2 pl-3 pr-3 d-inline-block">CÔNG TY CỔ PHẦN ĐẦU TƯ DANH KHÔI HOLDINGS</span>
                                        </td>
                                        <td className="col-2 text-right">
                                            <i className="active icon icon_toggle las la-plus-circle " />
                                        </td>
                                    </tr>
                                    <tr className="child-row_728">
                                        <td style={{ width: '10%' }} className="col-1 pl-0  border-bottom-none " />
                                        <td className="col-3 pl-0">
                                            <span>Vương Đức Hoàng Quâ</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Leader
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                duchoangquanvien@gmail.com
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0985412697
                  </span>
                                        </td>
                                    </tr>
                                    <tr className="child-row_728">
                                        <td style={{ width: '10%' }} className="col-1 pl-0  border-bottom-none " />
                                        <td className="col-3 pl-0">
                                            <span>Vũ Nguyễn Quang Vinh </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Employee
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                quangvinh.vu@gmail.com
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0928157892
                  </span>
                                        </td>
                                    </tr>
                                    <tr className="child-row_728">
                                        <td style={{ width: '10%' }} className="col-1 pl-0  border-bottom-none " />
                                        <td className="col-3 pl-0">
                                            <span>Nguyễn Khánh Ngọc</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Department Of Head
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                nkngoc@gmail.com
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0395556666
                  </span>
                                        </td>
                                    </tr>
                                    <tr className="child-row_728">
                                        <td style={{ width: '10%' }} className="col-1 pl-0 " />
                                        <td className="col-3 pl-0">
                                            <span>Nguyễn Ngọc Kim Anh</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Leader
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                nnhanh1@gmail.com
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0939123569
                  </span>
                                        </td>
                                    </tr>
                                    <tr data-parent="row_769">
                                        <td style={{ width: '10%' }} className="col-1 pl-0">
                                            <span>4</span>
                                        </td>
                                        <td colSpan={3} className="col-12 pl-0">
                                            <span className="bg_color_6d30ab text-white pt-2 pb-2 pl-3 pr-3 d-inline-block">CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN CEN SÀI GÒN (test 1)</span>
                                        </td>
                                        <td className="col-2 text-right">
                                            <i className="active icon icon_toggle las la-plus-circle " />
                                        </td>
                                    </tr>
                                    <tr className="child-row_769">
                                        <td style={{ width: '10%' }} className="col-1 pl-0  border-bottom-none " />
                                        <td className="col-3 pl-0">
                                            <span>QC TEST EMPLOYEE 02</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Employee
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                emp02@gmail.com
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0342225366
                  </span>
                                        </td>
                                    </tr>
                                    <tr className="child-row_769">
                                        <td style={{ width: '10%' }} className="col-1 pl-0 " />
                                        <td className="col-3 pl-0">
                                            <span>QC TEST EMPLOYEE</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Employee
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                emp01@gmail.com
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0342225365
                  </span>
                                        </td>
                                    </tr>
                                    <tr data-parent="row_775">
                                        <td style={{ width: '10%' }} className="col-1 pl-0">
                                            <span>5</span>
                                        </td>
                                        <td colSpan={3} className="col-12 pl-0">
                                            <span className="bg_color_6d30ab text-white pt-2 pb-2 pl-3 pr-3 d-inline-block">(2)Kênh Internal_1</span>
                                        </td>
                                        <td className="col-2 text-right">
                                        </td>
                                    </tr>
                                    <tr data-parent="row_834">
                                        <td style={{ width: '10%' }} className="col-1 pl-0">
                                            <span>6</span>
                                        </td>
                                        <td colSpan={3} className="col-12 pl-0">
                                            <span className="bg_color_6d30ab text-white pt-2 pb-2 pl-3 pr-3 d-inline-block">Bianca Bridges</span>
                                        </td>
                                        <td className="col-2 text-right">
                                            <i className="active icon icon_toggle las la-plus-circle " />
                                        </td>
                                    </tr>
                                    <tr className="child-row_834">
                                        <td style={{ width: '10%' }} className="col-1 pl-0  border-bottom-none " />
                                        <td className="col-3 pl-0">
                                            <span>Sarah Marks</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Employee
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                wrodriguez@diaz-robinson.biz
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0982042617
                  </span>
                                        </td>
                                    </tr>
                                    <tr className="child-row_834">
                                        <td style={{ width: '10%' }} className="col-1 pl-0 " />
                                        <td className="col-3 pl-0">
                                            <span>David Liu</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Leader
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                davidliu@fe.cn
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0369998569
                  </span>
                                        </td>
                                    </tr>
                                    <tr data-parent="row_845">
                                        <td style={{ width: '10%' }} className="col-1 pl-0">
                                            <span>7</span>
                                        </td>
                                        <td colSpan={3} className="col-12 pl-0">
                                            <span className="bg_color_6d30ab text-white pt-2 pb-2 pl-3 pr-3 d-inline-block">Can't Delete </span>
                                        </td>
                                        <td className="col-2 text-right">
                                            <i className="active icon icon_toggle las la-plus-circle " />
                                        </td>
                                    </tr>
                                    <tr className="child-row_845">
                                        <td style={{ width: '10%' }} className="col-1 pl-0  border-bottom-none " />
                                        <td className="col-3 pl-0">
                                            <span>Thiên</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Leader
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                tadar@gmail.com
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0999999999
                  </span>
                                        </td>
                                    </tr>
                                    <tr className="child-row_845">
                                        <td style={{ width: '10%' }} className="col-1 pl-0 " />
                                        <td className="col-3 pl-0">
                                            <span>Tuấn Anh</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Department Of Head
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                tada2r@gmail.com
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0999999998
                  </span>
                                        </td>
                                    </tr>
                                    <tr data-parent="row_854">
                                        <td style={{ width: '10%' }} className="col-1 pl-0">
                                            <span>8</span>
                                        </td>
                                        <td colSpan={3} className="col-12 pl-0">
                                            <span className="bg_color_6d30ab text-white pt-2 pb-2 pl-3 pr-3 d-inline-block">Kenh pp 12121</span>
                                        </td>
                                        <td className="col-2 text-right">
                                            <i className="active icon icon_toggle las la-plus-circle " />
                                        </td>
                                    </tr>
                                    <tr className="child-row_854">
                                        <td style={{ width: '10%' }} className="col-1 pl-0 " />
                                        <td className="col-3 pl-0">
                                            <span>aa</span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                Employee
                  </span>
                                        </td>
                                        <td className="col-3">
                                            <span>
                                                aathien@mien.avvn
                  </span>
                                        </td>
                                        <td className="col-2">
                                            <span>
                                                0388617748
                  </span>
                                        </td>
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
export default ModalInternal;