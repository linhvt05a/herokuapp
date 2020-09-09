import React from 'react';
import { useHistory } from 'react-router-dom';
import { Trans } from 'react-i18next';
import ModalCustom from '../Modal/ModalCustom';


const ButtonBuyNow = props => {
    let history = useHistory();
    const [visible, setVisible] = React.useState(false)
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
    return (
        [<a className={className ? className : `btn btn_green`} key={1} onClick={onBuy}><Trans>product_buy_now</Trans></a>,
        <ModalCustom
            key={2}
            visible={visible}
            widthModal="360px"
            showAccountModal={() => setVisible(false)}
            onNext={() => history.push("/cart")}
        />
        ]
    )
}
export default ButtonBuyNow