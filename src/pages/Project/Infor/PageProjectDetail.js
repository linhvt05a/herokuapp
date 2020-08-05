import React from 'react';
import ProjectInfo from './Layout/ProjectInfo';
import ProjectTab from './Layout/ProjectTab';
import CardHeader from '../../../components/common/CardHeader';

const PageProjectDetail = () => {
    return (
        <div class="container-fluid">
            <ProjectInfo />
            <ProjectTab token="MjoxMzliMDZiZmI4OTJhOGYxYmQ2MzVhZmFmODEyZmM5M2RhNDFkM2Yx" />
        </div>
    )
}

export default PageProjectDetail;