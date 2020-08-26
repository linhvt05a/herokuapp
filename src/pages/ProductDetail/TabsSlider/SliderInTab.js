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
        const { itemImg }= this.props;
        return (
            itemImg ? <div>
                <Slider
                    asNavFor={nav2}
                    ref={slider => (this.slider1 = slider)}
                    arrows={false}
                    className="apartment_slider-for"
                  >
                    {
                    itemImg.map((item, index) => {
                        return (
                          <figure key={index}>
                            <img src={item.image_url} alt="" height={400}/>
                          </figure>
                        )
                      })
                    }
                  </Slider>
                <Slider
                    asNavFor={nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={2}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    className="apartment_slider-nav"
                    >
                    {
                    itemImg.map((item, index) => {
                        return (
                            <figure key={index}>
                                 <img src={item.image_url} alt="" height={80}/>
                            </figure>
                        )
                        })
                    }
                </Slider>
            </div> : ""
        )
    }
}
