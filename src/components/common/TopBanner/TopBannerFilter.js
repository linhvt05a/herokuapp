import React, { useEffect } from 'react';
import { Select } from 'antd';
import { SelectCustom } from "../../base"
import { useDispatch, useSelector } from 'react-redux';
import { transactionAction } from "../../../store/action";
import { TOKEN, translate, createDataSelect } from '../../../functions/Utils';
import { useTranslation } from 'react-i18next';

const TopBannerFilter = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation()
    let { dataImg, project_id, noStatus, status, dataDefault, setAreaName, setBlockName } = props;

    const [dataProjectList, setDataProjectList] = React.useState();
    const [dataArea, setDataArea] = React.useState();
    const [dataBlock, setDataBlock] = React.useState();
    const [dataProjectType, setDataProjectType] = React.useState();
    const [filter, setFilter] = React.useState({
        project_id: project_id > 0 ? parseInt(project_id) : null,
        area_id: null,
        block_id: null,
        type_id: null,
        callDefault: true,
    });
    const project = useSelector(state => state.transactionReducer)
    const trans = useSelector(state => state.transactionReducer)
    const { projectList, projectType } = project;
    const { transacAreaNameList, transacBlockNameList } = trans;

    const callApiArea = ({ project_id }) => {

        callApiBlock({ project_id }, dispatch(transactionAction.transLoadAreaNameList({ token: TOKEN, project_id })))
    }
    const callApiBlock = ({ project_id, area_id }) => {
        dispatch(transactionAction.transLoadBlockNameList({ token: TOKEN, project_id, area_id }))
    }

    useEffect(() => {
        dispatch(transactionAction.getProjectList({ token: TOKEN, status }));
        dispatch(transactionAction.getProjectType({ token: TOKEN }));
        if (project_id) {
            callApiArea({ project_id });
        }
    }, [])
    //project
    useEffect(() => {
        if (projectList.length > 0) {
            let newProject = []
            for (let i = 0;i < projectList.length;i++) {
                let newProjectName = projectList[i]
                newProject.push(createDataSelect(newProjectName.project_id, newProjectName.project_name))
            }
            setDataProjectList(newProject)
        }
    }, [projectList])
    //status
    useEffect(() => {
        if (projectType.length > 0) {
            let newProject = []
            for (let i = 0;i < projectType.length;i++) {
                let item = projectType[i]
                if (i == 0) {
                    newProject.push(createDataSelect(0, translate("project_all", t)))
                }
                newProject.push(createDataSelect(item.id, item.name))
            }
            setDataProjectType(newProject)
        }
    }, [projectType])
    //area
    useEffect(() => {
        let data = transacAreaNameList;
        if (data.length > 0) {
            let newData = [];
            for (let i = 0;i < data.length;i++) {
                if (i == 0 && !dataDefault) {
                    newData.push(createDataSelect(0, translate("project_all", t)))
                }
                newData.push(createDataSelect(data[i].area_id, data[i].area_name))
            }
            if (dataDefault) {
                setFilter({ ...filter, area_id: newData[0].value })
                if (setAreaName) {
                    setAreaName(data[0].area_name)
                }
            }
            setDataArea(newData)
        }
    }, [transacAreaNameList])
    //block
    useEffect(() => {
        let data = transacBlockNameList;
        if (data.length > 0) {
            let newData = [];
            let callDefualt = true
            for (let i = 0;i < data.length;i++) {
                if (i == 0 && !dataDefault) {
                    newData.push(createDataSelect(0, translate("project_all", t)))
                }
                newData.push(createDataSelect(data[i].block_id, data[i].block_name))
            }
            if (dataDefault) {
                if (filter.callDefault) {
                    callDefualt = false
                    props.onChangeFilter({ project_id: project_id, project_status_id: filter.type_id, block_id: transacBlockNameList[0].block_id, area_id: filter.area_id });
                }
                if (setBlockName) {
                    setBlockName(data[0].block_name)
                }
                setFilter({ ...filter, block_id: newData[0].value })
            }
            setDataBlock(newData)
        }
    }, [transacBlockNameList])

    // useEffect(() => {
    //     if (dataDefault && filter.area_id && filter.block_id) {
    //         let callDefualt = true
    //         if (filter.callDefault) {
    //             callDefualt = false
    //             props.onChangeFilter({ project_id: project_id, project_status_id: filter.type_id, block_id: filter.block_id, area_id: filter.area_id });
    //         }
    //         setFilter({ ...filter, callDefault: callDefualt })
    //     }
    // }, [filter.area_id])

    const onChangeProject = (value) => {
        props.setProjectId(value);
        callApiArea({ project_id: value });
        setFilter({
            ...filter,
            area_id: null,
            block_id: null,
            type_id: null,
            callDefault: true
        })
        if (!dataDefault) {
            props.onChangeFilter({ project_id: value, project_status_id: filter.type_id, block_id: filter.block_id, area_id: filter.area_id });
        }
    }

    const onChangeArea = (value) => {
        setFilter({ ...filter, area_id: value, block_id: null, callDefault: true });
        if (setAreaName) {
            let name = dataArea.find(e => e.value == value)
            if (name) {
                setAreaName(name.label)
            }
        }
        callApiBlock({ project_id: project_id, area_id: value, })
        if (!dataDefault) {
            props.onChangeFilter({ project_id: project_id, area_id: value, project_status_id: filter.type_id, block_id: filter.block_id });
        }
    }

    const onChangeBlock = (value) => {
        setFilter({ ...filter, block_id: value });
        if (setBlockName) {
            let name = dataBlock.find(e => e.value == value)
            if (name) {
                setBlockName(name.label)
            }
        }
        props.onChangeFilter({ project_id: project_id, area_id: filter.area_id, block_id: value, project_status_id: filter.type_id });
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
                        <SelectCustom
                            className={noStatus ? "col-4" : "col-3"}
                            datas={dataProjectList}
                            value={project_id}
                            onChange={onChangeProject}
                            classNameSelect="form-control hasIcon icon_project"
                        />
                        <SelectCustom
                            className={noStatus ? "col-4" : "col-3"}
                            placeholder="Chọn khu"
                            datas={dataArea}
                            value={filter.area_id}
                            isClear={filter.area_id >= 0 ? false : true}
                            onChange={onChangeArea}
                            classNameSelect="form-control hasIcon icon_area"
                        />
                        <SelectCustom
                            className={noStatus ? "col-4" : "col-3"}
                            placeholder="Chọn khối/lô"
                            datas={dataBlock}
                            value={filter.block_id}
                            isClear={filter.block_id >= 0 ? false : true}
                            onChange={onChangeBlock}
                            classNameSelect="form-control hasIcon icon_block"
                        />
                        {noStatus ? null :
                            <SelectCustom
                                className="col-3"
                                placeholder="Loại sản phẩm"
                                datas={dataProjectType}
                                value={filter.type_id}
                                isClear={filter.type_id >= 0 ? false : true}
                                onChange={onChangeCategory}
                                classNameSelect="form-control hasIcon icon_product"
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBannerFilter;
