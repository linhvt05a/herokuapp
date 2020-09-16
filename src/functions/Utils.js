import React from 'react';
import { Trans, useTranslation, withTranslation } from 'react-i18next';
import * as moment from 'moment';
import "moment/locale/vi"
import "moment/locale/en-au"
import vi_VN from "antd/es/date-picker/locale/vi_VN";
import en_US from "antd/es/date-picker/locale/en_US"

export {
    differentList,
    deleteModelInList,
    copyList,
    convertDateShow,
    getTextDefault,
    sortlayout,
    convertListToArrayId,
    isInt,
    getNumberPercentRounding,
    convertDateDDMMYYYY,
    convertDateYYYYMMDD,
    convertAcreagetoInt,
    isProductType,
    isProductStatus,
    isProductColor,
    formatCurrency,
    translate,
    converAddress,
    convertDateHHmm,
    checkBeforeTime,
    LoadDataPaging
}

const DATEFORMAT = {
    DDMMYY_HHMM: "dd/MM/yyyy HH:mm",
    DDMMYY_HHMM_NEW: "dd/MM/yyyy '-' HH:mm",
    DDMMYY_HHMMSS: "dd/MM/yyyy HH:mm:ss",
    YYMMDD_HHMM: "yyyy/MM/dd HH:mm",
    HHMM_DDMMYY: "HH:mm dd/MM/yyyy",
    YYMMDD: "yyyy/MM/dd",
    DDMMYYYY: "dd/MM/yyyy",
    DDMM: "dd/MM",
    DATETIME_API: "dd/MM/yyyy HH:mm:ss",
    TIME_API: "HH:mm:ss",
    HHMM: "HH:mm",
    HHMMAA: "hh:mm aa",
    HHMMAA_24: "HH:mm aa",
    MMSS: "mm:ss",
    YYMMDD_HHMM_AA: "dd/MM/yyyy hh:mm aa",
    YYMMDD_HHMMSS: "yyyy/MM/dd HH:mm:ss",
    YY_MM_DD_HHMMSS: "yyyy-MM-dd HH:mm:ss",
    DATE_TIME_API_WAITER: "yyyy/MM/dd HH:mm:ss",
    DDMMYY: "dd/MM/yy",
    YYYY_MM_DD: "yyyy-MM-dd",
    DD_MM_YYYY: "dd-MM-yyyy",
    DDD_DD_MM: "EEEE dd/MM",
    TIMESTAMP_API: "yyyy-MM-dd'T'HH:mm:ss",
    TIMESTAMP_API3: "yyyy-MM-dd'T'HH:mm:ss.SSS",
    TIMESTAMP_API6: "yyyy-MM-dd'T'HH:mm:ss.SSSSSS"
}

function isInt(n) {
    return Number(n) === n && n % 1 === 0;
}

function convertDateShow(date) {
    try {
        return moment(date, 'YYYY/MM/DD').format('DD/MM/YYYY')
    } catch (e) {
        return date
    }
}


function convertDateDDMMYYYY(date) {
    try {
        return moment(date, "YYYY-MM-DD[T]HH:mm:ss").format('DD-MM-YYYY')
    } catch (e) {
        return date
    }
}

function convertDateYYYYMMDD(date) {
    try {
        return moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD')
    } catch (e) {
        return date
    }
}

function convertDateHHmm(date) {
    try {
        return moment(date, "YYYY-MM-DD[T]HH:mm:ss").format('HH:mm')
    } catch (e) {
        return date
    }
}

function checkBeforeTime(date) {
    try {
        return moment().isBefore(date)
    } catch (e) {
        return false
    }
}

function getTextDefault(value) {
    if (value) {
        return value
    }
    return '-'
}

//Copy list to new list
function copyList(list) {
    var result = []
    if (list) {
        for (var i = 0; i < list.length; i++) {
            var model = {}
            var data = list[i]
            for (var key in data) {
                model[key] = data[key]
            }
            result.push(model)
        }
    }
    return result
}

