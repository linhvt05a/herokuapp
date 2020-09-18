import React from 'react';
import { SliderSimple } from "./index"

const Banking = props => {
    let { dispatch, actions, token } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: props.dataImgs ? props.dataImgs.length : 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    };
    const dataImgs = props.dataImgs;
    const onClick = (bank_id) => {
        console.log(bank_id);
        dispatch(actions.getPolicy({ token, bank_id }))
    }
    return (
        <div className="borrow__item">
            <div className="borrow__title text-uppercase">Chọn ngân hàng<i className="sub">  SCB ưu tiên hổ trợ mọi hình thức vay vốn</i>
            </div>
            <div className="borrow__banks borrowBanks">
                <SliderSimple dataImgs={dataImgs} settings={settings} onClick={onClick} />
            </div>
        </div>
    )
}
export default React.memo(Banking)