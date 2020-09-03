import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import {Link} from 'react-router-dom'

const PolicyAdvice = (props) => {
	const {data, heading, noFilter} = props;

	return (
		data.map((item, index) => (
			<>
				<div class="exchanges_filter bg-white">
					<div class="heading heading_left">
						<span class="title  policy_loan_title">{heading}</span>
					</div>
				</div>
				<div className="incentives mt-0">
					<div className="tab-content mt-0">
						<div className="tab-pane fade show active">
							<div className="incentives__user">
								<div className="heading">
									<span to="/" className="text">
										{item.promotion_policy_name}
									</span>
									<span className="date">
										<i className="icon far fa-clock" />
								Từ: {item.promotion_policy_start_date} - {item.promotion_policy_end_date}

							</span>
								</div>
								<div className="list">
								{/* promotion_policy_type_name noted */}
									<p className="text">Giảm 2% giá trị</p>
									<p className="text">Tặng 1 lượng vàng 9999</p>
									<p className="text">Tặng gói bảo trì 1 năm căn hộ</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		))
	)
}
export default PolicyAdvice