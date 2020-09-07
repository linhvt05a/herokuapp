// import * as Login from './templates/Login';
import Elements from "./templates/Elements/Elements";
import Example from "./templates/Example";

import Home from "./templates/Home/Home";

import Project from "./templates/Project/Project";
import ProjectDetail from "./templates/Project/ProjectDetail";

import ProductDetail from "./templates/Product/ProductDetail/ProductDetail";
import ProductList from './templates/Product/ProductList/ProductList';
import HotProduct from "./templates/Product/HotProduct";

import News from "./templates/News/NewsList";
import NewsDetail from "./templates/News/NewsDetail";

import RecruitmentList from "./templates/Support/Recruitment/RecruitmentList";
import RecruitmentDetail from "./templates/Support/Recruitment/RecruitmentDetail";

import TransactionLevel from "./templates/TransactionLevel/TransactionLevel";
import ShoppingGuide from "./templates/Support/ShopGuide/ShoppingGuide";
import Legal from "./templates/Support/Legal/Juridical";
import Promotion from './templates/Promotion/Promotion';
import FlashSaleList from './templates/Promotion/FlashSaleList';

import Account from "./templates/Account/CustomerAccount";
import Cart from "./templates/ShopCart/Cart";
import PropertySelling from "./templates/PolicyPayment/PropertySelling";
import LoanPolicy from "./templates/LoanOnline/LoanPolicy";
import CustomerInfo from "./templates/ShopCart/CustomerInfo";
import ConfirmOrderInfo from "./templates/ShopCart/ConfirmOrderInfo";
import DepositPayment from "./templates/ShopCart/DepositPayment";
import Introduce from "./templates/Support/Introduce/Introduce";
import Contact from "./templates/Support/Contact/Contact";

const home_banner_url = '../images/project.jpg';
const introduce_banner_url = '../images/project.jpg';
const contact_banner_url = '../images/project.jpg';
const project_banner_url = '../images/project.jpg';
const projectDetail_banner_url = '../images/project.jpg';
const news_banner_url = '../images/newspaper.jpg';
const newsDetail_banner_url = '../images/newspaper.jpg';
const recruitmentList_banner_url = '../images/recruitment.jpg';
const recruitmentDetail_banner_url = '../images/recruitment.jpg';
const transactionLevel_banner_url = '../images/project.jpg';
const shoppingGuide_banner_url = '../images/project.jpg';
const juridical_banner_url = '../images/juridical.jpg';
const promotion_banner_url = '../images/project.jpg';
const flashSaleList_banner_url = '../images/project.jpg';
const elements_banner_url = '../images/project.jpg';
const example_banner_url = '../images/project.jpg';
const cart_banner_url = '../images/project.jpg';
const product_banner_url = '../images/project.jpg';

const MAIN = [
    {
        "path": "/",
        "component": Home,
        "banner_title": "home_banner_title",
        "banner_url": home_banner_url,
        "banner_show": false,
        "banner_class": ''
    },
    {
        "path": "/elements",
        "component": Elements,
        "banner_title": "elements_banner_title",
        "banner_url": elements_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/example",
        "component": Example,
        "banner_title": "example_banner_title",
        "banner_url": example_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/introduce",
        "component": Introduce,
        "banner_title": "introduce_banner_title",
        "banner_url": introduce_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/contact",
        "component": Contact,
        "banner_title": "contact_banner_title",
        "banner_url": contact_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/product",
        "component": ProductList,
        "banner_title": "contact_banner_title",
        "banner_url": contact_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/product/:id",
        "component": ProductDetail,
        "banner_title": "project_banner_title",
        "banner_url": project_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/project/selling",
        "component": Project,
        "banner_title": "project_banner_title",
        "banner_url": project_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/project/coming-soon",
        "component": Project,
        "banner_title": "project_banner_title",
        "banner_url": project_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/project/:id",
        "component": ProjectDetail,
        "banner_title": "projectDetail_banner_title",
        "banner_url": projectDetail_banner_url,
        "banner_show": false,
        "banner_class": ''
    },
    {
        "path": "/news",
        "component": News,
        "banner_title": "news_banner_title",
        "banner_url": news_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/news/:id",
        "component": NewsDetail,
        "banner_title": "newsDetail_banner_title",
        "banner_url": newsDetail_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/recruitment",
        "component": RecruitmentList,
        "banner_title": "recruitmentList_banner_title",
        "banner_url": recruitmentList_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/recruitment/:id",
        "component": RecruitmentDetail,
        "banner_title": "recruitmentDetail_banner_title",
        "banner_url": recruitmentDetail_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/exchanges",
        "component": TransactionLevel,
        "banner_title": "transactionLevel_banner_title",
        "banner_url": transactionLevel_banner_url,
        "banner_show": false,
        "banner_class": ''
    },
    {
        "path": "/shopping-guide",
        "component": ShoppingGuide,
        "banner_title": "shoppingGuide_banner_title",
        "banner_url": shoppingGuide_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/legal",
        "component": Legal,
        "banner_title": "juridical_banner_title",
        "banner_url": juridical_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/promotion",
        "component": Promotion,
        "banner_title": "promotion_banner_title",
        "banner_url": promotion_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/flashsale",
        "component": FlashSaleList,
        "banner_title": "flashSaleList_banner_title",
        "banner_url": flashSaleList_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/hot-product",
        "component": HotProduct,
        "banner_title": "product_hot_product_banner_title",
        "banner_url": product_banner_url,
        "banner_show": true
    },
    {
        "path": "/account",
        "component": Account,
        "banner_title": "customer_account_banner_title",
        "banner_url": recruitmentList_banner_url,
        "banner_show": true
    },
    {
        "path": "/cart",
        "component": Cart,
        "banner_title": "cart",
        "banner_url": cart_banner_url,
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
        "path": "/cart/customer-info",
        "component": CustomerInfo,
        "banner_title": "cart",
        "banner_url": cart_banner_url,
        "banner_show": true
    },
    {
        "path": "/cart/confirm-order-info",
        "component": ConfirmOrderInfo,
        "banner_title": "cart",
        "banner_url": cart_banner_url,
        "banner_show": true
    },
    {
        "path": "/cart/deposit-payment",
        "component": DepositPayment,
        "banner_title": "cart",
        "banner_url": cart_banner_url,
        "banner_show": true
    },
];

export { MAIN }
