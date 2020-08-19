import {
    getHeader, getUrl, authHeader, handleRequest, handleRequestBinary
} from './../apis/lib.js';
import * as contentType from '../constants/contentHtml'

import { CLOUD_SERVER, API_ENDPOINT } from './../constants';

export default {
    cloudServerPath: CLOUD_SERVER.CLOUD_SERVER_PATH,
    cloudServerAccessKey: CLOUD_SERVER.CLOUD_SERVER_ACCESS_KEY,
    cloudServerSecretKey: CLOUD_SERVER.CLOUD_SERVER_SECRET_KEY,
    LIMIT: 10,

    //EXAMPLE
    // EXAMPLE_LIST: "https://pokeapi.co/api/v2/pokemon/ditto",
    exampleList: API_ENDPOINT,


    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,

    contentType
};