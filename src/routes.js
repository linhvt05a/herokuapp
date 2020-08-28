// import * as Login from './pages/Login';
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import ProjectDetail from "./pages/Project/ProjectDetail";
import Introduce from "./pages/Introduce/Introduce";
import News from "./pages/News/NewsList";
import NewsDetail from "./pages/News/NewsDetail";
import RecruitmentList from "./pages/Recruitment/RecruitmentList";
import RecruitmentDetail from "./pages/Recruitment/RecruitmentDetail";
import TransactionLevel from "./pages/TransactionLevel/TransactionLevel";
import ShoppingGuide from "./pages/ShoppingGuide/ShoppingGuide";
import Juridical from "./pages/Juridical/Juridical";
import Promotion from './pages/Promotion/Promotion';
import FlashSaleList from './pages/Promotion/FlashSaleList';
import Elements from "./pages/Elements/Elements";
import Example from "./pages/Example";
import HotProduct from "./pages/Product/HotProduct";
import User from "./pages/User/CustomerAccount";
import ProductList from './pages/ProductList/ProductList';

const home_banner_url = './assets/images/project.jpg';
const introduce_banner_url = './assets/images/project.jpg';
const contact_banner_url = './assets/images/project.jpg';
const project_banner_url = './assets/images/project.jpg';
const projectDetail_banner_url = './assets/images/tutorial_product.jpg';
const news_banner_url = './assets/images/newspaper.jpg';
const newsDetail_banner_url = './assets/images/newspaper.jpg';
const recruitmentList_banner_url = './assets/images/recruitment.jpg';
const recruitmentDetail_banner_url = './assets/images/recruitment.jpg';
const transactionLevel_banner_url = './assets/images/project.jpg';
const shoppingGuide_banner_url = './assets/images/project.jpg';
const juridical_banner_url = './assets/images/juridical.jpg';
const promotion_banner_url = './assets/images/project.jpg';
const flashSaleList_banner_url = './assets/images/project.jpg';
const elements_banner_url = './assets/images/project.jpg';
const example_banner_url = './assets/images/project.jpg';
const product_banner_url = './assets/images/project.jpg';

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
        "path": "/productList",
        "component": ProductList,
        "banner_title": "contact_banner_title",
        "banner_url": contact_banner_url,
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
        "path": "/project/coming_soon",
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
        "path": "/NewsDetail/:id",
        "component": NewsDetail,
        "banner_title": "newsDetail_banner_title",
        "banner_url": newsDetail_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/recruitmentList",
        "component": RecruitmentList,
        "banner_title": "recruitmentList_banner_title",
        "banner_url": recruitmentList_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/recruitmentDetail",
        "component": RecruitmentDetail,
        "banner_title": "recruitmentDetail_banner_title",
        "banner_url": recruitmentDetail_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/transactionLevel",
        "component": TransactionLevel,
        "banner_title": "transactionLevel_banner_title",
        "banner_url": transactionLevel_banner_url,
        "banner_show": false,
        "banner_class": ''
    },
    {
        "path": "/shoppingGuide",
        "component": ShoppingGuide,
        "banner_title": "shoppingGuide_banner_title",
        "banner_url": shoppingGuide_banner_url,
        "banner_show": true,
        "banner_class": ''
    },
    {
        "path": "/juridical",
        "component": Juridical,
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
        "path": "/hot_product/list",
        "component": HotProduct,
        "banner_title": "product_hot_product_banner_title",
        "banner_url": product_banner_url,
        "banner_show": true
    },
    {
        "path": "/user",
        "component": User,
        "banner_title": "customer_account_banner_title",
        "banner_url": recruitmentList_banner_url,
        "banner_show": true
    },
    // {
    //     "path": "/productList",
    //     "component": ProductList,
    //     "banner_title": "products_list_banner_title",
    //     "banner_url": product_banner_url,
    //     "banner_show": true
    // }
];

export { MAIN }
