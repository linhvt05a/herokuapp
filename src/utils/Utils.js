import React from 'react';
import { Trans } from 'react-i18next';
import * as moment from 'moment';

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
    checkBeforeTime
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
        return moment(date, 'YYYY_MM_DD').format('yyyy-MM-dd')
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
        for (var i = 0;i < list.length;i++) {
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

//Kiểm tra khác nhau giữa 2 list, và key đặt biệt để kiểm tra nếu list đầu tiên đã có thì sẽ là khác (dùng cho Add)
function differentList(firstList, nextList, keyDifferentInFirst) {
    if (firstList.length == nextList.length) {
        for (var i = 0;i < firstList.length;i++) {
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
        for (var i = 0;i < list.length;i++) {
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
        for (let i = 0;i < number.length;i++) {
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
    if (number !== null) {
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

function translate(text) {
    return <Trans>{text}</Trans>
}

function converAddress(address = []) {
    let _city = "";
    let _district = "";
    let _ward = "";
    let _address
    let index = 0;
    let isStart = address.length;
    for (let i = address.length;i > 0;i--) {
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