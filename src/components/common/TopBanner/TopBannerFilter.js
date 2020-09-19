import React, { useEffect } from 'react';
import { Select } from 'antd';
import { SelectCustom } from "../../base"
import { useDispatch, useSelector } from 'react-redux';
import { transactionAction } from "../../../store/action";
import { TOKEN, translate } from '../../../functions/Utils';
import { useTranslation } from 'react-i18next';

const TopBannerFilter = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation()
    let { dataImg, project_id } = props;

    const [dataProjectList, setDataProjectList] = React.useState();
    const [dataArea, setDataArea] = React.useState();
    const [dataBlock, setDataBlock] = React.useState();
    const [dataProjectType, setDataProjectType] = React.useState();
    const [filter, setFilter] = React.useState({
        project_id: project_id > 0 ? parseInt(project_id) : null,
        area_id: null,
        block_id: null,
        type_id: null
    });
    const project = useSelector(state => state.transactionReducer)
    const trans = useSelector(state => state.transactionReducer)
    const { projectList, projectType } = project;
    const { transacAreaNameList, transacBlockNameList } = trans;
    const createDataSelect = (value, label) => {
        return { value, label }
    };

    const callApiArea = ({ project_id }) => {
        dispatch(transactionAction.transLoadAreaNameList({ token: TOKEN, project_id }))
    }
    const callApiBlock = ({ project_id, area_id }) => {
        dispatch(transactionAction.transLoadBlockNameList({ token: TOKEN, project_id, area_id }))
    }

    useEffect(() => {
        dispatch(transactionAction.getProjectList({ token: TOKEN }));
        dispatch(transactionAction.getProjectType({ token: TOKEN }));
        if (project_id) {
            callApiArea({ project_id });
            callApiBlock({ project_id })
        }
    }, [])
    useEffect(() => {
        if (projectList.length > 0) {
            let newProject = []
            for (let i = 0; i < projectList.length; i++) {
                let newProjectName = projectList[i]
                newProject.push(createDataSelect(newProjectName.project_id, newProjectName.project_name))
            }
            setDataProjectList(newProject)
        }
    }, [projectList])

    useEffect(() => {
        if (projectType.length > 0) {
            let newProject = []
            for (let i = 0; i < projectType.length; i++) {
                let item = projectType[i]
                if (i == 0) {
                    newProject.push(createDataSelect(0, translate("project_all", t)))
                }
                newProject.push(createDataSelect(item.id, item.name))
            }
            setDataProjectType(newProject)
        }
    }, [projectType])
    useEffect(() => {
        let data = transacAreaNameList;
        if (data.length > 0) {
            let newData = [];
            for (let i = 0; i < data.length; i++) {
                if (i == 0) {
                    newData.push(createDataSelect(0, translate("project_all", t)))
                }
                newData.push(createDataSelect(data[i].area_id, data[i].area_name))
            }
            setDataArea(newData)
        }
    }, [transacAreaNameList])
    useEffect(() => {
        let data = transacBlockNameList;
        if (data.length > 0) {
            let newData = [];
            for (let i = 0; i < data.length; i++) {
                if (i == 0) {
                    newData.push(createDataSelect(0, translate("project_all", t)))
                }
                newData.push(createDataSelect(data[i].block_id, data[i].block_name))
            }
            setDataBlock(newData)
        }
    }, [transacBlockNameList])

    const onChangeProject = (value) => {
        props.setProjectId(value);
        callApiArea({ project_id: value });
        setFilter({
            ...filter,
            area_id: null,
            block_id: null,
            type_id: null
        })
        props.onChangeFilter({ project_id: value });
    }

    const onChangeArea = (value) => {
        setFilter({ ...filter, area_id: value });
        callApiBlock({ project_id: project_id, area_id: value })
        props.onChangeFilter({ project_id: project_id, area_id: value });
    }

    const onChangeBlock = (value) => {
        setFilter({ ...filter, block_id: value });
        props.onChangeFilter({ project_id: project_id, area_id: filter.area_id, block_id: value });
    }

    const onChangeCategory = (value) => {
        setFilter({ ...filter, type_id: value });
        props.onChangeFilter({ project_id: project_id, area_id: filter.area_id, block_id: filter.block_id, project_status_id: value });
    }
    // console.log(dataProjectArea)
    return (
        <div className="top_banner--detail d-flex align-items-end" style={{ backgroundImage: "url(../images/VAP-tt-nha-dat-tang.jpg)" }}>
            <div className="container container-sm container-md">
                <div className="project_detail--filter">
                    <div className="row">
                        <div className="col-3">
                            <SelectCustom
                                datas={dataProjectList}
                                value={project_id}
                                onChange={onChangeProject}
                                classNameSelect="form-control hasIcon icon_project"
                            />
                        </div>
                        <div className="col-3">
                            <SelectCustom
                                placeholder="Chọn khu"
                                datas={dataArea}
                                value={filter.area_id}
                                isClear={filter.area_id >= 0 ? false : true}
                                onChange={onChangeArea}
                                classNameSelect="form-control hasIcon icon_project"
                            />

                        </div>
                        <div className="col-3">
                            <SelectCustom
                                placeholder="Chọn khối/lô"
                                datas={dataBlock}
                                value={filter.block_id}
                                isClear={filter.block_id >= 0 ? false : true}
                                onChange={onChangeBlock}
                                classNameSelect="form-control hasIcon icon_project"
                            />
                        </div>
                        <div className="col-3">
                            <SelectCustom
                                placeholder="Loại sản phẩm"
                                datas={dataProjectType}
                                value={filter.type_id}
                                isClear={filter.type_id >= 0 ? false : true}
                                onChange={onChangeCategory}
                                classNameSelect="form-control hasIcon icon_project"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBannerFilter;
