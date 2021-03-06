import api from '../api';
import { TOKEN } from '../../functions/Utils';

export const projectService = {

    list(token, page, limit, search_name, search_alphabet, setting_type, distribution_type_id, project_id, status_id, province_id, district_id,
        distribution_name, open_sale_id, is_full_project, has_map_style, area_max, area_min, money_max, money_min, project_sale_status) {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = {
            page, limit, search_name, search_alphabet, setting_type, distribution_type_id, project_id, status_id, province_id, district_id,
            distribution_name, open_sale_id, is_full_project, has_map_style, area_max, area_min, money_max, money_min, project_sale_status
        };
        const url = api.getUrl(api.PROJECT_LIST, params);
        return api.handleRequest(url, requestOptions);
    },

    projectSelect() {
        const requestOptions = {
            method: 'GET',
            headers: api.getHeader(TOKEN)
        };
        const params = {};
        const url = api.getUrl(api.PROJECT_SELECT, params);
        return api.handleRequest(url, requestOptions);
    }
};


