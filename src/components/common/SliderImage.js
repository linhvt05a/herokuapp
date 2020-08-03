import React, {Component} from 'react'
import { Trans } from 'react-i18next';
import Slider from "react-slick";


class SliderImage extends Component{
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
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
        }
        return(
            <div className={this.props.className}>
                <Slider {...settings}  asNavFor={this.state.nav2}
                                        ref={slider => (this.slider1 = slider)}>
                    {this.props.datas.map((item, index)=><figure><img datas={this.props.datas} src={item.src} alt={item.alt} /></figure>)}
                </Slider>
                <Slider {...settings}   asNavFor={this.state.nav1}
                                        ref={slider => (this.slider2 = slider)}
                                        slidesToShow={3}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                        style={{ ...settings, 
                                        position: "absolute",
                                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                                
                                        bottom: "0",
                                        left: "0",
                                        width: "100%",
                                        padding: "6px 10px"
                                        }}>
                    {this.props.datas.map((item, index)=><figure><img datas={this.props.datas} src={item.src} alt={item.alt} /></figure>)}
                </Slider>
            </div>
        )
    }
}
export default SliderImage