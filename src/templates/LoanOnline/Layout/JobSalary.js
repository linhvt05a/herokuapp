import React from 'react';
import { DOCUMENT_TYPE, RULES, PAY_TYPE, FILE_CONTENT_TYPE } from '../../../contant';
import { Form, Input, Upload } from "antd"
import { SelectCustom } from '../../../components/base';
import { translate } from '../../../functions/Utils';
import { useTranslation } from 'react-i18next';

const JobSalary = props => {
    const { t } = useTranslation();
    let { state, setState } = props
    const { DEFAULT, DOC, DOCX, DWG, JPEG, JPG, PDF, PNG, XLS, XLSX } = FILE_CONTENT_TYPE
    // const [state, setState] = React.useState([])
    const createData = (documentType = null, documentName = "", document = null, status = false) => {
        return { documentType, documentName, document, status }
    }
    React.useEffect(() => {
        let newData = [];
        newData.push(createData())
        setState(newData)
    }, [])
    const onAddDocument = () => {
        let newData = [].concat(state);
        newData.push(createData());
        setState(newData)
    }
    const onDeleteDocument = (index) => {
        let newData = [].concat(state);
        if (newData.length > 1) {
            newData.splice(index, 1)
            setState(newData)
        }

    }
    const onChange = (value, index, type) => {
        let newData = [].concat(state);

        if (type == "status") {
            for (let i = 0;i < newData.length;i++) {
                if (i == index) {
                    newData[i][type] = value;
                }
                else {
                    newData[i][type] = false;
                }
            }
        }
        else {
            newData[index][type] = value;
        }
        setState(newData)
    }

    const onUpload = async ({ file }, index, type) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }

        const image = new Image();
        image.src = src;
        onChange({ name: file.name, src }, index, type)
        // console.log(image);
    }
    const renderTr = (item, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>
                    <SelectCustom
                        classNameGroup="form-group select2-italic mb-0"
                        placeholder={translate("Chọn hình thức", t)}
                        titleClassName="label"
                        classNameSelect="form-control js-select2"
                        datas={DOCUMENT_TYPE}
                        style={{ height: "none" }}
                        value={item.documentType}
                        onChange={value => onChange(value, index, "documentType")}
                        trans
                    />
                </td>
                <td style={{ width: '43%' }}>
                    <div className="form-group mb-0 form_file_name">
                        <input type="text" className="form-control" placeholder="Nhập tên tài liệu" value={item.documentName} onChange={(e) => onChange(e.target.value, index, "documentName")} />
                    </div>
                </td>
                <td>
                    <div className="form-group mb-0 form_file_type">
                        {item.document ? <span>{item.document.name}</span> :
                            <Upload
                                className="add_new m-0 b-0"
                                onChange={e => onUpload(e, index, "document")}
                                listType={DEFAULT, DOC, DOCX, DWG, JPEG, JPG, PDF, PNG, XLS, XLSX}
                            ><span className="font-style-normal">+</span> Tải lên</Upload>}
                    </div>
                </td>
                <td>
                    <div className="dropdown">
                        <i className="icon_more las la-ellipsis-v" data-toggle="dropdown" onClick={() => onChange(!item.status, index, "status")} />
                        <div className={`dropdown-menu ${item.status ? "show" : ""}`}>
                            <a className="dropdown-item" >
                                <i className="icon_dropdown edit far fa-edit" /> Chỉnh sửa </a>
                            <a className="dropdown-item" onClick={() => onDeleteDocument(index)}>
                                <i className="icon_dropdown delete far fa-trash-alt" />Xóa  </a>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }

    return (
        <div className="loan_online--item">
            <div className="heading">Thu nhập hiện có</div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="form-group">
                        <label className="label">Lương thực lãnh <span className="unit">(đồng)</span><span className="star">*</span></label>
                        <Form.Item name="realSalary" rules={RULES.number.form}>
                            <Input type={RULES.number.type} placeholder="Số tiền" className="form-control" />
                        </Form.Item>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="form-group">
                        <label className="label">Thu nhập khác <span className="unit">(đồng)</span></label>
                        <Form.Item name="otherSalary" >
                            <Input type={RULES.number.type} placeholder="Số tiền" className="form-control" />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="personal_expenses mt-3">
                <div className="table_purple h-100">
                    <table>
                        <tbody><tr>
                            <th>STT</th>
                            <th>LOẠI TÀI LIỆU</th>
                            <th>NHẬP TÊN TÀI LIỆU</th>
                            <th>ĐÍNH KÈM TỆP</th>
                            <th><i className="icon_heading fas fa-cog" /></th>
                        </tr>
                            {state.length > 0 && state.map((item, index) => {
                                return renderTr(item, index)
                            })}

                            <tr className="last">
                                <td colSpan={7}>
                                    <a className="add_new m-0" onClick={onAddDocument}><span className="font-style-normal" >+</span> Thêm tài liệu</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default JobSalary