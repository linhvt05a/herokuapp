import React, { useEffect, useState } from 'react';
import CardHeader from '../../../../components/Card/CardHeader';
import TabInvestor from './Tabs/TabInvestor';
import TabParameters from './Tabs/TabParameters';
import TabProgress from './Tabs/TabProgress';
import TabSalespolicy from './Tabs/TabSalespolicy';
import TabSellopenlist from './Tabs/TabSellopenlist';
import TabDistributionchannel from './Tabs/TabDistributionchannel';
import TabBanking from './Tabs/TabBanking';
import NavTaps from './Tabs/NavTabs';

const ProjectTab = (props) => {
    let {detail, project_id, token } = props;
    var tab = [
        {id : '#block_project_investor',
         tabTitle: "Chủ đầu tư",
        },
        {id : '#block_project_parameters',
         tabTitle: "Thông số dự án",
        },
        {id : '#block_construction_progress',
         tabTitle: "Tiến độ xây dựng",
        },
        {id : '#sales_policy',
         tabTitle: "Chính sách bán hàng",
        },
        {id : '#on_open_sale',
         tabTitle: "Các đợt mở bán",
        },
        {id : '#bank',
         tabTitle: "Ngân hàng",
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
                            detail.investor && detail.investor.map((item, index) => (
                                <TabInvestor key={index} data={item} duration={props.detail} />
                            ))
                        }
                        </div>
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 1 ? '' : 'active'}`}>
                            {active == 1 ? 
                            <TabParameters data={detail.meta_data_groups} lat={detail.lat} long={detail.lon} name={detail.name} durationtype={detail.project_duration_type}/>
                            :''
                            }
                        </div>
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 2 ? '' : 'active'}`}>
                            <TabProgress />
                        </div>
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 3 ? '' : 'active'}`}>
                            <TabSalespolicy project_id={project_id} />
                        </div>
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 4 ? '' : 'active'}`}>
                            <TabSellopenlist project_id={project_id} />
                        </div>
                        <div role="tabpanel" className={`tab-pane show fade pt-2 pb-3 ${active != 5 ? '' : 'active'}`}>
                            <TabBanking project_id={project_id} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTab;