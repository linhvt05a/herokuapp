import React from 'react';
import { Form } from "antd"
import { SidebarLeft, CustomerInformation, JobInformation, Collateral, BorrowerInformation } from "./Layout"

const LoanOnline = props => {
    const [status, setStatus] = React.useState(1);
    let [form] = Form.useForm();
    let { Item } = Form
    const [state, setState] = React.useState({
        customerInformation: null,
        job: [],
        collateral: null
    })
    const renderLoanOnline = (status) => {
        switch (status) {
            case 1:
                return <CustomerInformation form={form} />
            case 2:
                return <JobInformation form={form} state={state.job} setState={(value => setState({ ...state, job: value }))} />
            case 3:
                return <Collateral form={form} state={state.collateral} setState={(value => setState({ ...state, collateral: value }))} />
            case 4:
                return <BorrowerInformation Item={Item} data={Array.from(Array(2), (x, index) => index + 1)} />
        }
    }
    const onNext = () => {
        form.submit()
        // setStatus(status + 1);
    }
    const onFinish = (value) => {
        let newdata = value
        setState({ ...state, customerInformation: newdata })
        setStatus(status + 1);
    }
    return (
        <div className="loan_online bg_grey">
            <div className="container container-sm container-md">
                <h2 className="main_heading"><span>Hồ sơ vay online</span></h2>
                <div className="row">
                    <SidebarLeft status={status} />
                    <div className="col-12 col-sm-12 col-lg-8">
                        <Form form={form} onFinish={onFinish}>
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