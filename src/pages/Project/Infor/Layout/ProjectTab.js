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

const ProjectTab = (props) => {
    var tabdata = [
        {id : 'block_project_investor',
         tabTitle: "Investor",
        },
        {id : 'block_project_parameters',
         tabTitle: "Project parameters",
        },
        {id : 'block_construction_progress',
         tabTitle: "Construction progress",
        },
        {id : 'sales_policy',
         tabTitle: "Sales policy",
        },
        {id : 'on_open_sale',
         tabTitle: "Sell open list",
        },
        {id : 'distribution_channel',
         tabTitle: "Distribution channel",
        },
        {id : 'bank',
         tabTitle: "Banking",
        }
    ]
    console.log(props);
    console.log(tabdata);
    
    return (
        <div>
            <CardHeader label="Thông tin"/>
            <div className="card">
			    <div className="card-body sales_tabs">
                    <NavTaps />
                    <div class="tab-content mb-2">
                        <TabInvestor tab={tabdata} />
                        <TabParameters tab={tabdata} />
                        {/* <TabProgress />
                        <TabSalespolicy />
                        <TabSellopenlist />
                        <TabDistributionchannel />
                        <TabBanking /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTab;