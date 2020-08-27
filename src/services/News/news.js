import api from '../api';
import { TOKEN } from '../../../env';
import { newsDetailAction } from '../../store/action';

export const newsService = {
    newsList(payload) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {payload };
        const url = api.getUrl(api.NEWS_LIST, params);
        console.log(url);
        return api.handleRequest(url, requestOptions);
    },

    newsDetail(payload){
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {payload };
        const url = api.getUrl(api.NEWS_DETAIL, params);
        return api.handleRequest(url, requestOptions);
    },

    hotNewsList (payload) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };

        const params = {payload };
        const url = api.getUrl(api.HOT_NEWS, params);
        return api.handleRequest(url, requestOptions);
    }
};
