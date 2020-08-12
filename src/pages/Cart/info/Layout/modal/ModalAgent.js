import React from 'react';
import CardHeader from "../../../../../components/Card/CardHeader";
import { Modal } from "react-bootstrap"

const ModalAgent = props => {
    const styleActive = [{
        display: 'block', paddingRight: `17px`
    }];

    return (
        <Modal
            show={props.active}
            onHide={() => props.onClick()}
        >
            <div className="modal fade show" style={{ display: 'block', paddingRight: `17px` }} >
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
                                            <td className="col-3"></td>
                                            <td className="col-2"> <span className="m_text_399b54">Active </span></td>

                                        </tr>

                                        <tr>
                                            <td className="pl-0 col-1">3</td>
                                            <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                            <td className="col-3">119 Pastuer, Đức Châu, Đức Thọ, Hà Tĩnh</td>
                                            <td className="col-3"></td>
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
                                            <td className="col-3"></td>
                                            <td className="col-2"> <span className="m_text_399b54">Active </span></td>

                                        </tr>

                                        <tr>
                                            <td className="pl-0 col-1">6</td>
                                            <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                            <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                            <td className="col-3"></td>
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
                                            <td className="col-3"></td>
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
                                            <td className="col-3"></td>
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
                                            <td className="col-3"></td>
                                            <td className="col-2"> <span className="m_text_399b54">Active </span></td>

                                        </tr>

                                        <tr>
                                            <td className="pl-0 col-1">19</td>
                                            <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                            <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                            <td className="col-3"></td>
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
                                            <td className="col-3"></td>
                                            <td className="col-2"> <span className="m_text_399b54">Active </span></td>

                                        </tr>

                                        <tr>
                                            <td className="pl-0 col-1">22</td>
                                            <td className="col-3">Kênh phân phối thử nghiệm (ND)</td>
                                            <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                            <td className="col-3"></td>
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
                                            <td className="col-3"></td>
                                            <td className="col-2"> <span className="m_text_399b54">Active </span></td>

                                        </tr>

                                        <tr>
                                            <td className="pl-0 col-1">25</td>
                                            <td className="col-3">Kênh phân phối thử nghiệm 123</td>
                                            <td className="col-3">119 Pastuer, Phường 13, Yên Châu, Hà Tĩnh</td>
                                            <td className="col-3"></td>
                                            <td className="col-2"> <span className="m_text_399b54">Active </span></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className=" pt-0 pb-4 border-0 mt-4 text-right">
                                <button type="button" className="min-width-button min-height-40 btn-uni-exit btn-uni-exit-modal" data-dismiss="modal" aria-label="Close" onClick={() => props.onClick()}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )

}
export default ModalAgent;