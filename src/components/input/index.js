import InputSelect from './InputSelect';
import InputDate from './InputDate';
import InputText from './InputText';
import InputTextArea from './InputTextArea';
import InputCheckBox from './InputCheckBox';
import InputFile from './InputFile';
import InputTextImage from './InputTextImage'
import InputTextSelect from './InputTextSelect'

function mapping(list, value) {
    if (list && list.length > 0) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].value == value) {
                return list[i];
            }
        }
        return list[0];
    }
    return null;
}

function mappingWithList(list, listValue, key) {
    if (list) {
        if (listValue != null && listValue.length > 0) {
            let listResult = []
            for (var i = 0; i < listValue.length; i++) {
                let value = listValue[i][key]
                for (var j = 0; j < list.length; j++) {
                    if (list[j].value == value) {
                        listResult.push(list[j])
                    }
                }
            }
            return listResult;
        }
        return null;
    }
    return null;
}

function convertMutilSelectedToList(listMutil, name) {
    if (listMutil) {
        let listResult = []
        for (var i = 0; i < listMutil.length; i++) {
            let data = {}
            data[name] = listMutil[i].value
            listResult.push(data)
        }
        return listResult;
    }
    return null;
}

function mappingListToSelectList(list, key, label) {
    if (list) {
        let result = [];
        for (var i = 0; i < list.length; i++) {
            result.push({
                'value': list[i][key],
                'label': label ? list[i][label] : list[i].name
            })
        }
        return result;
    }
    return null;
}

function getValueSelect(list, id) {
    if (list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].value == id) {
                return list[i].label
            }
        }
    }
    return null;
}

export {
    InputSelect,
    InputTextImage,
    InputTextSelect,
    InputDate,
    InputText,
    InputTextArea,
    InputCheckBox,
    InputFile,

    mappingListToSelectList,
    mappingWithList,
    getValueSelect,
    convertMutilSelectedToList,
    mapping
}
