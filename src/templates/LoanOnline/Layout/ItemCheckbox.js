import React from 'react';

const checkBoxData = ({ label, className, classNameGroup, classNameGroupInput, checked, onChange, other, placeholder }) => {
    return (
        <div className={className ? className : "col-lg-6 col-md-6 col-sm-12 col-xs-12"}>
            <div className="form-group">
                <div className={classNameGroup ? classNameGroup : "list_checkbox"}>
                    <label
                        className={classNameGroupInput ? classNameGroupInput + (checked ? " active" : "") : "checkbox-inline style_01" + (checked ? " active" : "")}
                        type="checkbox"
                        onChange={onChange}
                    >
                        <input type="checkbox" className="checkbox-custom" />
                        <span className="checkbox-custom-dummy" />
                        {label}
                    </label>
                    {other &&
                        <div className="form-group select2-italic mb-0 flex-grow-1">
                            <input type="text" disabled={!checked} className="form-control" placeholder={placeholder ? placeholder : "Nhập loại tài sản"} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default checkBoxData