"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAIN = void 0;

var _Home = _interopRequireDefault(require("./pages/Home/Home"));

var _Contact = _interopRequireDefault(require("./pages/Contact/Contact"));

var _Project = _interopRequireDefault(require("./pages/Project/Project"));

var _ProjectDetail = _interopRequireDefault(require("./pages/Project/ProjectDetail"));

var _Introduce = _interopRequireDefault(require("./pages/Introduce/Introduce"));

var _NewsList = _interopRequireDefault(require("./pages/News/NewsList"));

var _NewsDetail = _interopRequireDefault(require("./pages/News/NewsDetail"));

var _RecruitmentList = _interopRequireDefault(require("./pages/Recruitment/RecruitmentList"));

var _RecruitmentDetail = _interopRequireDefault(require("./pages/Recruitment/RecruitmentDetail"));

var _TransactionLevel = _interopRequireDefault(require("./pages/TransactionLevel/TransactionLevel"));

var _ShoppingGuide = _interopRequireDefault(require("./pages/ShoppingGuide/ShoppingGuide"));

var _Juridical = _interopRequireDefault(require("./pages/Juridical/Juridical"));

var _Promotion = _interopRequireDefault(require("./pages/Promotion/Promotion"));

var _FlashSaleList = _interopRequireDefault(require("./pages/Promotion/FlashSaleList"));

var _Elements = _interopRequireDefault(require("./pages/Elements/Elements"));

var _Example = _interopRequireDefault(require("./pages/Example"));

var _HotProduct = _interopRequireDefault(require("./pages/Product/HotProduct"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import * as Login from './pages/Login';
var home_banner_url = './assets/images/project.jpg';
var introduce_banner_url = './assets/images/project.jpg';
var contact_banner_url = './assets/images/project.jpg';
var project_banner_url = './assets/images/project.jpg';
var projectDetail_banner_url = './assets/images/tutorial_product.jpg';
var news_banner_url = './assets/images/newspaper.jpg';
var newsDetail_banner_url = './assets/images/newspaper.jpg';
var recruitmentList_banner_url = './assets/images/recruitment.jpg';
var recruitmentDetail_banner_url = './assets/images/recruitment.jpg';
var transactionLevel_banner_url = './assets/images/project.jpg';
var shoppingGuide_banner_url = './assets/images/project.jpg';
var juridical_banner_url = './assets/images/juridical.jpg';
var promotion_banner_url = './assets/images/project.jpg';
var flashSaleList_banner_url = './assets/images/project.jpg';
var elements_banner_url = './assets/images/project.jpg';
var example_banner_url = './assets/images/project.jpg';
var product_banner_url = './assets/images/project.jpg';
var MAIN = [{
  "path": "/",
  "component": _Home["default"],
  "banner_title": "home_banner_title",
  "banner_url": home_banner_url,
  "banner_show": false,
  "banner_class": ''
}, {
  "path": "/elements",
  "component": _Elements["default"],
  "banner_title": "elements_banner_title",
  "banner_url": elements_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/example",
  "component": _Example["default"],
  "banner_title": "example_banner_title",
  "banner_url": example_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/introduce",
  "component": _Introduce["default"],
  "banner_title": "introduce_banner_title",
  "banner_url": introduce_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/contact",
  "component": _Contact["default"],
  "banner_title": "contact_banner_title",
  "banner_url": contact_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/project",
  "component": _Project["default"],
  "banner_title": "project_banner_title",
  "banner_url": project_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/project/:id",
  "component": _ProjectDetail["default"],
  "banner_title": "projectDetail_banner_title",
  "banner_url": projectDetail_banner_url,
  "banner_show": false,
  "banner_class": ''
}, {
  "path": "/news",
  "component": _NewsList["default"],
  "banner_title": "news_banner_title",
  "banner_url": news_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/NewsDetail",
  "component": _NewsDetail["default"],
  "banner_title": "newsDetail_banner_title",
  "banner_url": newsDetail_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/recruitmentList",
  "component": _RecruitmentList["default"],
  "banner_title": "recruitmentList_banner_title",
  "banner_url": recruitmentList_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/recruitmentDetail",
  "component": _RecruitmentDetail["default"],
  "banner_title": "recruitmentDetail_banner_title",
  "banner_url": recruitmentDetail_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/transactionLevel",
  "component": _TransactionLevel["default"],
  "banner_title": "transactionLevel_banner_title",
  "banner_url": transactionLevel_banner_url,
  "banner_show": false,
  "banner_class": ''
}, {
  "path": "/shoppingGuide",
  "component": _ShoppingGuide["default"],
  "banner_title": "shoppingGuide_banner_title",
  "banner_url": shoppingGuide_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/juridical",
  "component": _Juridical["default"],
  "banner_title": "juridical_banner_title",
  "banner_url": juridical_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/promotion",
  "component": _Promotion["default"],
  "banner_title": "promotion_banner_title",
  "banner_url": promotion_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/flashsale",
  "component": _FlashSaleList["default"],
  "banner_title": "flashSaleList_banner_title",
  "banner_url": flashSaleList_banner_url,
  "banner_show": true,
  "banner_class": ''
}, {
  "path": "/hot_product/list",
  "component": _HotProduct["default"],
  "banner_title": "product_hot_product_banner_title",
  "banner_url": product_banner_url,
  "banner_show": true
}];
exports.MAIN = MAIN;