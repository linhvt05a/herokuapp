import React, { Component } from 'react';
import Slider from "react-slick";

class ApartmentSlider extends Component {
    
    render() {
        const settings = {
            customPaging: function(i) {
              return (
                <figure>
                  <img src={`./assets/images/living-room-area_0${i + 1}.jpg`} />
                </figure>
              );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
          };
        
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
                    <li>
                    <i className="fas fa-download" />
                    </li>
                    <li>
                    <i className="liked active fas fa-heart" />
                    </li>
                </ul>
                <div className="wrap wrap_image active">
                    <div className="apartment_slider-for">

                    <Slider {...settings}>
                        <figure>
                            <img src="./assets/images/living-room-area_01.jpg" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_02.jpg" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_03.jpg" />
                        </figure>
                        <figure>
                            <img src="./assets/images/living-room-area_04.jpg"/>
                        </figure>
                    </Slider>
                    </div>
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
            </div>
        )
    }
}
export default ApartmentSlider