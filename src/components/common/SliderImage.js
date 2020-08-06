import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import Slider from "react-slick";


class SliderImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null
		};
	}
	componentDidMount() {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2
		});
	}
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			arrows: false
		}

		return (
			<div className={this.props.className}>
				<Slider {...settings}
					className="slider slider-single"
					asNavFor={this.state.nav2}
					ref={slider => (this.slider1 = slider)}>
					{this.props.datas.map((item, index) =>
						<figure key={index}>
							<img src={item.project_image_url} alt='Minerva' />
						</figure>
					)}
				</Slider>
				<Slider {...settings}
					className="slider slider-nav"
					asNavFor={this.state.nav1}
					ref={slider => (this.slider2 = slider)}
					slidesToShow={4}
					swipeToSlide={true}
					focusOnSelect={true}>
					{this.props.datas.map((item, index) =>
						<figure key={index}>
							<img src={item.project_image_url} alt='Minerva' />
						</figure>
					)}
				</Slider>
			</div>
		)
	}
}
export default SliderImage