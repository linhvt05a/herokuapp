import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FormUser } from "../../../../templates/Account/index";
import { IMAGE_URL } from '../../../../contant';
import { useDispatch, useSelector } from "react-redux";
import { productAction, accountAction } from "../../../../store/action/index";
import { getLocalStore } from '../../../../functions/Utils';


const MenuRight = (props) => {
    const user = getLocalStore('user');
    const [inHoverProfile, setHoverProfile] = useState(false);
    const [dataLocal, setDatalocal] = useState([])
    const dispatch = useDispatch();
    const product = useSelector(state => state.productReducer);
    const productListSuccess = product.productFavoriteList.success
    const favoriteList = productListSuccess ? product.productFavoriteList : null;
    const newArray = [];
    const dataStorage = sessionStorage.getItem('favor')
    useEffect(() => {
        if (user && user !== null) {
            dispatch(productAction.productFavoriteList({ page: 1, limit: 5 }));
        } else {
            const data = JSON.parse(dataStorage)
            data && data.forEach(obj => {
                if (!newArray.some(o => o.product_id == obj.product_id)) {
                    newArray.push({ ...obj })
                }
            });
            setDatalocal(newArray)
        }

    }, []);
    return (
        <div className="header_actions d-none d-md-flex">
            <div className="item">
                <Link to="/liveStream" className="link">
                    <img src={`${IMAGE_URL}images/live_stream.png`} className="live_stream" />
                </Link>
                <a href="/product-favorite" className="link">
                    <span className="icon">
                        <i className="heart far fa-heart" />
                        <FavoriteCount dataLocal={dataLocal} favoriteList={favoriteList} loginData={user} />
                    </span>
                </a>
            </div>
            <div className="item">
                <Link to="/cart" className="link">
                    <span className="icon">
                        <i className="icon cart fas fa-cart-plus" />
                        <i className="number">4</i>
                    </span>
                </Link>
            </div>
            <div className={`item dropdown ${inHoverProfile ? "open" : ''}`}>
                <Link to="/account" className="link"
                    onMouseEnter={() => setHoverProfile(true)}
                    aria-expanded={inHoverProfile}>
                    {
                        user ?
                            <img src={user.avatar_url ? user.avatar_url : `${IMAGE_URL}images/favicon.png`} className="avatarLogin" />
                            : <i className="icon user fas fa-user-circle" />

                    }
                </Link>
                <div className="dropdown-menu" onMouseLeave={() => setHoverProfile(false)}>
                    {document.defaultView.innerWidth > props.MOBILE_WIDTH && <FormUser />}
                </div>
            </div>
        </div>
    )
}

function FavoriteCount(props) {
    const { dataLocal, favoriteList, loginData } = props
    if (loginData && loginData.user_id !== null) {
        return <i className="number">{favoriteList && favoriteList.detail.list_product.length}</i>
    }
    return <i className="number">{dataLocal && dataLocal.length}</i>
}
export default MenuRight;