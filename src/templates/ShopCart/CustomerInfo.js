import React from 'react';
import { Trans } from 'react-i18next';
import { CardCustomerInfo, CardCartSummary, CardCollapseProductList } from './Layout'
import { useHistory } from "react-router-dom";
import { getLocalStore } from '../../functions/Utils';


const CustomerInfo = (props) => {
    let history = useHistory();
    const [data, setData] = React.useState()
    React.useEffect(() => {

        let user = getStorage.user
        if (!user) {
            history.push("/cart")
        }
        else {
            let newdata = getLocalStore("sale_customer_order");
            if (newdata) {
                setData(newdata)
            }
            else {
                setData({
                    gender: 1,
                    name: "Trần Thị Thu Hoài",
                    customers: 1,
                    identityCardNumber: '345020630',
                    nation: 1,
                    city: 1,
                    district: 1,
                    address: "220/4 đường Cách Mạng Tháng 8",
                    email: "thutran1975@gmail.com",
                    phone: "0909125620"
                })
            }
        }

    }, [])
    return (
        <div className="main-cart bg_grey">
            <div className="container container-sm container-md">
                <h2 className="main_heading">
                    <span><Trans>cart_customer_infor</Trans></span>
                </h2>
                <div className="row">
                    <CardCustomerInfo data={data} onNext={() => history.push("/cart/confirm-order-info")} />
                    <div className="col-12 col-sm-12 col-lg-4">
                        <CardCartSummary />
                        <CardCollapseProductList />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerInfo;
