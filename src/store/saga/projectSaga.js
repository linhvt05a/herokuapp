// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { projectService } from "../../services/index";
import { projectAction } from '../action/index';


export function* projectList(payload) {
    let { token, page, limit, search_name, search_alphabet, setting_type, distribution_type_id, project_id, status_id, province_id, district_id,
        distribution_name, open_sale_id, is_full_project, has_map_style, area_max, area_min, money_max, money_min, project_sale_status } = payload.params
    try {
        const response = yield projectService.list(token, page, limit, search_name, search_alphabet, setting_type, distribution_type_id, project_id, status_id, province_id, district_id,
            distribution_name, open_sale_id, is_full_project, has_map_style, area_max, area_min, money_max, money_min, project_sale_status);
        response.success ? yield put({ type: projectAction.PROJECT_LIST_SUCCESS, response }) : yield put({ type: projectAction.PROJECT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: projectAction.PROJECT_LIST_FAILURE, err });
    }
}


export function* projectListlWatcher() {
    yield takeLatest(projectAction.PROJECT_LIST_REQUEST, projectList);
}

export default function* rootSaga() {
    yield all([
        fork(projectListlWatcher),
    ]);
}