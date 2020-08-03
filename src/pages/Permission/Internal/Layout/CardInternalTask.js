import React, { Component } from "react";
import { Trans } from "react-i18next";

import { InputCheckBox, InputSelect } from "../../../../components/input";

import { mapping } from "../../../../components/input";
import { permissionDepartmentService } from "../../../../services";

class ContentSelect extends Component {

  render() {
    const { data, blocks, departments, positions, employees, permission } = this.props
    return (
      <div>
        {data && (
          <div className="card square ">
            <div className="card-body  ">
              <div className="row mt-4">
                <InputSelect className="col-lg-6 col-md-6 col-sm-12" classLabel="fw-medium uni_text_6d30ab text-uppercase"
                  label="Block" name="perm_office_group_id" value={mapping(blocks, data.perm_office_group_id)} onChange={this.props.onChange}
                  options={blocks} disabled={this.props.isDisable ? this.props.isDisable : null} />
                <InputSelect className="col-lg-6 col-md-6 col-sm-12" classLabel="fw-medium uni_text_6d30ab text-uppercase"
                  label="Departments" name="perm_department_id" value={mapping(departments, data.perm_department_id)} onChange={this.props.onChange}
                  options={departments} disabled={this.props.isDisable ? this.props.isDisable : null} />
              </div>
              <div className="row mt-4">
                <InputSelect className="col-lg-6 col-md-6 col-sm-12" classLabel="fw-medium uni_text_6d30ab text-uppercase"
                  label="Position" name="perm_employee_position_id" value={mapping(positions, data.perm_employee_position_id)} onChange={this.props.onChange}
                  options={positions} disabled={this.props.isDisable ? this.props.isDisable : null} />
                <InputSelect className="col-lg-6 col-md-6 col-sm-12" classLabel="fw-medium uni_text_6d30ab text-uppercase"
                  label="Employee" name="perm_employee_id" value={mapping(employees, data.perm_employee_id)} onChange={this.props.onChange}
                  options={employees} disabled={this.props.isDisable ? this.props.isDisable : null} required submitted={this.props.submitted} />
              </div>
              {permission &&
                permission.map((item) => (
                  <div className="row mt-3">
                    <div className="col-12">
                      <label className="fw-medium uni_text_6d30ab text-uppercase">
                        <Trans>{item.group_checkbox_name}</Trans>
                      </label>
                      <div className="row">
                        {item.list_children_checkbox &&
                          item.list_children_checkbox.map((rows) => (
                            <InputCheckBox className="col-lg-4 col-md-6 col-sm-12" 
                              label={rows.checkbox_name} name={rows.checkbox_key} value={this.props.data[rows.checkbox_key]}
                              onChange={this.props.onChange} />
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

class Card_Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permission: null,
      loading: false,
    };
  }
  componentDidMount() {
    this.setState(
      {
        loading: true,
      },
      () => {
        permissionDepartmentService.departmentLayout(this.props.user.token).then(
          (res) => {
            this.setState({
              loading: false,
              permission: res["detail"],
            });

            this.forceUpdate();
          },
          (err) => {
            this.props.showToast("error", err);
          }
        );
      }
    );
  }
  render() {
    return (
      <ContentSelect
        data={this.props.data}
        permission={this.state.permission}
        onChange={this.props.onChange}
        blocks={this.props.blocks}
        submitted={this.props.submitted}
        departments={this.props.departments}
        employees={this.props.employees}
        positions={this.props.positions}
        isDisable={this.props.isDisable}
      />
    );
  }
}

class CardInternalTask extends Component {
  render() {
    return (
      <Card_Content
        data={this.props.data}
        onChange={this.props.onChange}
        user={this.props.user}
        submitted={this.props.submitted}
        blocks={this.props.blocks}
        departments={this.props.departments}
        employees={this.props.employees}
        positions={this.props.positions}
        isDisable={this.props.isDisable}
      />
    );
  }
}
export default CardInternalTask;
