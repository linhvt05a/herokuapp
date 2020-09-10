import React from 'react';
import { Trans } from 'react-i18next';
import { CardCartSummary, CardCollapseProductList, CardPayments } from './Layout'
import { useHistory } from 'react-router-dom';
import { Form } from 'antd';
import { formatDate, getLocalStore } from '../../functions/Utils';

const DepositPayment = (props) => {
    let history = useHistory();
    const [card, setCard] = React.useState()
    const [checked, setChecked] = React.useState({
        credit: false,
        debit: false,
        transfer: false
    })
    let [form] = Form.useForm();
    let { Item } = Form
    const disableConfirm = () => {
        if (checked.credit || checked.debit || checked.transfer) {
            return false
        }
        return true
    }
    React.useEffect(() => {
        let user = getLocalStore("user")
        if (!user) {
            history.push("/")
        }
        else {
            let newCard = getLocalStore("PAYMENT_METHOD", true);
            if (newCard) {
                console.log(newCard);
                // newCard = JSON.parse(newCard)
                if (newCard.id == 1) {
                    newCard.card.cardDate = "";
                    setCard(newCard.card)
                }
            }
            else {
                setCard({
                    cardNumber: "",
                    cardName: "",
                    cardDate: "",
                    cardCode: ""
                })
            }

        }

    }, [])

    const onFinish = (value, allValue) => {
        if (checked.credit) {
            form.submit()
            if (value && value["cardDate"]._d) {
                value["cardDate"] = formatDate(value["cardDate"], "DD/MM")
            }
            if (checked.credit && value) {
                localStorage.setItem("PAYMENT_METHOD", JSON.stringify({ id: 1, card: value }));
            }
            if (checked.debit) {
                localStorage.setItem("PAYMENT_METHOD", JSON.stringify({ id: 2, card: "" }))
            }
            if (checked.transfer) {
                localStorage.setItem("PAYMENT_METHOD", JSON.stringify({ id: 3, card: "" }))
            }
            history.push("/cart/orderinfo")
        }
        else
            history.push("/cart/orderinfo")
    }
    return (
        <div className="main-cart bg_grey">
            <div className="container container-sm container-md">
                <h2 class="main_heading">
                    <span><Trans>cart_deposit_payment</Trans></span>
                </h2>
                {/* <div className="row"> */}
                {card &&
                    <Form className="row" initialValues={card} onFinish={onFinish} form={form} >
                        <div className="col-12 col-sm-12 col-lg-8 main-cart__payment mb-4">
                            <CardPayments
                                checked={checked}
                                setChecked={setChecked}
                                form={form}
                                Item={Item} />
                            <div class="text-right mt-2">
                                <a
                                    class={`btn btn_purple text-uppercase ${disableConfirm() ? "disabled" : ""}`}
                                    onClick={() => onFinish()}
                                ><Trans>button_confirm</Trans></a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-4">
                            <CardCartSummary />
                            <CardCollapseProductList />
                        </div>
                    </Form>}
                {/* </div> */}
            </div>
        </div>
    )
}
export default DepositPayment;
