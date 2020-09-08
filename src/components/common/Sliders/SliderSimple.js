import React, { useState, useRef } from 'react';
import Slider from 'react-slick';

const SliderSimple = (props) => {
	const {data, settings} = props

	const ref = useRef({});

	const next = () => {
		ref.current.slickNext();
	};

	const previous = () => {
		ref.current.slickPrev();
	};


	return (
		<Slider ref={ref} {...settings}>
			<div>
				<h3>1</h3>
			</div>
			<div>
				<h3>2</h3>
			</div>
			<div>
				<h3>3</h3>
			</div>
			<div>
				<h3>4</h3>
			</div>
			<div>
				<h3>5</h3>
			</div>
			<div>
				<h3>6</h3>
			</div>
		</Slider>
	);
};

export default SliderSimple;