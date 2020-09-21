import React from 'react';
import { SidebarLeft, CustomerInformation, JobInformation, Collateral, BorrowerInformation } from "./Layout"

const LoanOnline = props => {
    return (
        <div className="loan_online bg_grey">
            <div className="container container-sm container-md">
                <h2 className="main_heading"><span>Hồ sơ vay online</span></h2>
                <div className="row">
                    <SidebarLeft />
                    <div className="col-12 col-sm-12 col-lg-8">
                        <CustomerInformation />
                        <JobInformation />
                        <Collateral />
                        <BorrowerInformation />
                        {/* list button  */}
                        <div className="loan_online--btn">
                            <a href="#" className="btn btn_red_outline cancel">HỦY</a>
                            <a href="#" className="btn btn_blue save">LƯU</a>
                            <a href="#" className="btn btn_purple step_next">TIẾP THEO</a>
                            <a href="#" className="btn btn_purple complete step_next">HOÀN THÀNH</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoanOnline;