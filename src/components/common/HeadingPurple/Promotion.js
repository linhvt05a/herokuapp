import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import CardNoData from '../CardNoData';
import moment from 'moment'

function convertDate(value){
	const date = moment().format("DD/MM/YYYY")
	return date
}
const HeadingPurplePromotion = (props) => {
	const { data, heading } = props;
	return (
		<>
			<div class="heading_purple">
				<span class="title"><Trans>{heading}</Trans></span>
			</div>

			<div className="card border-0 mt-0">
				<div className="card-body">
					{
						data && data.length > 0 ? data.map((value, index) => {
							return (
								<div className="incentives__user" key={index}>
									<div className="heading">
										<span className="text">
											{value.promotion_policy_name}
										</span>
										<span className="date">
											<i className="icon far fa-clock pr-1" />
											<Trans>text_from</Trans>: {convertDate(value.promotion_policy_start_date)}
											<i className="pl-1 pr-1">-</i>
											<Trans>text_to</Trans>: {convertDate(value.promotion_policy_end_date)}
										</span>
									</div>
									<div className="list">
										{
											value.list_promotion_policy_detail ? value.list_promotion_policy_detail.map((valueDetail, index) => {
												return (
													<p className="text" key={index}>
														{valueDetail.promotion_policy_detail_child_type_name}
													</p>
												)
											}) : ''
										}
									</div>
								</div>
							)
						}) : <CardNoData />
					}
				</div>
			</div>
		</>
	)
}


export default HeadingPurplePromotion