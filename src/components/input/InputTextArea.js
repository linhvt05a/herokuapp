import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class InputTextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    componentDidMount() {
        this.setState({ value: (this.props.value ? this.props.value : '') });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ value: (nextProps.value ? nextProps.value : '') });
    }

    onChange = e => {
        this.setState({ value: e.target.value }, () => {
            if( this.props.onChange ){
                this.props.onChange( this.props.name, this.state.value );
            }
        });

    }

    render(){
        const { t } = this.props;
        return (
            <div className={this.props.className ? this.props.className : '' } >
                <div className="form-group">
                    {
                        this.props.label &&
                        <label className={this.props.classLabel ? this.props.classLabel : "fw-medium"} >
                            {t(this.props.label)}
                            {
                                this.props.required &&
                                <span className="uni_star_e94c4c"> (*)</span>
                            }
                        </label>
                    }
                    <textarea rows="4"
                        className={this.props.classValue ? this.props.classValue :"form-control square text-left text-bold-600"}
                        disabled={this.props.disabled ? "disabled" : "" }
                        name={this.props.name}
                        placeholder={ this.props.placeholder ? t(this.props.placeholder) : t(this.props.label)}
                        value={this.state.value}
                        onChange={this.onChange} />
                    { this.props.submitted && !this.props.value && <p className="text-danger">{t(this.props.label)} {t('required')}</p> }
                </div>
            </div>
        )
    }
}

export default withTranslation()(InputTextArea);

