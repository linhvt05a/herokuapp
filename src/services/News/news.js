import api from '../api';
import { TOKEN } from '../../functions/Utils';

export const newsService = {
  
    newsList(payload) {
        const {news_sort, nameSearch, cateID, dateFrom, dateTo, category_id, category_news_group} = payload.params
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = { 
            news_sort, news_title:nameSearch ,
            category_news_id: cateID ,
            from_date:dateFrom,
            to_date:dateTo, 
            category_id: category_id , 
            category_news_group
        };
        const url = api.getUrl(api.NEWS_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    newsDetail(payload){
        const {news_id} = payload.params
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {news_id};
        const url = api.getUrl(api.NEWS_DETAIL, params);
        return api.handleRequest(url, requestOptions);
    },

    newsHotList (payload) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {payload };
        const url = api.getUrl(api.HOT_NEWS, params);
        return api.handleRequest(url, requestOptions);
    },

    newsCategories (payload) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {payload };
        const url = api.getUrl(api.NEWS_CATEGORIES, params);
        return api.handleRequest(url, requestOptions); 
    },

    newsCommentAdd (payload){
        const {news_id, comment, parent} = payload.params
        const body = {news_id, comment, parent}
        const requestOptions = {
            method: 'POST',
            headers: api.getHeader(TOKEN),
            body:body 
        };
        const url = api.getUrl(api.NEWS_ADD_COMMENT);
        return api.handleRequest(url, requestOptions);
    },
    newsCommentList (payload){
        const {news_id} = payload.params
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {news_id };
        const url = api.getUrl(api.NEWS_COMMENT_LIST, params);
        return api.handleRequest(url, requestOptions);   
    }
};
