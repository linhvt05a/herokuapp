import {
    getHeader, getUrl, authHeader, handleRequest, handleRequestBinary,
    CONTENT_TYPE
} from './lib.js';


export default {
    CLOUD_SERVER_PATH: '/cdn/sunnyworld-workflow-clone/',
    CLOUD_SERVER_ACCESS_KEY: 'sunnyworld-workflow-clone',
    CLOUD_SERVER_SECRET_KEY: 'xv*9!29{s({Jk&{B',
    LIMIT: 10,

    //EXAMPLE
    // EXAMPLE_LIST: "https://pokeapi.co/api/v2/pokemon/ditto",
    EXAMPLE_LIST: "/api/be/v1/project/",


    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,

    CONTENT_TYPE
};

