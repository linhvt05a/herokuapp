import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { productAction, transactionAction } from "../../store/action/index";
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
    const [projectName, setProjectName] = React.useState({
        id: project_id > 0 ? project_id : 0,
        name: null
    });
    //create data Filter
    //store
    const product = useSelector(state => state.productReducer);
    const isGetSellingProductListSuccess = product.sellingProductList.success;
    const sellingProductList = isGetSellingProductListSuccess ? product.sellingProductList : null;
    const isGetComingSoonProductListSuccess = product.comingSoonProductList.success;
    const comingSoonProductList = isGetComingSoonProductListSuccess ? product.comingSoonProductList : null;

    //filter
    const project = useSelector(state => state.transactionReducer)
    const { projectList } = project;
    let { isLoadingProduct } = product

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
        callApiProduct({
            page: 1,
            limit: 6,
            project_id: project_id,
            project_status_id: project_status
        })
        // if (project_status === 3) {
        //     dispatch(productAction.loadSellingProductList({ page: 1, limit: 6, project_id: project_id }));
        // } else {
        //     dispatch(productAction.loadComingSoonProductList({ page: 1, limit: 6, project_id: project_id }));
        // }
    }, []);

    useEffect(() => {
        if (projectList.length > 0) {
            for (let i = 0;i < projectList.length;i++) {
                let newProjectName = projectList[i]
                if (newProjectName.project_id == projectName.id) {
                    setProjectName({ id: newProjectName.project_id, name: newProjectName.project_name })
                }
            }
        }
    }, [projectList, projectName.id])

    const onFilterChange = (productTypeData, directionData, priceData, acreageData) => {
        callApiProduct({
            project_id: projectName.id,
            page: 1, limit: 6,
            architecture_type_id: productTypeData,
            direction_id: directionData,
            price_from: priceData[0],
            price_to: priceData[1],
            acreage_from: acreageData[0],
            acreage_to: acreageData[1],
            project_status_id: project_status
        })
        setProductTypeState(productTypeData);
        setDirectionState(directionData);
        setPriceState(priceData);
        setAcreageState(acreageData);
    }

    const onPageChange = (value) => {
        callApiProduct({
            page: value, limit: 6, project_id: projectName.id,
            architecture_type_id: productType,
            direction_id: direction,
            price_from: price[0],
            price_to: price[1],
            acreage_from: acreage[0],
            acreage_to: acreage[1],
            project_status_id: project_status
        })
    }
    const onChangeFilter = ({ project_id, area_id, block_id, project_status_id }) => {
        callApiProduct({
            project_id,
            area_id,
            block_id,
            project_status_id
        })
    }
    { console.log(typeof project_status) }
    return (
        <div className="projectDetailPage">
            {projectName.id &&
                <TopBannerFilter
                    project_id={projectName.id}
                    onChangeFilter={onChangeFilter}
                    status={typeof project_status == "string" ? parseInt(project_status) : project_status}
                    setProjectId={(value) => setProjectName({ ...projectName, id: value })}
                />}
            <DataProjectList
                headerBodyClassName="label_filter--heading"
                labelHeader={projectName ? projectName.name : ""}
                datas={project_status === 3 ? sellingProductList : comingSoonProductList}
                limit={6}
                onFilterChange={onFilterChange}
                isloading={isLoadingProduct}
                onPageChange={onPageChange} />

        </div>
    )
}
export default ProjectDetail;
