import React, { Component } from 'react';
import Slider from "react-slick";

export default class SliderInTab extends Component {
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
        const { nav1, nav2 } = this.state;
        const {itemImg}= this.props;
        return (
            <div>
                <Slider
                    asNavFor={nav2}
                    ref={slider => (this.slider1 = slider)}
                    arrows={false}
                    className="apartment_slider-for"
                  >
                    {
                    itemImg.map((img, index) => {
                        return (
                          <figure key={index}>
                            <img src={img} alt="" />
                          </figure>
                        )
                      })
                    }
                  </Slider>
                <Slider
                    asNavFor={nav1}
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
                    {
                    itemImg.map((img, index) => {
                        return (
                            <figure key={index}>
                            <img src={img} alt="" />
                            </figure>
                        )
                        })
                    }
                </Slider>
            </div>
        )
    }
}
