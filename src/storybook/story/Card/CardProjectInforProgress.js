import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import { CardHeader } from '../common';
import CardProjectEmpty from './CardProjectEmpty';

class ProgressInfor extends Component {
    onClick = (e)=>{
        this.props.onClick(this.props.data.id)
    }
    render() {
        let value = this.props.data.value
        return (
            <div>
                <div className="row">
                    <div className="col-6 font-weight-bold">
                        <Trans>{this.props.data.name}</Trans>
                        <span className="text-red"> {this.props.data.value}%</span>
                    </div>
                    <div className="col-6 text-right">
                        <Trans>{this.props.data.status}</Trans>
                    </div>
                </div>
                <div className="progress" style={{ cursor: 'pointer' }} onClick={this.onClick}>
                    <div className="progress-bar progress-bar-striped legal_progress__73 m_margin-3 uni_bg_status_"
                        role="progressbar" style={{ width: `${value}%` }}
                    />
                </div>
                {this.props.last === false && <hr />}
            </div>
        )
    }
}
class CardProjectInforProgress extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <CardHeader label={this.props.label} purpleLabel={this.props.statusLabel} purpleData={this.props.statusList} onPurpleFilter={this.props.onChangeStatus} />
                <div className="card square h-100" id="container__group-progress">
                    <div className="card-body">
                        {(this.props.datas && this.props.datas.length > 0) ?
                            this.props.datas.map((item, index) => <ProgressInfor data={item} last={index === this.props.datas.length - 1} onClick={this.props.onChangeStatus}/>) :
                            <CardProjectEmpty />
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default CardProjectInforProgress

