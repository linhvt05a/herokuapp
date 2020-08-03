import api from '../api';

export const infoSupplierServices = {
    getListSupplier,
    getTypeListSupplier,
    getSupplierDetail,
    getListSelectPosition,
    addNewSupplier
}
function getSupplierDetail(token,supplier_id,tab_include, ){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const params = {'supplier_id':supplier_id,'tab_include':tab_include};
    const url = api.getUrl( api.INFO_SUPPLIER_DETAIL,params )
    return api.handleRequest(url, requestOptions);
}

function getListSupplier(token, name, supplier_group_id, page){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const params = {"name": name,"supplier_group_id":supplier_group_id, "page":page , "limit": api.LIMIT};
    const url = api.getUrl( api.INFO_SUPPLIER_LIST,params )
    return api.handleRequest(url, requestOptions);
}

function getTypeListSupplier(token, name, page){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const params = {"name": name, "page":page , "limit": api.LIMIT};
    const url = api.getUrl( api.INFO_SUPPLIER_TYPE_LIST,params )
    return api.handleRequest(url, requestOptions);
}

function getListSelectPosition(token, office_id){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const params = {"office_id": office_id};
    const url = api.getUrl( api.SELECT_POSITION,params )
    return api.handleRequest(url, requestOptions);
}

function addNewSupplier(token, data, list_contact, documents){
    const body = {
        name:data.supplier_name,
        list_type_id:data.supplier_type ,
        legal_representative_id: data.supplier_legal_representative_id ,
        active_flag:data.supplier_active_flag ,
        tax_code:data.supplier_tax_code ,
        email:data.supplier_email ,
        address:data.supplier_address ,
        ward_id:data.supplier_ward_id ,
        district_id:data.supplier_district_id ,
        province_id:data.supplier_province_id   
}
// console.log('data post ',body)
// if(data.hasOwnProperty('avatar')){
//     body['avatar'] = data.avatar
// }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.INFO_SUPPLIER_ADD)
    return api.handleRequest(url, requestOptions);
}