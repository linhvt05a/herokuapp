import api from '../api';

export const userService = {
    login,
    logout,
    changePass,

    getUserInfo,
    editUserInfo,
    editUserAvatar,

    getLanguageList,
    changeLanguage
};

//============================================================
function getUserInfo(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const url = api.getUrl(api.USER_INFO)
    return api.handleRequest(url, requestOptions);
}

function editUserInfo(token, nick_name) {
    const body = { nick_name }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.EDIT_USER_INFO)
    return api.handleRequest(url, requestOptions);
}

function editUserAvatar(token, file, file_url) {
    var avatar = {
        'file_name': file.name,
        'file_url': file_url,
        'file_size': file.size,
        'file_type': file.type,
    }
    const body = { avatar }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.EDIT_USER_INFO)
    return api.handleRequest(url, requestOptions);
}

//============================================================
function getLanguageList(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const url = api.getUrl(api.LANGUAGE_LIST)
    return api.handleRequest(url, requestOptions);
}

function changeLanguage(token, language_id) {
    let body = {
        "language_id": language_id
    }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.LANGUAGE_CHANGE)
    return api.handleRequest(url, requestOptions);
}

//============================================================
function changePass(token, current_password, new_password, new_password_repeat) {
    let body = { current_password, new_password, new_password_repeat }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.PASSWORD_CHANGE)
    return api.handleRequest(url, requestOptions);
}

function login(username, password) {
    const token = btoa(username + ":" + password);
    const body = { username, password }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token, api.CONTENT_TYPE, 'Basic'),
        body: body
    };

    const url = api.getUrl(api.LOGIN)
    return api.handleRequest(url, requestOptions)
        .then(data => {
            if (data) {
                // store user details and basic auth credentials in local storage
                localStorage.setItem('user', JSON.stringify(data['detail']));
            }
            return data;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


