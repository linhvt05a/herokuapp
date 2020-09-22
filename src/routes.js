// import * as Login from './templates/Login';
import React, { lazy } from 'react';
import { BANNER_URL } from './contant'

import Elements from "./templates/Elements/Elements";
import Example from "./templates/Example";

const Home = lazy(() => import('./templates/Home/Home'));

const ProjectList = lazy(() => import('./templates/Project/ProjectList'));
const ProjectDetail = lazy(() => import('./templates/Project/ProjectDetail'));

const ProductDetail = lazy(() => import('./templates/Product/ProductDetail/ProductDetail'));
const ProductList = lazy(() => import('./templates/Product/ProductList/ProductList'));
const HotProduct = lazy(() => import('./templates/Product/HotProductPage'));

const News = lazy(() => import('./templates/News/NewsList'));
const NewsDetail = lazy(() => import('./templates/News/NewsDetail'));

const Recruitment = lazy(() => import('./templates/Support/Recruitment/Recruitment'));
const RecruitmentDetail = lazy(() => import('./templates/Support/Recruitment/RecruitmentDetail'));

const TransactionLevel = lazy(() => import('./templates/TransactionLevel/TransactionLevel'));
const ShoppingGuide = lazy(() => import('./templates/Support/ShopGuide/ShoppingGuide'));
const Legal = lazy(() => import('./templates/Support/Legal/Juridical'));
const Promotion = lazy(() => import('./templates/Promotion/Promotion'));
const FlashSaleList = lazy(() => import('./templates/Promotion/FlashSaleList'));
const PromotionList = lazy(() => import('./templates/Promotion/PromotionList'));

const Account = lazy(() => import('./templates/Account/CustomerAccount'));

const PropertySelling = lazy(() => import('./templates/PolicyPayment/PropertySelling'));
const LoanPolicy = lazy(() => import('./templates/LoanOnline/LoanPolicy'));
const LoanOnline = lazy(() => import('./templates/LoanOnline/LoanOnline'));

const Introduce = lazy(() => import('./templates/Support/Introduce/Introduce'));
const Contact = lazy(() => import('./templates/Support/Contact/Contact'));

//shipping Cart
const Cart = lazy(() => import('./templates/ShopCart/Cart'));
const CustomerInfo = lazy(() => import('./templates/ShopCart/CustomerInfo'));
const ConfirmOrderInfo = lazy(() => import('./templates/ShopCart/ConfirmOrderInfo'));
const DepositPayment = lazy(() => import('./templates/ShopCart/DepositPayment'));
const OrderInfo = lazy(() => import('./templates/ShopCart/OrderInfo'));

const LiveStream = lazy (() => import('./templates/LiveStream/LiveStream'));

