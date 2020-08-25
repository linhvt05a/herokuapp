import React, { Component } from 'react'

export default class PolicyTitle extends Component {
    render() {
        return (
            <div className="view_horizontal">
                <div className="item">
                    <i className="icon fas fa-building" />
                    <div className="text">
                        <span className="text-uppercase">
                            DỰ ÁN
                        </span>
                        <span className="value">Royal Garden</span>
                    </div>
                </div>
                <div className="item">
                    <i className="icon fas fa-money-bill-wave" />
                    <div className="text">
                        <span className="text-uppercase">
                            KHU
                        </span>
                        <span className="value money">VALLEN</span>
                    </div>
                </div>
                <div className="item">
                    <i className="icon fas fa-boxes" />
                    <div className="text">
                        <span className="text-uppercase">
                            KHỐI
                        </span>
                        <span className="value times">B</span>
                    </div>
                </div>
            </div>
        )
    }
}
