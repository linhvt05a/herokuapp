import React, { useState, useEffect } from 'react';

const SortAccordion = (props) => {
	const { data } = props;
	// console.log('data:',data);
	return (
		<div className="exchanges_filter">
			<div className="wrap">
				{
					data ? 
					data.list_floor_or_lot.map((item, key) => (
						<AccordionItem key={key} data={item}  />
					)) : ''
				}
			</div>
		</div>
	);
}

const AccordionItem = (props) => {
	const {data} = props;
	const [opened, setOpened] = useState(false)

	return (
		<div className="floors">
			<div className="floor" onClick={() => setOpened(!opened)}>
				<span className={`floor-name ${opened ? 'active' : ''}`}>
					{data.product_floor_or_lot_name}
				</span>
				<span className="floor-number"><i className="available">5</i>/15</span>
			</div>

			<div className={`aparts ${opened ? 'active' : ''}`}>
				{
					data.list_product.map((item, index) => (
						<div key={index} className="apart">
							<span className="apart-name">{item.product_name}</span>
							<span className="apart-price">
								{item.product_estimate_price}{item.product_estimate_price_unit_name}
							</span>
						</div>
					))
				}
			</div>
		</div>
	);
}

export default SortAccordion;