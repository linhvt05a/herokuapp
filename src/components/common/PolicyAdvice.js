import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import CardNoData from '../common/CardNoData';


const PolicyAdvice = (props) => {
	const {data, heading} = props;
	return (
		<>
			<div class="heading_purple">
				<span class="title"><Trans>{heading}</Trans></span>
			</div>
			
			<div className="incentives mt-0">
				<div className="tab-content mt-0">
					<div className="tab-pane fade show active">
					{
						data ? 
						<div className="incentives__user">
							<div className="heading">
								<span className="text">
									{data.promotion_policy_name}
								</span>
								<span className="date">
									<i className="icon far fa-clock pr-1" />
								<Trans>text_from</Trans>: {data.promotion_policy_start_date} 
								<span className="pl-1 pr-1">-</span>  
								<Trans>text_to</Trans>: {data.promotion_policy_end_date}

						</span>
							</div>
							<div className="list">
							{/* promotion_policy_type_name noted */}
								<p className="text">Giảm 2% giá trị</p>
								<p className="text">Tặng 1 lượng vàng 9999</p>
								<p className="text">Tặng gói bảo trì 1 năm căn hộ</p>
							</div>
						</div>
						: <CardNoData />
					}
					</div>
				</div>
			</div>
		</>
	)
}
export default PolicyAdvice