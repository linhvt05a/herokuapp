
import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { CardHeader, SliderImage } from '../common';
import CardProjectEmpty from './CardProjectEmpty';

class CardInfo extends Component {
    render() {
        return (
            <div className="col-8 content-right-info-project">
                <div className="row m_grid--list_project">
                    <div className="item mb-0" style={{ border: "none" }}>
                        <div className="content m-0">
                            <p className="name"> Bất động sản mùa Corona
                            <span className="address">353 Âu Cơ, Hòa Long, Bà Rịa, Bà Rịa - Vũng Tàu</span>
                            </p>
                            <ul className="details">
                                <li>
                                    <i className="la la-calendar" />
                                    <span className="title"><Trans>Day Active</Trans></span>:
                                    <span className="text">01/05/2020</span>
                                </li>
                                <li>
                                    <i className="la la-calendar" />
                                    <span className="title"><Trans>Expiry date of land</Trans></span>:
                                    <span className="text">50</span>
                                </li>
                                <li>
                                    <i className="la la-money " />
                                    <span className="title"><Trans>Annual of land rental</Trans></span>:
                                    <span className="text">0</span>
                                </li>
                                <li>
                                    <i className="las la-arrows-alt" />
                                    <span className="title"><Trans>Total area of land</Trans></span>:
                                    <span className="text">5000.0
                                        (m2) </span>
                                </li>
                                <li>
                                    <i className="las la-sort-amount-up" />
                                    <span className="title"><Trans>Number of floors &amp; maximum height</Trans></span>:
                                    <span className="text">10(T) - 50m</span>
                                </li>
                                <li>
                                    <i className="las la-sort-amount-down" />
                                    <span className="title"><Trans>Maximum number of basements</Trans></span>:
                                    <span className="text">3(T)</span>
                                </li>
                                <li>
                                    <i className="la la-list" />
                                    <span className="title"><Trans>Building density</Trans></span>:
                                    <span className="text">80.0 % </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CardProjectInfor extends Component {
    render() {
        return (<div className={this.props.class}>
            <CardHeader label={this.props.label} />
            {
                this.props.data ? <div className="card square">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <SliderImage className="m_slider"
                                    datas={this.props.data.images} />
                            </div>
                            <CardInfo data={this.props.data} />
                        </div>
                    </div>
                </div>
                    : <CardProjectEmpty />
            }
        </div>)
    }
}
export default CardProjectInfor