import React, { Component } from 'react';
import Slider from "react-slick";
import TabInSlider from './Tabs';

class ApartmentSlider extends Component {
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
        return (
            <div className="apartment_slider selectApartment">

                <ul className="image_type selectApartmentType">
                    <li data-type="image">
                        <i className="icon fas fa-image" />
                    </li>
                    <li data-type="2d" className="type_2d">2d</li>
                    <li data-type="3d" className="type_3d">3d</li>
                    <li data-type="ar" className="type_ar">AR</li>
                </ul>

                <ul className="icon_like_down">
                    <li><i className="fas fa-download" /></li>
                    <li><i className="liked active fas fa-heart" /></li>
                </ul>

                <div className="wrap wrap_image active">
                    <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        className="apartment_slider-for"
                        >
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                    </Slider>
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={5}
                        slidesToScroll={1}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        centerMode={true}
                        autoplay={true}
                        autoplaySpeed={3000}
                        className="apartment_slider-nav"
                        >
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" alt="" />
                        </figure>
                    </Slider>
                </div>
                
                <div className="wrap wrap_2d">
                    <div className="apartment_slider-for">
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    </div>
                    <div className="apartment_slider-nav">
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    </div>
                </div>
                
                <div className="wrap wrap_3d">
                    <div className="apartment_slider-for">
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    </div>
                    <div className="apartment_slider-nav">
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    <figure>
                        <img src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                    </div>
                </div>
                
                <div className="wrap wrap_ar">
                    <figure>
                    <img className="w-100" src="./assets/images/living-room-area.jpg" alt="" />
                    </figure>
                </div>


                <TabInSlider/>
            </div>
        )
    }
}
export default ApartmentSlider