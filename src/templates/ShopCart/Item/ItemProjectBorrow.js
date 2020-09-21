import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputSlider } from '../../../components/base';
import { translate } from '../../../functions/Utils';
import ItemProduct from './ItemProduct';

const ItemProjectBorrow = props => {
    let { t } = useTranslation()
    const { data } = props

    return (
        <ItemProduct show={false} {...props}>
            <div className="heading_big img_bank">
                <div className="top">
                    <a href="#" className="name fw-medium color_6d30ab title_borrow">THÔNG TIN VAY</a>
                    <img src="../images/bank04.jpg" className="img-fluid img" alt="Logo-bank" />
                </div>
            </div>
            <div className="filter">
                <div className="info-block">
                    <div class="description-apartment">
                        <div className="form-group">
                            <label className="label">Thời hạn vay <span className="unit">(năm)</span>
                            </label>
                            <div className="pull-range">
                                <input type="number" className="range range02" data-slider-id="range02" data-slider-min={0} data-slider-max={50} data-slider-step={1} data-slider-value={0} />
                                <input type="number" className="form-control rangeValue02" />
                            </div>
                        </div>
                    </div>
                    <div className="cart-expenses ">
                        <div className="form-group">
                            <label className="label">Phần trăm dự kiến vay <span className="unit">(%) </span>
                            </label>
                            <div className="pull-range">
                                <input type="number" className="range range02" data-slider-id="range02" data-slider-min={0} data-slider-max={50} data-slider-step={1} data-slider-value={0} />
                                <input type="number" className="form-control rangeValue02" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </ItemProduct>
    )
}
export default ItemProjectBorrow