// Load data pagination
function LoadDataPaging(total_record, page, total_page, limit) {
    var list = {
        total_record: total_record,
        page: page,
        total_page: total_page,
        limit: limit,
    }
    if (total_record === undefined || page === undefined || total_page === undefined || limit === undefined) {
        return null;
    } else if (total_record < 0 || page < 0 || total_page < 0 || limit < 0) {
        return null;
    } else { return list; }
}

//Kiểm tra khác nhau giữa 2 list, và key đặt biệt để kiểm tra nếu list đầu tiên đã có thì sẽ là khác (dùng cho Add)
function differentList(firstList, nextList, keyDifferentInFirst) {
    if (firstList.length == nextList.length) {
        for (var i = 0; i < firstList.length; i++) {
            var data = firstList[i]
            var model = nextList[i]
            for (var key in data) {
                if (key === keyDifferentInFirst) {
                    return true
                }
                if (model[key] !== data[key]) {
                    return true
                }
            }
        }
        return false
    }
    return true
}

//Delete model in list with key and value
function deleteModelInList(list, key, value) {
    if (!list) return null
    return list.filter(model => model[key] != value)
}

function convertListToArrayId(list, keyId) {
    var result = []
    if (list) {
        for (var i = 0; i < list.length; i++) {
            result.push(list[i][keyId])
        }
    }
    return result
}

//Sort layout
function sortlayout(item, datas, currentList) {
    let myData = [].concat(datas)
    let model = currentList.find(tab => tab.label === item.label)
    if (item.sort) {
        if (model.sort === "ascending") {
            model.sort = "descending";
        } else {
            model.sort = "ascending";
        }
    } else {
        currentList.forEach(tab => tab.sort = "")
        model.sort = "ascending";
    }
    let keySort = "";
    if (model.label) {
        keySort = model.keySort
    }
    if (model.sort == "ascending") {
        myData.sort((a, b) => a[keySort] < b[keySort] ? 1 : -1)
    } else if (model.sort == "descending") {
        myData.sort((a, b) => a[keySort] > b[keySort] ? 1 : -1)
    }
    return myData
}

function getNumberPercentRounding(number) {
    if (!number) {
        return 0
    }
    var value = number % 10
    var count = value >= 5 ? 10 : 0
    return number - value + count
}

function convertAcreagetoInt(number) {
    let isStart = -1;
    let isEnd = -2;
    let num = number;
    let N = /\D/gi;
    if (typeof number == "string") {
        for (let i = 0; i < number.length; i++) {
            if (N.test(number[i]) === false && isStart === -1) {
                isStart = i;
            }
            if (N.test(number[i]) === true && isStart !== -1 && number[i] !== ".") {
                isEnd = i;
                break
            }
        }
        num = number.slice(isStart, isEnd)
    }
    return num
}

function isProductType(number) {
    switch (number) {
        case 1: return 'Apartment';
        case 2: return 'Duplex';
        case 3: return 'Officeltel';
        case 4: return "Studio";
        case 5: return "Penthouse";
        case 6: return "Shopshoue"
        case 7: return "Villa";
        case 8: return "Single Villa";
        default: return "Duplex Villa";
    }
}

function isProductStatus(number) {
    switch (number) {
        case 6: return 'PROJECT_SALE_STATUS_RENT';
        case 2: return 'PRODUCT_SALES_STATUS_NOT_SOLD_YET';
        case 3: return 'PRODUCT_SALES_STATUS_SELLING';
        case 4: return "PROJECT_SALE_STATUS_BOOKING";
        case 5: return "PROJECT_SALE_STATUS_SOLD";
        default: return "PROJECT_SALE_STATUS_NEW";
    }
}

function isProductColor(number) {
    switch (number) {
        case 3: return '#399b54';
        case 4: return "#f1ab21";
        default: return "#e94c4c";
    }
}

