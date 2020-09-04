import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import CardNoData from '../common/CardNoData';
import moment from 'moment'

function convertDate (value){
	const date = moment().format("DD/MM/YYYY")
	return date
}
const PolicyAdvice = (props) => {
	const {data, heading} = props;
	console.log(data)
	return (
		<>
			<div class="heading_purple">
				<span class="title"><Trans>{heading}</Trans></span>
			</div>
			
			<div className="incentives mt-0">
				<div className="tab-content mt-0">
					<div className="tab-pane fade show active">
					{
						data && data.list_promotion_policy.length > 0 ? data.list_promotion_policy.map((item, index)=>
						<div className="incentives__user" key={index}>
							<div className="heading">
								<span className="text">
									{item.promotion_policy_name}
								</span>
								<span className="date">
									<i className="icon far fa-clock pr-1" />
								<Trans>text_from</Trans>: {convertDate(item.promotion_policy_start_date)} 
								<span className="pl-1 pr-1">-</span>  
								<Trans>text_to</Trans>: {convertDate(item.promotion_policy_end_date)}

						</span>
							</div>
							<div className="list">
							{/* promotion_policy_type_name noted */}
								<p className="text"><Trans>{item.promotion_policy_type_name}</Trans></p>
								<p className="text"><Trans>{item.promotion_policy_value_unit_name}</Trans></p>
								<p className="text"><Trans>{item.promotion_policy_value}</Trans></p>
							</div>
						</div>
						)
						: <CardNoData />
					}
					</div>
				</div>
			</div>
		</>
	)
}
export default PolicyAdvice