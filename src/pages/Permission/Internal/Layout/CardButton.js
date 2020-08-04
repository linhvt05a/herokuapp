import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class CardButton extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                    {
                        this.props.classDelete &&
                        <button type="button" id="btn-delete" className={this.props.classDelete}>
                            <Trans>Delete</Trans>
                        </button>
                    }

                    <button type="button" id="btn-save" className="btn-uni-purple float-right _save_employee" onClick={this.props.onUpdate}>
                        <Trans>Update</Trans>
                    </button>

                    <a type="button" className="btn-uni-cancel  square transparent float-right uni-box-shadow black mr-3 " onClick={this.props.onBack}><Trans>Back</Trans></a>
                </div>
            </div>
        )
    }
}
export default CardButton