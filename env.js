export const NODE_ENV = 'development';

export const MODE_ENV = {
    local: {
        api: 'http://superapp.minerva.vn:9218'
    },
    development: {
        api: 'http://superapp.minerva.vn:9218'
    },
    production: {
        api: 'http://superapp.minerva.vn:9216'
    },
    cloudapi: 'https://cloudapi.minerva.vn'
};

const token = () => {
    if (localStorage.getItem('user')) {
        let token = JSON.parse(localStorage.getItem('user')).token;
        if (token) { return token }
    }
    return null
}; // Production
export const TOKEN = token()


