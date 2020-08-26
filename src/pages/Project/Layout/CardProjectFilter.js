import React from 'react';
import { Link } from 'react-router-dom';
import { Sliders } from '../../../components/base/index'
import { InputSelect } from '../../../components/base/Select/index'
import { Trans } from 'react-i18next';

const data = [20, 60]
const bedroomNumber = [{value: 1, label: '--Select--'}, {value: 2, label: '1'}, {value: 3, label: '2'}, {value: 4, label: '3'}]
const houseDirection = [{value: 1, label: '--Select--'}, {value: 2, label: 'Đông'}, {value: 3, label: 'Tây'}, {value: 4, label: 'Nam'}, {value: 5, label: 'Bắc'}]

const CardProjectFilter = () => {

    return(
        <div className="searchProject">
            <div className="searchProject__title">
                <Trans>project_filter</Trans>
            </div>
            <InputSelect placeholder="bedroom_number" datas ={bedroomNumber}/>
            <InputSelect placeholder="house_direction" datas={houseDirection}/>
            <div className="map_search--range">
                <div className="range_item price">
                    <label className="label">
                        <Trans>price_range</Trans><br /><i> (tỷ đồng)</i>
                    </label>
                        <Sliders value={data} displayBox="on"/>
                </div>
                <div className="range_item area">
                    <label className="label">
                        <Trans>area</Trans><i> (m2)</i>
                    </label>
                    <Sliders value={data} displayBox="on"/>
                </div>
            </div>
            <Link to="#" className="btn btn_green text-uppercase w-100"><Trans>filter</Trans></Link>
        </div>
    )
}

export default CardProjectFilter