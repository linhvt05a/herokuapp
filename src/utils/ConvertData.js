import { mappingListToSelectList } from "../components/input";

export {
    convertTaskTimeLineChart,
    convertProjectSettingTypeFilter
}
//get color status
function getColorWithStatus(status) {
    var color = "#6D6D6D"
    switch (status) {
        case 1: color = "#6D6D6D"//new
            break;
        case 2: color = "#E94C4C"//Pending
            break;
        case 3: color = "#219DFD" //In Progress
            break;
        case 4: color = "#F69524"  //Stop
            break;
        case 5: color = "#399B54" //Finished
            break;
        default: color = "#6D6D6D"
    }
    return color
}
//Convert data to timeline chart
function convertTaskTimeLineChart(data, parentId, param) {
    var tasks = []
    var links = []
    if (data) {
        for (var i = 0; i < data.length; i++) {
            var project = {}
            if (data[i][param + '_id']) {
                var id = parentId ? parentId * data[i][param + '_id'] : data[i][param + '_id']
                project['parent'] = parentId
                project['id'] = Date.now() + id
                project['text'] = data[i][param + '_name']
                project['start_date'] = data[i][param + '_date_from']
                project['end_date'] = data[i][param + '_date_to']
                project['open'] = false
                if (data[i][param + '_status']) {
                    project['color'] = getColorWithStatus(data[i][param + '_status'])
                }
                if (data[i][param + '_progress']) {
                    project['progress'] = data[i][param + '_progress']
                }
                tasks.push(project)
                var groups = { 'list_template': "template", 'list_group': "group", 'list_state': "state", 'list_price_task': "task", 'list_task': "task" }
                for (var key in groups) {
                    if (data[i][key] && data[i][key].length > 0) {
                        var template = convertTaskTimeLineChart(data[i][key], project['id'], groups[key])
                        if (template.data) {
                            for (var j = 0; j < template.data.length; j++) {
                                var link = {}
                                link['id'] = template.data[j]['id']
                                link['source'] = project['id']
                                link['target'] = template.data[j]['id']
                                link['type'] = '1'
                                links.push(link)
                                tasks.push(template.data[j])
                            }
                        }
                        if (template.links) {
                            for (var j = 0; j < template.links.length; j++) {
                                links.push(template.links[j])
                            }
                        }
                    }
                }
            }
        }
    }
    return {
        'data': tasks,
        'links': links
    }
}

function convertProjectSettingTypeFilter(list, active_id) {
    var result = []
    if (list) {
        var listData = mappingListToSelectList(list, 'project_setting_type_id', 'name')
        listData.unshift({ 'value': "", 'label': "All" })
        for (var i = 0; i < listData.length; i++) {
            var className = ""
            if (listData[i].value === active_id) {
                listData[i].active = true
            } else {
                delete listData[i].active
            }
            switch (listData[i].value) {
                case 1: className = "las la-square  m_text_a8c200"
                    break;
                case 2: className = "las la-square  m_text_f35e5e"
                    break;
                case 3: className = "las la-square m_text_212529"
                    break;
                case 4: className = "las la-square  m_text_fb9334"
                    break;
                case 5: className = "las la-square  m_text_e9c301"
                    break;
                default: className = "las la-square m_text"
                    break;
            }
            listData[i]['class'] = className
            result.push(listData[i])
        }
    }
    return result
}