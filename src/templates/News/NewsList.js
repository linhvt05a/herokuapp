import React, { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import TopBanner from "../../components/common/Header/TopBanner";
import { Categories, FilterProject, CommonMenu } from '../News/index'
import RegisterModal from "./RegisterModal";
import { Trans } from "react-i18next";
import Pagination from '../../components/common/Pagination';
import { LoadDataPaging } from '../../functions/Utils';
import { useDispatch, useSelector } from "react-redux";
import { newsAction } from "../../store/action/index";
import {CommonFilter} from '../News/index'
import moment from 'moment';
import CardNoData from '../../components/common/CardNoData'
const defaultValue = [{value:'', label:'Categories'}]

const News = (props) => {
    const location = useLocation()
    const[projectSelectList,setProjectList] = useState(null)
    const[nameSearch, setName] = useState('')
    const[cateID, setCateId] = useState('')
    const[dateFrom, setDateFrom] = useState('')
    const[dateTo, setDateTo] = useState('')
    const [navigate, setNavigate] = useState({})

    const news = useSelector(state => state.newsReducer);
    const newsListSuccess = news.newsList.success
    const newsList = newsListSuccess ? news.newsList.detail : null;
    const newRecord = newsListSuccess ? news.newsList : null

    const newsCates = useSelector(state => state.newsReducer);
    const newsCateSuccess = newsCates.newsCategories.success
    const newsCategories = newsCateSuccess ? newsCates.newsCategories.detail : null;

    const total_page = newRecord && newRecord != null ? newRecord.total_page : null
    const total_record =newRecord && newRecord != null ? newRecord.total_record: null
    const page = newRecord && newRecord != null ? newRecord.page: null
    const limit = 0
    const dispatch = useDispatch();
    
    const createData = (value, label) => {
        return { value, label }
    }

    useEffect(() => {
        if (newsCategories && newsCategories.length > 0) {
            let newData = [];
            newsCategories.map((item) => {
                newData.push(createData(item.category_id, item.category_name))
            })
            setProjectList(newData)
        }
    }, [newsCategories]);
   
    // const news_title = location.state.paramsSearch[0].nameSearch
    // const categoriesID = location.state.paramsSearch[0].cateID
    // const fromDate = location.state.paramsSearch[0].dateFrom
    // const toDate = location.state.paramsSearch[0].dateTo
   
   
    useEffect(() => {
        if(location.state && location.state !== null){
            const cateID = location.state.paramsSearch
            const nameSearch = location.state.titleNews
            const dateFrom = location.state.dateFrom
            const dateTo = location.state.dateTo
            dispatch(newsAction.LoadNewsList({cateID, nameSearch, dateFrom, dateTo}))
        }else{
            dispatch(newsAction.LoadNewsList({}))
        }
       
        dispatch(newsAction.newsCategories({}))
    }, []);

    const onPageChange = (value) =>{
        dispatch(newsAction.LoadNewsList({page: value, limit: 10}))
    }
    const handleChange = (e) =>{
        const value = e.target.value
        setName(value)
    }

    const changeSelect = (value) =>{
        setCateId(value)
    }

    const changeDateFrom = (value) =>{
        convertDateFrom(value)
    }

    const changeDateTo = (value) =>{
        convertDateTo(value)
    }

    const handleFilter = () =>{
        dispatch(newsAction.LoadNewsList({nameSearch, cateID, dateFrom, dateTo}))
    }

    function convertDateTo(value){
        const date = moment(value).format('YYYY-MM-DD')
        setDateTo(date)
        return date
    }
    function convertDateFrom(value){
        const date = moment(value).format('YYYY-MM-DD')
        setDateFrom(date)
        return date
    }

    const handleClick = (id) =>{
        setNavigate(id)
        dispatch(newsAction.LoadNewsList({category_id: id}))
    }
    
    return (
        <div className="news">
            <div className="container container-sm container-md">
                <h3 className="main_heading" style={{ marginTop: 85 }}>
                    <span><Trans>news_title</Trans></span>
                </h3>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                       <div className="row_content">
                            {newsList && newsList.length > 0 ? newsList.map((news, index) => <RowNews data={news} key={index}/>):
                                <CardNoData />
                            }
                        </div>
                        <Pagination data={LoadDataPaging(total_record, page, total_page, limit)} onChange ={onPageChange}/>
                    </div>
                    <div className="col-md-12 col-lg-4 col-xl-4 col-right_news mb-sm-3 mb-0">
                        <CommonMenu 
                            label="news_categories" 
                            dataMenu={newsCategories} 
                            className="options mb-4 bg_white" onClick = {handleClick}
                            navigate ={navigate}
                        />
                        <CommonFilter 
                            title="news_filter" 
                            placeholder="news_placeholder"
                            defaultValue = {cateID == "" ? defaultValue[0].label : ''}
                            datas ={projectSelectList} 
                            handleChange = {handleChange}
                            changeSelect = {changeSelect}
                            changeDateFrom ={changeDateFrom}
                            changeDateTo={changeDateTo}
                            handleFilter={handleFilter}
                        />
                    </div>
                </div>
            </div>
            <RegisterModal />
        </div>
    );
}

const RowNews = (props) => {
    const{data} = props
   
        return (
            <div className="card" >
                <Link to={"/NewsDetail/" + data.news_id} className="link"></Link>
                <div className="row ">
                    <div className="col-sm-12 col-md-5 col-xl-5 d-flex">
                        <div className="news__card--img">
                            <img src={data.news_avatar} />
                        </div>
                    </div>
                    <div className="col-md-7 col-xl-7">
                        <div className="news__card--content">
                            <Link  className="title" to={"/NewsDetail/" + data.news_id}>
                                {data.news_title}
                            </Link>
                            <div className="times">
                                Ngày đăng : {data.from_date}
                            </div>
                            <p className="contain">
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default News;
