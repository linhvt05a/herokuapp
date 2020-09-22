import React from 'react';
import { useHistory } from 'react-router-dom';
import { Trans } from 'react-i18next';
import ModalCustom from '../Modal/ModalCustom';
import { CardAccountModal } from "../../../templates/ShopCart/Layout"


const ButtonBuyNow = props => {
    let history = useHistory();
    const [visible, setVisible] = React.useState(false);
    const [show, setShow] = React.useState(0)
    let { className, data } = props;

    const onBuy = () => {
        let user = localStorage.getItem("user");
        if (user) {
            localStorage.setItem("buy_now_cart", JSON.stringify(data))
            history.push("/cart");
            // console.log(data);
        }
        else {
            // console.log(data);
            localStorage.setItem("buy_now_cart", JSON.stringify(data))
            setVisible(true)
        }
    }
    const onVisible = (hide) => {
        setShow(0)
        setVisible(hide)
    }
    return (
        [<a className={className ? className : `btn btn_green`} key={1} onClick={onBuy}><Trans>product_buy_now</Trans></a>,
        <CardAccountModal
            key={2}
            visible={visible}
            widthModal="360px"
            setVisible={() => onVisible(false)}
            tab={show}
            setTab={setShow}
            onNext={() => history.push("/cart")}
        />
        ]
    )
}
export default ButtonBuyNow