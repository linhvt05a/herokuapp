import React, { Component } from 'react';
import { Trans } from 'react-i18next';


const HeadingPurpleBank = (props) => {
	const { data, heading } = props;

	console.log('data 11', data);

	return (
		<>
			<div class="heading_purple">
				<span class="title"><Trans>{heading}</Trans></span>
			</div>

			<div className="card border-0 mt-0">
				<div className="card-body">
					<div class="row">
						<div class="col-md-6 col-sm-12 col-xs-12 pr-0">
							<p class="list_style_01--item">
								Tiền vay tối thiểu (đồng)
								<span class="value d-block fw-normal uni-text-0d0d0d">
									{data.minimum_loan_limit_money_master_unit_name ? data.minimum_loan_limit_money_master_unit_name : 'null'}
								</span>
							</p>
							<p class="list_style_01--item">
								Thời gian vay tối thiểu
								<span class="value d-block fw-normal uni-text-0d0d0d">
									{data.minimum_loan_limit_money ? data.minimum_loan_limit_money : 'null'}
								</span>
							</p>
						</div>
						<div class="col-md-6 col-sm-12 col-xs-12 pl-0">
							<p class="list_style_01--item">
								Tiền vay tối đa (đồng)
								<span class="value d-block fw-normal uni-text-0d0d0d">
									{data.minimum_loan_period_unit_name ? data.minimum_loan_period_unit_name : 'null'}
								</span>
							</p>
							<p class="list_style_01--item">
								Thời gian vay tối đa
								<span class="value d-block fw-normal uni-text-0d0d0d">
									{data.minimum_loan_period ? data.minimum_loan_period : 'null'}
								</span>
							</p>

						</div>
					</div>
				</div>
			</div>
		</>
	)
}


export default HeadingPurpleBank