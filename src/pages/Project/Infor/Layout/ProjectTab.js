import React from 'react';
import CardHeader from '../../../../components/common/CardHeader';
import TabInvestor from './Tabs/TabParameters';
import TabParameters from './Tabs/TabInvestor';
import TabProgress from './Tabs/TabProgress';
import TabSalespolicy from './Tabs/TabSalespolicy';
import TabSellopenlist from './Tabs/TabSellopenlist';
import TabDistributionchannel from './Tabs/TabDistributionchannel';
import TabBanking from './Tabs/TabBanking';
import NavTaps from './Tabs/NavTabs';

const ProjectTab = () => {
    return (
        <div>
            <CardHeader label="Thông tin"/>
            <div className="card">
			    <div className="card-body sales_tabs">
                    <NavTaps />
                    <div class="tab-content mb-2">
                        <TabInvestor />
                        <TabParameters />
                        <TabProgress />
                        <TabSalespolicy />
                        <TabSellopenlist />
                        <TabDistributionchannel />
                        <TabBanking />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTab;