import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import CardNoData from '../CardNoData';


const HeadingPurpleUltilities = (props) => {
	const { data, heading } = props;
	return (
		<>
			<div class="heading_purple">
				<span class="title"><Trans>{heading}</Trans></span>
			</div>

			<div className="card border-0 mt-0">
				<div className="card-body d-flex flex-wrap justify-content-around">
					{
						data ? data.map((value ,index) => {
							return (
								<p key={index} class="list_style_02--item" style={{width:'49%'}}>
									{value.floor_or_lot_internal_utility_name}
								</p>
							)
						}): <CardNoData />
					}
				</div>
			</div>
		</>
	)
}

export default HeadingPurpleUltilities