const MAIN = [
    {
        "path": "/",
        "component": Home,
        "banner_title": "home_banner_title",
        "banner_url": BANNER_URL.home_banner_url,
        "banner_show": false,
    },
    {
        "path": "/elements",
        "component": Elements,
        "banner_title": "elements_banner_title",
        "banner_url": BANNER_URL.elements_banner_url,
        "banner_show": true,
    },
    {
        "path": "/example",
        "component": Example,
        "banner_title": "example_banner_title",
        "banner_url": BANNER_URL.example_banner_url,
        "banner_show": true,
    },
    {
        "path": "/introduce",
        "component": Introduce,
        "banner_title": "introduce_banner_title",
        "banner_url": BANNER_URL.introduce_banner_url,
        "banner_show": true,
    },
    {
        "path": "/contact",
        "component": Contact,
        "banner_title": "contact_banner_title",
        "banner_url": BANNER_URL.contact_banner_url,
        "banner_show": true,
    },
    {
        "path": "/product-favorite",
        "component": ProductList,
        "banner_title": "contact_banner_title",
        "banner_url": BANNER_URL.contact_banner_url,
        "banner_show": true,
    },
    {
        "path": "/product/:id",
        "component": ProductDetail,
        "banner_title": "project_banner_title",
        "banner_url": BANNER_URL.project_banner_url,
        "banner_show": false,
    },
    {
        "path": "/project/selling",
        "component": ProjectList,
        "banner_title": "project_banner_title",
        "banner_url": BANNER_URL.project_banner_url,
        "banner_show": true,
    },
    {
        "path": "/project/coming-soon",
        "component": ProjectList,
        "banner_title": "project_banner_title",
        "banner_url": BANNER_URL.project_banner_url,
        "banner_show": true,
    },
    {
        "path": "/project/:id",
        "component": ProjectDetail,
        "banner_title": "projectDetail_banner_title",
        "banner_url": BANNER_URL.projectDetail_banner_url,
        "banner_show": false,
    },
    {
        "path": "/news",
        "component": News,
        "banner_title": "news_banner_title",
        "banner_url": BANNER_URL.news_banner_url,
        "banner_show": true,
    },
    {
        "path": "/news/:id",
        "component": NewsDetail,
        "banner_title": "newsDetail_banner_title",
        "banner_url": BANNER_URL.newsDetail_banner_url,
        "banner_show": true,
    },
    {
        "path": "/recruitment",
        "component": Recruitment,
        "banner_title": "recruitmentList_banner_title",
        "banner_url": BANNER_URL.recruitmentList_banner_url,
        "banner_show": true,
    },
    {
        "path": "/recruitment/:id",
        "component": RecruitmentDetail,
        "banner_title": "recruitmentDetail_banner_title",
        "banner_url": BANNER_URL.recruitmentDetail_banner_url,
        "banner_show": true,
    },
    {
        "path": "/exchanges",
        "component": TransactionLevel,
        "banner_title": "transactionLevel_banner_title",
        "banner_url": BANNER_URL.transactionLevel_banner_url,
        "banner_show": false,
    },
    {
        "path": "/shopping-guide",
        "component": ShoppingGuide,
        "banner_title": "shoppingGuide_banner_title",
        "banner_url": BANNER_URL.shoppingGuide_banner_url,
        "banner_show": true,
    },
    {
        "path": "/legal",
        "component": Legal,
        "banner_title": "juridical_banner_title",
        "banner_url": BANNER_URL.juridical_banner_url,
        "banner_show": true,
    },
    {
        "path": "/promotion",
        "component": Promotion,
        "banner_title": "promotion_banner_title",
        "banner_url": BANNER_URL.promotion_banner_url,
        "banner_show": true,
    },
    {
        "path": "/flashsale",
        "component": FlashSaleList,
        "banner_title": "",
        "banner_url":'',
        "banner_show": false,
    },
    {
        "path": "/hot-product",
        "component": HotProduct,
        "banner_title": "product_hot_product_banner_title",
        "banner_url": BANNER_URL.product_banner_url,
        "banner_show": true
    },
    {
        "path": "/account",
        "component": Account,
        "banner_title": "customer_account_banner_title",
        "banner_url": BANNER_URL.recruitmentList_banner_url,
        "banner_show": true
    },
    {
        "path": "/cart",
        "component": Cart,
        "banner_title": "cart",
        "banner_url": BANNER_URL.cart_banner_url,
        "banner_show": true
    },
    {
        "path": "/property-selling",
        "component": PropertySelling,
        "banner_show": false
    },
    {
        "path": "/loan-policy",
        "component": LoanPolicy,
        "banner_show": false
    },
    {
        "path": "/loan-online",
        "component": LoanOnline,
        "banner_show": false
    },
    {
        "path": "/cart/customer-info",
        "component": CustomerInfo,
        "banner_title": "cart",
        "banner_url": BANNER_URL.cart_banner_url,
        "banner_show": true
    },
    {
        "path": "/cart/confirm-order-info",
        "component": ConfirmOrderInfo,
        "banner_title": "cart",
        "banner_url": BANNER_URL.cart_banner_url,
        "banner_show": true
    },
    {
        "path": "/cart/deposit-payment",
        "component": DepositPayment,
        "banner_title": "cart",
        "banner_url": BANNER_URL.cart_banner_url,
        "banner_show": true
    },
    {
        "path": "/cart/orderinfo",
        "component": OrderInfo,
        "banner_title": "cart",
        "banner_url": BANNER_URL.cart_banner_url,
        "banner_show": true
    },
    {
        "path": "/promotion-list",
        "component": PromotionList,
        "banner_title": "",
        "banner_url": BANNER_URL.promotionList_banner_url,
        "banner_show": false,
    },

    {
        "path": "/liveStream",
        "component": LiveStream,
        "banner_show": false,
    },
];

export { MAIN }
