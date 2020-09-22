import React from 'react';
import ItemCheckbox from "./ItemCheckbox"

const Collateral = props => {
    let { state, setState } = props
    React.useEffect(() => {
        let newData = {
            landUseRights: false,
            vehicle: false,
            otherCollateral: false,
            ownedBorrower: false,
            formedLoan: false,
            thirdParty: false,
            otherOrigin: false,
            pledge: false,
            pledgeText: "",
            creditInstitutions: false,
            creditInstitutionsText: ""
        }
        setState(newData)
    }, [])
    return (
        <div className="loan_online--wrap active" data-step={3}>
            <div className="loan_online--item">
                <div className="heading">Tài sản đảm bảo</div>
                <div className="form-group">
                    <label className="label">Loại tài sản bảo đảm</label>
                </div>
                {state &&
                    <div className="row">
                        <ItemCheckbox
                            label="Quyền sở hữu nhà ở / Quyền sử dụng đất ở"
                            checked={state.landUseRights}
                            onChange={() => setState({ ...state, landUseRights: !state.landUseRights })}
                        />
                        <ItemCheckbox
                            label="Ô tô / Phương tiện / Máy móc thiết bị"
                            checked={state.vehicle}
                            onChange={() => setState({ ...state, vehicle: !state.vehicle })}
                        />
                        <ItemCheckbox
                            label="Khác"
                            checked={state.otherCollateral}
                            onChange={() => setState({ ...state, otherCollateral: !state.otherCollateral })}
                            other
                            classNameGroupInput="checkbox-inline style_01 pr-4"
                            classNameGroup="list_checkbox d-flex justify-content-between"
                            placeholder="Nhập loại tài sản"
                        />

                    </div>}
                <div className="form-group">
                    <label className="label">Nguồn gốc tài sản</label>
                </div>
                {state &&
                    <div className="row">
                        <ItemCheckbox
                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center"
                            label="Thuộc sở hữu của khách hàng vay"
                            checked={state.ownedBorrower}
                            onChange={() => setState({ ...state, ownedBorrower: !state.ownedBorrower })}
                        />
                        <ItemCheckbox
                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center"
                            label="Hình thành từ vốn vay"
                            checked={state.formedLoan}
                            onChange={() => setState({ ...state, formedLoan: !state.formedLoan })}
                        />
                        <ItemCheckbox
                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center"
                            classNameGroup="list_checkbox d-flex justify-content-between"
                            label="Thuộc tài sản của bên thứ ba"
                            checked={state.thirdParty}
                            onChange={() => setState({ ...state, thirdParty: !state.thirdParty })}
                        />
                        <ItemCheckbox
                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center"
                            classNameGroup="list_checkbox d-flex justify-content-between"
                            classNameGroupInput="checkbox-inline style_01 pr-4"
                            label="Khác"
                            placeholder="Nhập loại tài sản"
                            checked={state.otherOrigin}
                            onChange={() => setState({ ...state, otherOrigin: !state.otherOrigin })}
                            other
                        />
                    </div>}
                <div className="form-group">
                    <label className="label">TSBĐ hiện đang được cầm cố/ thế chấp tại TCTD khác</label>
                </div>
                {state &&
                    <div className="row">
                        <ItemCheckbox
                            className="col-lg-2 col-md-2 col-sm-12 col-xs-12 d-flex align-items-center"
                            label="Không"
                            checked={!state.pledge}
                            onChange={() => setState({ ...state, pledge: false })}
                        />
                        <ItemCheckbox
                            className="col-lg-5 col-md-5 col-sm-12 col-xs-12 d-flex align-items-center"
                            label="Có, hiện tại đang thế chấp tại"
                            checked={state.pledge}
                            onChange={() => setState({ ...state, pledge: true })}
                        />
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <div className="form-group flex-grow-1">
                                <div className="list_checkbox d-flex justify-content-between ">
                                    <div className="form-group select2-italic mb-0 flex-grow-1 ">
                                        <input disabled={!state.pledge} type="text" className="form-control" placeholder="Nhập loại tài sản" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
            {state && state.pledge &&
                <div className="loan_online--item">
                    <div className="heading">Tình hình khoảng vay</div>
                    <div className="form-group mb-0">
                        <label className="label">Quan hệ tín dụng với tổ chức tín dụng <span className="star">*</span></label>
                    </div>

                    <div className="row">
                        <ItemCheckbox
                            label="Không"
                            className="col-lg-2 col-md-2 col-sm-2 col-xs-2 d-flex align-items-center"
                            checked={!state.creditInstitutions}
                            onChange={() => setState({ ...state, creditInstitutions: false })}
                            classNameGroupInput="checkbox-inline"
                        />
                        <ItemCheckbox
                            label="Có"
                            classNameGroupInput="checkbox-inline"
                            className="col-lg-1 col-md-1 col-sm-2 col-xs-1 d-flex align-items-center"
                            checked={state.creditInstitutions}
                            onChange={() => setState({ ...state, creditInstitutions: true })}
                        />
                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                            <div className="form-group flex-grow-1">
                                <div className="list_checkbox d-flex justify-content-between ">
                                    <div className="form-group select2-italic mb-0 flex-grow-1 ">
                                        <input disabled={!state.creditInstitutions} type="text" className="form-control" placeholder="Nhập tên TCTD" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>

    )
}
export default Collateral;