import React, { Component } from "react";
import SliderInTab from "./SliderInTab";
import TabContent from './TabContent';

const dataTabs = [
  {
    id: 1,
    title: "image",
    content: [
      "./assets/images/living-room-area_01.jpg",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
    ]
  },
  {
    id: 2,
    title: "2d",
    content: [
      "./assets/images/living-room-area_01.jpg",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
    ]
  },
  {
    id: 3,
    title: "3d",
    content: [
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
    ]
  },
  {
    id: 4,
    title: "AR",
    content: [
      "./assets/images/living-room-area_01.jpg",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
      "https://via.placeholder.com/800x460",
    ]
  }
]

class TabsWraper extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
  }


  handleOnClick(key, event) {
    event.preventDefault();

    this.setState({
      activeIndex: key
    });
  }

  renderNavItem(key) {
    let tab = this.props.children[key];

    return (
      <li key={key} className={this.state.activeIndex == key ? "active" : ""} onClick={this.handleOnClick.bind(this, key)}>
        {
          tab.props.title == "image" ? <i class="icon fas fa-image"></i> : tab.props.title
        }
      </li>
    );
  }

  render() {
    let index = 0;
    let active = this.state.activeIndex;

    let tabs = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        active: child.props.active === true ? true : active == index++
      });
    });

    return (
      <div className={this.props.className}>
        <ul className="image_type selectApartmentType tabs-nav">
          {Object.keys(this.props.children).map(this.renderNavItem.bind(this))}
        </ul>
        <div className="tabs-content">{tabs}</div>
      </div>
    );
  }
}

class TabsSlider extends React.Component {
  render() {
    const { dataLayout } = this.props;
    console.log(dataLayout);
    return (
      <TabsWraper className="apartment_slider selectApartment">
        {

          dataTabs.map((item, index) => {
            return (
              <TabContent key={index} active="true" title={item.title} >
                  <SliderInTab itemImg={dataLayout}/>
              </TabContent>
            )
          })
        }
      </TabsWraper>
    );
  }
}

export default TabsSlider;