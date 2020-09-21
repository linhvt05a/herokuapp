import React from 'react';
import { Form } from "antd"
import { SidebarLeft, CustomerInformation, JobInformation, Collateral, BorrowerInformation } from "./Layout"

const LoanOnline = props => {
    const [status, setStatus] = React.useState(1);
    let [form] = Form.useForm();
    let { Item } = Form

    const renderLoanOnline = (status) => {
        switch (status) {
            case 1:
                return <CustomerInformation Item={Item} />
            case 2:
                return <JobInformation Item={Item} />
            case 3:
                return <Collateral Item={Item} />
            case 4:
                return <BorrowerInformation Item={Item} />
        }
    }
    const onNext = () => {
        form.submit()
        setStatus(status + 1);
    }
    return (
        <div className="loan_online bg_grey">
            <div className="container container-sm container-md">
                <h2 className="main_heading"><span>Hồ sơ vay online</span></h2>
                <div className="row">
                    <SidebarLeft />
                    <div className="col-12 col-sm-12 col-lg-8">
                        <Form form={form}>
                            {renderLoanOnline(status)}
                        </Form>
                        {/* <CustomerInformation />
                        <JobInformation />
                        <Collateral />
                        <BorrowerInformation /> */}
                        {/* list button  */}
                        <div className="loan_online--btn">
                            <a className="btn btn_red_outline cancel">HỦY</a>
                            {status == 4
                                ? <a className="btn btn_purple  step_next">HOÀN THÀNH</a>
                                : <a className="btn btn_purple step_next" onClick={onNext}>TIẾP THEO</a>}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoanOnline;