import { ToUTF8, FromUTF8 } from './utf.js'
var pako = require('pako');

const CONTENT_TYPE = 'application/json; charset=utf-8';
const CONTENT_MULITPART = 'multipart/form-data';
const MNV_ENCODE = 0;
const MNV_LANGUAGE = localStorage.getItem('language');

function Encode(data) {
    var text = JSON.stringify(data);
    var buff = new TextEncoder("utf-8").encode(text);
    var compressed = pako.deflate(buff);
    return compressed;
}

function Decode(base64Data) {
    var decompressed = pako.inflate(base64Data);
    // var code = String.fromCharCode.apply(null, decompressed)
    var code = handleCodePoints(decompressed)
    var text = decodeURIComponent(escape(code))
    var data = JSON.parse(text);
    return data;
}

function handleCodePoints(array) {
    var CHUNK_SIZE = 0x8000; // arbitrary number here, not too small, not too big
    var index = 0;
    var length = array.length;
    var result = '';
    var slice;
    while (index < length) {
        slice = array.slice(index, Math.min(index + CHUNK_SIZE, length)); // `Math.min` is not really necessary here I think
        result += String.fromCharCode.apply(null, slice);
        index += CHUNK_SIZE;
    }
    return result;
}

function getUrl(url, data = {}) {

    // console.log('url:',url);

    var strUrl = url;
    var first = true;
    for (var key in data) {
        if (data[key] && data[key] !== '') {
            strUrl = strUrl + (first ? '?' : '&') + (key + '=' + data[key]);
            first = false;
        }
    }
    // console.log('strUrl', strUrl);
    return strUrl;
}


function getHeader(token, content_type = CONTENT_TYPE, auth_type = 'Bearer') {
    let headers;
    if(token){
        headers = {
            'Authorization':auth_type + ' ' + token,
            'MNV-encode': MNV_ENCODE,
            'MNV-LANGUAGE': MNV_LANGUAGE,
        }
    }else{
        headers = {
            'MNV-encode': MNV_ENCODE,
            'MNV-LANGUAGE': MNV_LANGUAGE,
        }
    }

    // console.log('headers request: ',headers);

    if (content_type && content_type !== '') {
        headers['content_type'] = content_type
    }
    return headers;
}


function authHeader() {
    // return authorization header with basic auth credentials
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    } else {
        return {};
    }
}

function handleRequest(url, options) {
    options['url'] = url;

    if (options.hasOwnProperty("body")) {
        if (MNV_ENCODE === 1) {
            options['body'] = Encode(options['body']);
        }
        else {
            options['body'] = JSON.stringify(options['body'])
        }
    }

    if (MNV_ENCODE === 1) {
        return fetch(url, options).then(handleResponseBuffer);
    }
    return fetch(url, options).then(handleResponseText);
}

function handleRequestBinary(url, options) {
    options['url'] = url;

    if (MNV_ENCODE === 1) {
        return fetch(url, options).then(handleResponseBuffer);
    }
    return fetch(url, options).then(handleResponseText);
}

function handleResponseBuffer(response) {
    if (!response.ok) {
        var content = response.status + ' ' + response.statusText;
        return Promise.reject(content);
    }
    return response.arrayBuffer().then(buffer => {
        return handleData(response, Decode(buffer));
    });
}

function handleResponseText(response) {
    if (!response.ok) {
        var content = response.status + ' ' + response.statusText;
        return Promise.reject(content);
    }
    return response.json().then(data => {
        return handleData(response, data);
    });
}

function handleData(response, data) {
    if (data['success'] === false) {
        const error = data['detail'];
        console.log(error);
        return Promise.reject(error);
    }
    return data;
}

export {
    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,

    CONTENT_TYPE
}
