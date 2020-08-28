import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, Select, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';

const PropertyFilter = (props) => {

    const [progress, setProgress] = useState(1);
    const [discount, setDiscount] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [totalPayment, setTotalPayment] = useState(3000000000);
    
    const onProgressChange = (value) => {
        setProgress(value);
        if(value==2) {
            setDiscount(5);
            setDiscountAmount(100);
            setTotalPayment(500);
        } else if(value==3) {
            setDiscount(10);
            setDiscountAmount(150);
            setTotalPayment(450);
        } else if(value==4) {
            setDiscount(15);
            setDiscountAmount(200);
            setTotalPayment(400);
        } else if(value==5) {
            setDiscount(20);
            setDiscountAmount(250);
            setTotalPayment(350);
        } else {
            setDiscount(0);
            setDiscountAmount(0);
            setTotalPayment(3000000000);
        }
        
    };
    
    console.log("discount",discount);
    console.log("discountAmount", discountAmount);
    console.log("totalPayment", totalPayment);
    

    const onFinish = values => {
        console.log('Success:', values);
    };

    return (
        <div className="sales_box">
            <div className="sales_heading">
                <span className="text">Giá niêm yết (đồng)
                    <i className="icon_info fas fa-info-circle" />
                </span>
                <span className="number">3.000.000.000</span>
            </div>
            <div className="sales_policy--calculator">
                <Form
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="pay_progress"
                        label="Tiến độ thanh toán"
                        defaultValue={progress}
                        className="form-group"
                    >
                    
                        <Select className="select2 js-select2 form-control"
                            defaultValue={progress}
                            onChange={onProgressChange}
                            allowClear
                            name="progress"
                        >
                            <Select.Option value={1}>Tiến độ chuẩn</Select.Option>
                            <Select.Option value={2}>Thanh toán sớm 10%</Select.Option>
                            <Select.Option value={3}>Thanh toán sớm 20%</Select.Option>
                            <Select.Option value={4}>Thanh toán sớm 30%</Select.Option>
                            <Select.Option value={5}>Thanh toán sớm 40%</Select.Option>
                        </Select>
                    </Form.Item>
                    
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) =>
                            prevValues.progress !== currentValues.progress
                        }
                    >
                        {({ getFieldValue }) =>
                            getFieldValue("pay_progress") > 1 ? (
                                <div>
                                    <Form.Item
                                            className="form-group"
                                        >
                                            <label className="label">Được chiết khấu</label>
                                            <div className="input-group">
                                                <Input type="text" 
                                                    name="discount" 
                                                    readOnly 
                                                    className="form-control" 
                                                    placeholder={discount} 
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text" id="basic-addon2">%</span>
                                                </div>
                                            </div>
                                        </Form.Item>
                                        <Form.Item
                                            className="form-group"
                                        >
                                            <label className="label">
                                                Số tiền chiết khấu <span className="unit">(đồng)</span>
                                            </label>
                                            <Input type="text" 
                                                name="discountAmount" 
                                                readOnly 
                                                className="form-control color_e94c4c" 
                                                placeholder={discountAmount}
                                             />
                                        </Form.Item>
                                </div>
                            ) : null
                        }
                    </Form.Item>
                    <Form.Item
                        className="form-group"
                    >
                        <label className="label">
                            Tổng tiền thanh toán <span className="unit">(đồng)</span>
                        </label>
                        <Input type="text" name="totalPayment" readOnly className="form-control color_e94c4c" placeholder={totalPayment} />
                    </Form.Item>
                    <div className="sales_box--list_button">
                        <Link to="/" className="btn btn_green text-uppercase">MUA NGAY</Link>
                        <Link to="/loan-policy" className="btn btn_purple text-uppercase">CHÍNH SÁCH VAY</Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default PropertyFilter