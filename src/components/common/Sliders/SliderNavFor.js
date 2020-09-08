import React, { Component, useState } from "react";
import Slider from "react-slick";

const SliderNavFor = (props) => {

	const { data } = props;

	const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();

	const settingFor= {
		infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
	}
	const settingNav= {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: ".apartment_slider-for",
		dots: false,
		autoplay: true,
		arrows: true,
		focusOnSelect: true,
		centerMode: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<>
			<Slider {...settingFor} asNavFor={nav2} ref={c => setNav1(c)} className="apartment_slider-for">
				{
					data && data.map((item, index) => {
						return (
							<figure key={index}>
								<img src={item.image_url} alt={item.name}/>
							</figure>
						)
					})
				}
			</Slider>
			<Slider
				{...settingNav}
				className="apartment_slider-nav"
				asNavFor={nav1}
				ref={c => setNav2(c)}
			>
				{
					data && data.map((item, index) => {
						return (
							<figure key={index}>
								<img src={item.image_url} alt={item.name}/>
							</figure>
						)
					})
				}
			</Slider>
		</>
	);
}
export default SliderNavFor;