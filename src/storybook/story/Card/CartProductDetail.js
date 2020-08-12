/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect } from 'react';
import { ListProductDetail } from '../../../components/Card';

const CardStory = props => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <ListProductDetail
                        item={{
                            avatar_url: 'http://cloudapi.minerva.vn/cdn/sunnyworld-workflow-dev/eb698cb8fd492c8ef6ea13.jpg',
                            project_name: 'Project Name',
                            address: "122-124 Xuân Thủy, Phú Thuận, Quận 7, Hồ Chí Minh"
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardStory;