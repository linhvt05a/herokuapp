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
            <div className="info-block">
                <div className="description-apartment">
                    {/*trai */}
                    <div className="block select-check  uni-text-6d30ab fw-bold">
                        <span className="title-project">THÔNG TIN VAY </span>
                    </div>
                    <InputSlider
                        classNameGroupSlider="d-flex flex-row"
                        label={translate("loan_tenor", t)}
                        titleClassName="label"
                        min={0}
                        max={30}
                        style={{ margin: '0 16px' }}
                        value={10}
                        // onChange={onChangeBorrow}
                        classNameInput="form-control"
                        classNameSlider="range"

                    />
                </div>
                <div className="cart-expenses ">
                    {/**phai */}
                    <div className="block select-check  uni-text-6d30ab fw-bold">
                        <span className="title-project"> </span>
                    </div>
                    <InputSlider
                        classNameGroupSlider="d-flex flex-row"
                        label={translate("loan_tenor", t)}
                        titleClassName="label"
                        min={0}
                        max={30}
                        style={{ margin: '0 16px' }}
                        value={10}
                        // onChange={onChangeBorrow}
                        classNameInput="form-control"
                        classNameSlider="range"

                    />
                </div>
            </div>
        </ItemProduct>
    )
}
export default ItemProjectBorrow