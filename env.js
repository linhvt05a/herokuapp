export const NODE_ENV = 'dev';

const token = () => {
    if (localStorage.getItem('user')) {
        let token = JSON.parse(localStorage.getItem('user')).token;
        if (token) { return token }
    }
    return null
}; // Production
export const TOKEN = token()


