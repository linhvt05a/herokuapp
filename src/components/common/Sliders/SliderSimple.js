import React, { useState, useRef } from 'react';
import Slider from 'react-slick';

const SliderSimple = (props) => {
	const { data, settings } = props

	const ref = useRef({});

	const next = () => {
		ref.current.slickNext();
	};

	const previous = () => {
		ref.current.slickPrev();
	};


	return (
		<Slider ref={ref} {...settings}>
			{props.dataImgs &&
				props.dataImgs.map((item, index) => {
					return (
						<figure key={index}>
							<img src={item.image_url} alt={item.name} />
						</figure>
					)
				})}
		</Slider>
	);
};

export default SliderSimple;