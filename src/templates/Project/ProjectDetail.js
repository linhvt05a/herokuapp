import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { productAction, transactionAction } from "../../store/action/index";
import TopBannerProjectDetail from './TopBannerProjectDetail';
import DataProjectList from './DataProjectList';
import { TOKEN } from '../../functions/Utils';


const ProjectDetail = (props) => {
    const dispatch = useDispatch();
    const location = useLocation()
    const project_id = location.pathname.split("/")[2];
    const project_status = location.search.split("=")[1];
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
        project_id: project_id > 0 ? project_id : 0
    })
    //store
    const product = useSelector(state => state.productReducer);
    const isGetSellingProductListSuccess = product.sellingProductList.success;
    const sellingProductList = isGetSellingProductListSuccess ? product.sellingProductList : null;
    const isGetComingSoonProductListSuccess = product.comingSoonProductList.success;
    const comingSoonProductList = isGetComingSoonProductListSuccess ? product.comingSoonProductList : null;

    //filter
    const project = useSelector(state => state.transactionReducer)
    const { projectList, projectType } = project
    //create data select
    const createDataSelect = (name, label) => {
        return { name, label }
    }
    useEffect(() => {
        //filter api
        dispatch(transactionAction.getProjectList({ token: TOKEN }));
        dispatch(transactionAction.getProjectType({ token: TOKEN }))
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
            for (let i = 0;i < projectList.length;i++) {
                let newProjectName = projectList[i]
                if (newProjectName.project_id == project_id) {
                    setProjectName({ id: newProjectName.project_id, name: newProjectName.project_name })
                }
                newProject.push(createDataSelect(newProjectName.project_id, newProjectName.project_name))
            }
            console.log(newProject);
            setDataProjectList(newProject)
        }
    }, [projectList])

    useEffect(() => {
        if (projectType.length > 0) {
            let newProject = []
            for (let i = 0;i < projectType.length;i++) {
                let item = projectType[i]
                newProject.push(createDataSelect(item.id, item.name))
            }
            setDataProjectType(newProject)
        }
    }, [projectType])



    const onFilterChange = (productTypeData, directionData, priceData, acreageData) => {
        if (project_status === 3) {
            dispatch(productAction.loadSellingProductList({
                page: 1, limit: 6,
                project_id: project_id,
                architecture_type_id: productTypeData,
                direction_id: directionData,
                price_from: priceData[0],
                price_to: priceData[1],
                acreage_from: acreageData[0],
                acreage_to: acreageData[1]
            })
            );
        } else {
            dispatch(productAction.loadComingSoonProductList({
                page: 1, limit: 6,
                project_id: project_id,
                architecture_type_id: productTypeData,
                direction_id: directionData,
                price_from: priceData[0],
                price_to: priceData[1],
                acreage_from: acreageData[0],
                acreage_to: acreageData[1]
            })
            );
        }
        setProductTypeState(productTypeData);
        setDirectionState(directionData);
        setPriceState(priceData);
        setAcreageState(acreageData);
    }

    const onPageChange = (value) => {
        if (project_status === 3) {
            dispatch(productAction.loadSellingProductList({
                page: value, limit: 6, project_id: project_id,
                architecture_type_id: productType,
                direction_id: direction,
                price_from: price[0],
                price_to: price[1],
                acreage_from: acreage[0],
                acreage_to: acreage[1]
            })
            );
        } else {
            dispatch(productAction.loadComingSoonProductList({
                page: value,
                limit: 6,
                project_id: project_id,
                architecture_type_id: productType,
                direction_id: direction,
                price_from: price[0],
                price_to: price[1],
                acreage_from: acreage[0],
                acreage_to: acreage[1]
            })
            );
        }
    }

    return (
        <div className="projectDetailPage">
            <TopBannerProjectDetail
                dataProjectList={dataProjectList}
                dataProjectType={dataProjectType}
                project_id={projectName.id}
                setProjectName={setProjectName}
            />
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
