import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { productAction, transactionAction } from "../../store/action/index";
import { useLocation, useParams } from "react-router-dom";
import { productAction } from "../../store/action/index";
import TopBannerFilter from '../../components/common/TopBanner/TopBannerFilter';
import DataProjectList from './DataProjectList';
import { TOKEN, translate } from '../../functions/Utils';


const ProjectDetail = (props) => {
    const dispatch = useDispatch();
    const location = useLocation()
    const project_id = location.pathname.split("/")[2];
    const project_status = location.search.split("=")[1];
    const { t } = useTranslation()
    //data
    const [productType, setProductTypeState] = useState(null)
    const [direction, setDirectionState] = useState(null)
    const [price, setPriceState] = useState([])
    const [acreage, setAcreageState] = useState([])
    //create data Filter
    const [projectName, setProjectName] = useState();
    const [dataProjectList, setDataProjectList] = useState();
    const [dataArea, setDataArea] = useState();
    const [dataBlock, setDataBlock] = useState();
    const [dataProjectType, setDataProjectType] = useState();
    const [filter, setFilter] = useState({
        project_id: project_id > 0 ? parseInt(project_id) : null,
        area_id: null,
        block_id: null,
        type_id: null
    })
    //store
    const product = useSelector(state => state.productReducer);
    const isGetSellingProductListSuccess = product.sellingProductList.success;
    const sellingProductList = isGetSellingProductListSuccess ? product.sellingProductList : null;
    const isGetComingSoonProductListSuccess = product.comingSoonProductList.success;
    const comingSoonProductList = isGetComingSoonProductListSuccess ? product.comingSoonProductList : null;

    //filter
    const project = useSelector(state => state.transactionReducer)
    const trans = useSelector(state => state.transactionReducer)
    const { projectList, projectType } = project;
    const { transacAreaNameList, transacBlockNameList } = trans
    //create data select
    const createDataSelect = (value, label) => {
        return { value, label }
    }
    const callApiArea = (project_id) => {
        dispatch(transactionAction.transLoadAreaNameList({ token: TOKEN, project_id }))
    }
    const callApiBlock = (project_id, area_id) => {
        dispatch(transactionAction.transLoadBlockNameList({ token: TOKEN, project_id, area_id }))
    }
    const callApiProduct = ({ page = 1, project_id, architecture_type_id, direction_id, price_from, price_to, acreage_from, acreage_to, area_id, block_id, project_status_id }) => {
        if (project_status === 3) {
            dispatch(productAction.loadSellingProductList({
                page: page, limit: 6,
                project_id: project_id,
                architecture_type_id: architecture_type_id,
                direction_id: direction_id,
                price_from: price_from,
                price_to: price_to,
                acreage_from: acreage_from,
                acreage_to: acreage_to,
                area_id,
                block_id,
                project_status_id
            })
            );
        } else {
            dispatch(productAction.loadComingSoonProductList({
                page: page, limit: 6,
                project_id: project_id,
                architecture_type_id: architecture_type_id,
                direction_id: direction_id,
                price_from: price_from,
                price_to: price_to,
                acreage_from: acreage_from,
                acreage_to: acreage_to,
                area_id,
                block_id,
                project_status_id
            })
            );
        }
    }
    useEffect(() => {
        //filter api
        dispatch(transactionAction.getProjectList({ token: TOKEN }));
        dispatch(transactionAction.getProjectType({ token: TOKEN }));
        if (project_id) {
            callApiArea(project_id);
            callApiBlock(project_id)
        }
        //
        if (project_status === 3) {
            dispatch(productAction.loadSellingProductList({ page: 1, limit: 6, project_id: project_id }));
        } else {
            dispatch(productAction.loadComingSoonProductList({ page: 1, limit: 6, project_id: project_id }));
        }
    }, []);

    useEffect(() => {
        if (projectList.length > 0) {
            let newProject = []
            for (let i = 0; i < projectList.length; i++) {
                let newProjectName = projectList[i]
                if (newProjectName.project_id == filter.project_id) {
                    setProjectName({ id: newProjectName.project_id, name: newProjectName.project_name })
                }
                newProject.push(createDataSelect(newProjectName.project_id, newProjectName.project_name))
            }
            console.log(newProject);
            setDataProjectList(newProject)
        }
    }, [projectList, filter.project_id])

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


    const onFilterChange = (productTypeData, directionData, priceData, acreageData) => {
        callApiProduct({
            project_id: filter.project_id,
            page: 1, limit: 6,
            architecture_type_id: productTypeData,
            direction_id: directionData,
            price_from: priceData[0],
            price_to: priceData[1],
            acreage_from: acreageData[0],
            acreage_to: acreageData[1]
        })
        setProductTypeState(productTypeData);
        setDirectionState(directionData);
        setPriceState(priceData);
        setAcreageState(acreageData);
    }

    const onPageChange = (value) => {
        callApiProduct({
            page: value, limit: 6, project_id: filter.project_id,
            architecture_type_id: productType,
            direction_id: direction,
            price_from: price[0],
            price_to: price[1],
            acreage_from: acreage[0],
            acreage_to: acreage[1]
        })
    }
    const onChangeFilter = ({ project_id = filter.project_id, area_id = filter.area_id, block_id = filter.block_id, project_status_id = filter.type_id }) => {
        callApiProduct({
            project_id,
            area_id,
            block_id,
            project_status_id
        })
    }
    return (
        <div className="projectDetailPage">
            {projectName &&
                <TopBannerFilter
                    dataProjectList={dataProjectList}
                    dataProjectType={dataProjectType}
                    dataProjectArea={dataArea}
                    dataProjectBlock={dataBlock}
                    filter={filter}
                    setFilter={setFilter}
                    onChangeFilter={onChangeFilter}
                />}
            <DataProjectList
                headerBodyClassName="label_filter--heading"
                labelHeader={projectName ? projectName.name : ""}
                datas={project_status === 3 ? sellingProductList : comingSoonProductList}
                limit={6}
                onFilterChange={onFilterChange}
                onPageChange={onPageChange} />

        </div>
    )
}
export default ProjectDetail;
