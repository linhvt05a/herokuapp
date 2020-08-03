import api from '../api';

export const locationService = {
    getRegion,
    getProvicesFilterRegion,
    getProvince,
    getDistrict,
    getWard
}

function getRegion(token, region_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'is_list':true,'region_id':region_id};
    const url = api.getUrl(api.LOCATION_REGION, params)
    return api.handleRequest(url, requestOptions);
}
function getProvicesFilterRegion(token,region_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'is_list':true,'region_id':region_id};
    const url = api.getUrl(api.LOCATION_REGION, params)
    return api.handleRequest(url, requestOptions);
}
function getProvince(token, region_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'is_list':true, 'region_id':region_id};
    const url = api.getUrl(api.LOCATION_PROVINCE, params)
    return api.handleRequest(url, requestOptions);
}

function getDistrict(token, province_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'province_id':province_id};
    const url = api.getUrl(api.LOCATION_DISTRICT, params)
    return api.handleRequest(url, requestOptions);
}

function getWard(token,district_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'district_id':district_id};
    const url = api.getUrl(api.LOCATION_WARD, params)
    return api.handleRequest(url, requestOptions);
}

