import React, { Component } from 'react';
import { Trans } from 'react-i18next';


const HeadingPurpleBank = (props) => {
	const { data, heading } = props;

	// console.log('data 11', data);

	return (
		<>
			<div class="heading_purple">
				<span class="title">
					<Trans>{heading}</Trans> {data.total_support_banking} <Trans>text_bank</Trans>
				</span>
			</div>

			<div className="card border-0 mt-0 heading_purple--list">
				<div className="card-body">
					<div class="row">
						<div class="col-md-6 col-sm-12 col-xs-12 pr-0">
							<p class="list_style_01--item">
								<span className="heading"><Trans>minimum_loan_money</Trans> ({data.minimum_loan_limit_money_master_unit_name})</span>
								<span class="value d-block fw-normal uni-text-0d0d0d">
									{data.minimum_loan_limit_money ? data.minimum_loan_limit_money : 'null'}
								</span>
							</p>
							<p class="list_style_01--item">
								<span className="heading">
									<Trans>minimum_loan_time</Trans> ({data.minimum_loan_period_unit_name})
								</span>
								<span class="value d-block fw-normal uni-text-0d0d0d">
									{data.minimum_loan_period ? data.minimum_loan_period : 'null'}
								</span>
							</p>
						</div>
						<div class="col-md-6 col-sm-12 col-xs-12 pl-0">
							<p class="list_style_01--item">
								<span className="heading">
									<Trans>maximum_loan_money</Trans> ({data.maximum_loan_limit_money_master_unit_name})
							</span>
								<span class="value d-block fw-normal uni-text-0d0d0d">
									{data.maximum_loan_limit_money ? data.maximum_loan_limit_money : 'null'}
								</span>
							</p>
							<p class="list_style_01--item">
								<span className="heading">
									<Trans>maximum_loan_time</Trans> ({data.maximum_loan_period_unit_name})
								</span>
								<span class="value d-block fw-normal uni-text-0d0d0d">
									{data.maximum_loan_period ? data.maximum_loan_period : 'null'}
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