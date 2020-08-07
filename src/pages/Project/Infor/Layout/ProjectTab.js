import React, { useEffect, useState } from 'react';
import CardHeader from '../../../../components/common/CardHeader';
import TabInvestor from './Tabs/TabInvestor';
import TabParameters from './Tabs/TabParameters';
import TabProgress from './Tabs/TabProgress';
import TabSalespolicy from './Tabs/TabSalespolicy';
import TabSellopenlist from './Tabs/TabSellopenlist';
import TabDistributionchannel from './Tabs/TabDistributionchannel';
import TabBanking from './Tabs/TabBanking';
import NavTaps from './Tabs/NavTabs';

const ProjectTab = (props) => {
    var tab = [
        {id : '#block_project_investor',
         tabTitle: "Investor",
        },
        {id : '#block_project_parameters',
         tabTitle: "Project parameters",
        },
        {id : '#block_construction_progress',
         tabTitle: "Construction progress",
        },
        {id : '#sales_policy',
         tabTitle: "Sales policy",
        },
        {id : '#on_open_sale',
         tabTitle: "Sell open list",
        },
        {id : '#distribution_channel',
         tabTitle: "Distribution channel",
        },
        {id : '#bank',
         tabTitle: "Banking",
        }
    ]
    const [active, setActive] = useState(0);
    const onItemClickTab = (index, title) => {
        setActive(index)
    }
    return (
        <div>
            <CardHeader label="Thông tin"/>
            <div className="card">
			    <div className="card-body sales_tabs">
                    <ul className="nav square nav-tabs nav-top-border no-hover-bg" id="curentTab" role="tablist">
                    {
                        tab && tab.map((item, index) => (
                            <NavTaps key={index} data={item} onItemClickTab={onItemClickTab} index={index} active={active}/>
                        ))
                    }
                    </ul>
                    <div class="tab-content mb-2">
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 0 ? '' : 'active'}`}>
                        {
                            props.tabdata && props.tabdata.map((item, index) => (
                                <TabInvestor key={index} data={item} duration={props.detail} />
                            ))
                        }
                        </div>
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 1 ? '' : 'active'}`}>
                            <TabParameters />
                        </div>
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 2 ? '' : 'active'}`}>
                            <TabProgress />
                        </div>
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 3 ? '' : 'active'}`}>
                            <TabSalespolicy />
                        </div>
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 4 ? '' : 'active'}`}>
                            <TabSellopenlist />
                        </div>
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 5 ? '' : 'active'}`}>
                            <TabDistributionchannel />
                        </div>
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 6 ? '' : 'active'}`}>
                            <TabBanking /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTab;