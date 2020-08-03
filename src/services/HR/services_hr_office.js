import api from '../api';

export const hrOfficeService = {
    getOfficeDetail,
    getOfficeList,
    editOfficeInfo
}

function getOfficeDetail(token, id) {

    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'office_id': id };
    const url = api.getUrl(api.HR_OFFICE_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function getOfficeList(token, page, name) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { page, name, limit: api.LIMIT };
    const url = api.getUrl(api.HR_OFFICE, params)
    return api.handleRequest(url, requestOptions);
}

function editOfficeInfo(token, office_id, data, fileAvatar, fileUrl) {
    var name = data.name
    var short_name = data.short_name
    var address = data.address
    var status = data.active_flag
    var note = data.note
    var province_id = data.province_id
    var district_id = data.district_id
    var ward_id = data.ward_id
    var avatar = null
    if (fileUrl) {
        avatar = {
            'file_name': fileAvatar.name,
            'file_url': fileUrl,
            'file_size': fileAvatar.size,
            'file_type': fileAvatar.type,
        }
    }
    const body = { office_id, name, short_name, address, status, note, province_id, district_id, ward_id, avatar }
    if(avatar===null){
        delete body['avatar']
    }
    console.log("zzz",body)
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    const url = api.getUrl(api.HR_OFFICE_EDIT)
    return api.handleRequest(url, requestOptions);
}

