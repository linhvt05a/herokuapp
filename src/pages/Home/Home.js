import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ItemHomeProject } from './Item/index'
import { Trans } from "react-i18next";
import CardNews from '../../components/common/CardNews'
import { Link } from "react-router-dom";
import HeadingFilter from '../../components/common/HeadingFilter'
import { CardSaleFlash, CardOverView, CardHotProduct } from "./Layout/index";
import { MapHome } from "../../components/common/Map/index";
import { projectAction, productAction } from "../../store/action/index";
import CardNoData from '../../components/common/CardNoData';
import { LocationView, YourPosition } from "./Location/index";
import { OnMapPoligon } from "./Search/index";

const news =
    [
        {
            id: 0,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/four-brown-wooden-chairs-2635038.jpg'
        },
        {
            id: 1,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/four-brown-wooden-chairs-2635038.jpg'
        },
        {
            id: 2,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/four-brown-wooden-chairs-2635038.jpg'
        },
        {
            id: 3,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/four-brown-wooden-chairs-2635038.jpg'
        },
        {
            id: 4,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/four-brown-wooden-chairs-2635038.jpg'
        },
        
    ]

const Home = (props) => {

    const project = useSelector(state => state.projectReducer);
    const product = useSelector(state => state.productReducer);
    const isGetProjectListSuccess = project.projectList.success;
    const projectList = isGetProjectListSuccess ? project.projectList.detail : null;
    const isGetHotProductListSuccess = product.hotProductList.success;
    const hotProductList = isGetHotProductListSuccess ? product.hotProductList : null;
    const dispatch = useDispatch();
    const [state, setState] = useState({
        projectStatus: 3,
        position: false,
        search: false
    });

    useEffect(() => {
        dispatch(projectAction.loadProjectList({project_sale_status: state.projectStatus}));
        dispatch(productAction.loadHotProductList({}));
    }, []);

    const onStatusClick = (e) => {
        dispatch(projectAction.loadProjectList({project_sale_status: parseInt(e.target.name)}))
        setState({
            projectStatus: parseInt(e.target.name)
        });
    }

    const handlerButtonPosition = () => {
        setState({...state, position: true})
    }

    const handlerButtonSearch = () => {
        setState({...state, search: true})
    }

    const onProjectGroupFilterChange = (value) => {
        if (value != null) {
            dispatch(productAction.loadHotProductList({list_product_type_id: `[${value}]`}));
        } else {
            dispatch(productAction.loadHotProductList({}));
        }
    }

    return (
        <div className="homePage">
            {/* block map  */}
            <div className="map">
                <div className="map_origin" style={{display : state.position || state.search ? "none" : ""}}>
                    <figure>
                        <MapHome />
                    </figure>
                    <LocationView HandlerPosition={handlerButtonPosition} HandlerSearch={handlerButtonSearch} />
                </div>
                <OnMapPoligon active={state}/>
            </div>

            {/*end block map  */}

            <CardSaleFlash headerBodyClassName="label_filter--heading" labelHeader="flash_sale" datas={["a", "iu", "e", "vl", "wa", "di"]} readmore timeLine />

            {/* block over  */}
            <CardOverView />
            {/* end block over  */}

            {/* project_list  */}
            {
                isGetProjectListSuccess &&
                <div className="project_list project_tab">
                    <div className="container container-sm container-md">
                        <HeadingFilter headerBodyClassName="project_list--heading" labelHeader="project_list" status onStatusClick={onStatusClick} projectStatus={state.projectStatus} />
                        <div className="row project_list--content project_tab--content">
                            {
                                (projectList && projectList.length > 0) ? projectList.map((item, index) => (
                                    index < 7 &&
                                    <ItemHomeProject
                                    key={index}
                                    data={item}
                                    projectStatus={state.projectStatus}
                                    bodyClassName={
                                        index === 0 ? "col col-12 col-sm-6 col-md-7 col-xl-7" :
                                        index === 1 ? "col col-12 col-sm-6 col-md-5 col-xl-5" :
                                        (index === 2 || index === 3 || index === 4) ? "col col-12 col-sm-4 col-md-4 col-xl-4" :
                                        "col col-12 col-sm-6 col-md-6 col-xl-6"
                                    } />
                                )) : <CardNoData />
                            }
                        </div>
                        <div className="text-center text-uppercase mt-3">
                            <Link to="/#" className="btn btn_purple ml-auto mr-auto">
                                <Trans>see_all</Trans>
                            </Link>
                        </div>
                    </div>
                </div>
            }
            {/* end project_list  */}

            {/* contact  */}
            <div className="container container-sm container-md">
                <div className="contact">
                    <div className="contact--left">
                        <div className="icon_phone">
                            <i className=" fas fa-phone-alt" />
                        </div>
                        <div className="text">
                            Liên hệ và tư vấn qua số điện thoại
                        </div>
                        <div className="phone">1900 - 123 -456</div>
                    </div>
                    <div className="contact--right">
                        <form>
                            <label className="label">Tư vấn miễn phí</label>
                            <div className="row">
                                <div className="col-12 col-sm-6 form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Họ tên"
                                    />
                                </div>
                                <div className="col-12 col-sm-6 form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="col-12 form-group">
                                    <textarea
                                        placeholder="Nội dung"
                                        className="form-control"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </form>
                        <div className="contact--footer">
                            <Link to="/" className="btn btn_green">
                                GỬI TIN NHẤN
                            </Link>
                            <span className="noti">
                                Cảm ơn, hẹn gặp lại trong hộp thư đến của
                                bạn!
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* end contact  */}

            {/* striking apartment  */}
            <CardHotProduct headerBodyClassName="label_filter--heading" labelHeader="hot_product" datas={hotProductList} options onFilterChange={onProjectGroupFilterChange} />
            {/* end striking apartment  */}

            {/* app_managerment  */}
            <div className="app_managerment">
                <div className="container container-sm container-md">
                    <h3 className="main_heading">
                        <span>Ứng dụng quản lý</span>
                    </h3>
                    <div className="app_managerment--content">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="app_managerment--left">
                                    <h4 className="title text-uppercase">
                                        APP real ESTATE
                                    </h4>
                                    <h5 className="sub-title">
                                        Ứng dụng quản lý của chúng tôi với
                                        các tính năng nổi bật về việc quản
                                        lý các thông tin bất động sản và kèm
                                        theo điều khiển các thiết bị thông
                                        minh trong nhà như :
                                    </h5>
                                    <ul className="features">
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="name">
                                                Quản lý dự án
                                            </p>
                                            <p className="des">
                                                Xây dựng các công trình bất
                                                động sản chất lượng, đạt
                                                chuẩn cao cấp và đáp ứng yêu
                                                cầu của bạn.
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="stores">
                                        <div className="item">
                                            <Link
                                                to="/#"
                                                className="heading"
                                            >
                                                <i className="icon fab fa-google-play" />
                                                <p className="text">
                                                    <span className="top">
                                                        Tải ứng dụng từ
                                                    </span>
                                                    <span className="bottom">
                                                        PLAY STORE
                                                    </span>
                                                </p>
                                            </Link>
                                            <figure className="qr_code">
                                                <img
                                                    src="./assets/images/qr_code.jpg"
                                                    alt="PLAY STORE"
                                                />
                                            </figure>
                                        </div>
                                        <div className="item">
                                            <Link
                                                to="/#"
                                                className="heading"
                                            >
                                                <i className="icon fab fa-apple" />
                                                <p className="text">
                                                    <span className="top">
                                                        Đã có sẳn trên
                                                    </span>
                                                    <span className="bottom">
                                                        APP STORE
                                                    </span>
                                                </p>
                                            </Link>
                                            <figure className="qr_code">
                                                <img
                                                    src="./assets/images/qr_code.jpg"
                                                    alt="PLAY STORE"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-flex align-items-end">
                                <figure className="app_managerment--right">
                                    <img
                                        className="w-100"
                                        src="./assets/images/icon_phone.png"
                                        alt="Ứng dụng quản lý"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end app_managerment  */}

            {/* Latest news  */}
            <CardNews data={news} />
            {/* End Latest news  */}
        </div>
    )
}

export default Home;
