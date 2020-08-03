import api from '../api';

export const imageService = {
    uploadFile
}

function uploadFile(file) {
    let file_name = file.name
    let file_size = file.size
    let server_file_name = Date.now() + file_name
    let server_url = api.CLOUD_SERVER_PATH + server_file_name

    const headers = {
        'Content-Length': file_size,
        'access-key': api.CLOUD_SERVER_ACCESS_KEY,
        'secret-key': api.CLOUD_SERVER_SECRET_KEY,
    }
    const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: file
    };

    console.log(headers,file)
    console.log(server_url);
    return fetch(server_url, requestOptions).then(handleResponseText)
}

function handleResponseText(response) {
    console.log(response)
    if (!response.ok) {
        var content = response.status + ' ' + response.statusText;
        return Promise.reject(content);
    }
    var url = response['url'].substring(response['url'].indexOf('cdn/'),response['url'].length)
    return url
}
