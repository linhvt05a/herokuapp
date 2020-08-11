import React from 'react';
import {
    CardMap, CardProject, CardTask,
    CardFilterPosition, CardFilterTask, CardTaskTree,
    CardChangeAvatar, CardTabFilter,
    CardProjectInfor,CardProjectEmpty,CardProjectInforProgress,
    CardColumnChart, ListProduct, ListProductDetail, ListProductTable
} from '../../../components/Card';

const CardStory = () => {

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <ListProduct />
                </div>
            </div>
        </div>
    )
}

export default CardStory;