function formatCurrency(number) {
    if (number !== null && number !== undefined) {
        var n = null;
        if (Number.isInteger(number)) {
            n = JSON.stringify(number).split('').reverse().join("");
        }
        else {
            n = number.split(' ').reverse().join("");
        }
        var n2 = n.replace(/\d\d\d(?!$)/g, "$&.");
        return n2.split('').reverse().join('') + ",00 ";
    } else {
        return 0;

    }
}
export const formatDate = (date, type) => {
    return moment(date).format(type)
}
export const getLocalStore = (text, remove) => {
    let data = localStorage.getItem(text);
    if (data) {
        if (remove) { localStorage.removeItem(text) }
        return JSON.parse(data);
    }
    return false
}
const translate = (text, trans = false) => {
    if (trans) {
        return trans(text)
    }
    else {
        return <Trans>{text}</Trans>
    }
}
function convertUnsignedString(s) {
    let str = s;
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}
export function validatoInputCurrency(value) {
    let format = /[a-zA-z !@#$%^&*()_+\-=\[\]{};':,"\\|<>\/?]/;
    return typeof value == "string" ? format.test(convertUnsignedString(value)) == false : true
}
export const validateErrorNumber = (value) => {
    if (value == "") {
        return 0
    }
    else
        if (value.search(",00") !== -1) {
            return value.replace(",00", "");
        }

    return value
}
export const convertStringToFloat = (value, noparse = false) => {
    let text = value;
    if (typeof text == "string") {
        if (text.indexOf(0) == 0) {
            text = text.slice(1, text.length)
        }
        let number = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] == ",") {
                number = number + "."
            }
            else
                if (text[i] != ".") {
                    number = number + text[i]
                }
        }
        return number == "" ? "" : noparse ? number : parseFloat(number)
    }
    else {
        return text ? parseFloat(text) : 0
    }
}

export const convertFloatToString = (value) => {
    if (value) {
        let newText = ""
        let text = value;
        let _add = 0;
        let isExit = true;
        if (typeof value == "string") {
            text = value.split('').reverse().join("");
        }
        else {
            text = JSON.stringify(value).split('').reverse().join("");
        }
        if (text.indexOf(".") != -1) {
            isExit = false;
        }
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ".") {
                newText = newText + ","
                _add = 0;
                isExit = true
            }
            else
                if ((_add + 1) % 3 == 0) {
                    if (i <= text.length - 2 && isExit) {
                        if (text[i] >= 0 && text[i + 1] !== "-") {
                            newText = newText + text[i] + ".";
                            _add = 0
                        }
                        else {
                            newText = newText + text[i]
                        }
                    }
                    else {
                        newText = newText + text[i]
                    }
                }
                else {
                    _add = _add + 1
                    newText = newText + text[i]
                }
        }

        return newText.split('').reverse().join('')
    }
    return 0;
}

function converAddress(address = []) {
    let _city = "";
    let _district = "";
    let _ward = "";
    let _address
    let index = 0;
    let isStart = address.length;
    for (let i = address.length; i > 0; i--) {
        if (address[i] == ",") {

            if (index === 2) {
                _ward = address.slice(i + 1, isStart);
                _address = address.slice(0, i);
                break
            }
            if (index === 1) {
                _district = address.slice(i + 1, isStart);
                index = 2;
                isStart = i;
            }
            if (index === 0) {
                _city = address.slice(i + 1, isStart);
                index = 1;
                isStart = i;
            }
        }
    }
    return { _city, _district, _ward, _address }
}

export const datePichkerLocation = () => {
    let language = localStorage.getItem("language");
    switch (language) {
        case "vi":
            return vi_VN;
        case "en":
            return en_US
    }
}

const token = () => {
    if (getLocalStore('user')) {
        let token = getLocalStore('user').token;
        if (token) { return token }
    }
    return null
}; // Production
export const TOKEN = token()

export const langStorage =  {
    get : localStorage.getItem('language'),
    remove : localStorage.removeItem('language'),
}