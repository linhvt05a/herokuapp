import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import CardNoData from '../CardNoData';


const HeadingPurpleUltilities = (props) => {
	const { data, heading } = props;
	return (
		<>
			<div className="heading_purple">
				<span className="title"><Trans>{heading}</Trans></span>
			</div>

			<div className="card border-0 mt-0">
				<div className="card-body list_style_02 d-flex flex-wrap justify-content-around">
					{
						data ? data.map((value, index) => {
							return (
								<p key={index} className={`list_style_02--item ${value.is_enable ? 'unactive' : ''}`} style={{ width: '48%' }}>
									{value.floor_or_lot_internal_utility_name}
								</p>
							)
						}) : <CardNoData />
					}
				</div>
			</div>
		</>
	)
}

export default HeadingPurpleUltilities