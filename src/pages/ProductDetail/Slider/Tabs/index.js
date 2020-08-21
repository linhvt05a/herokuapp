import React, { Component } from "react";
import SliderInTab from "./SliderInTab";

const dataTabs = [
  {
    title: "image",
    content: [
      "./assets/images/living-room-area_01.jpg",
      "https://theorigami.vinhomes.vn/wp-content/uploads/2020/08/vinhomes-gay-an-tuong-voi-the-origami-2-400-can-ho-duoc-dat-mua-trong-3-ngay-4-768x430.jpg",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
    ]
  },
  {
    title: "2d",
    content: [
      "https://theorigami.vinhomes.vn/wp-content/uploads/2020/08/vinhomes-gay-an-tuong-voi-the-origami-2-400-can-ho-duoc-dat-mua-trong-3-ngay-1-768x529.jpg",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
    ]
  },
  {
    title: "3d",
    content: [
      "https://theorigami.vinhomes.vn/wp-content/uploads/2020/08/vinhomes-gay-an-tuong-voi-the-origami-2-400-can-ho-duoc-dat-mua-trong-3-ngay-2-768x570.jpg",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
    ]
  },
  {
    title: "AR",
    content: [
      "https://theorigami.vinhomes.vn/wp-content/uploads/2020/08/vinhomes-gay-an-tuong-voi-the-origami-2-400-can-ho-duoc-dat-mua-trong-3-ngay-3-768x433.jpg",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
      "https://via.placeholder.com/730x420",
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
        {tab.props.title}
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


class TabContent extends Component {
  render() {
    return (
      <div className={"wrap" + " wrap_" + (this.props.title) + (this.props.active ? " active" : "")}>
        {this.props.children}
      </div>
    );
  }
}

TabContent.defaultProps = {
  active: false
};


class Tabs extends React.Component {
  render() {
    return (
      <TabsWraper className="tabs-wrapper">
        {

          dataTabs.map((item, index) => {
            return (
              <TabContent key={index} active="true" title={item.title} >
                  <SliderInTab itemImg={item.content}/>
              </TabContent>
            )
          })
        }
      </TabsWraper>
    );
  }
}

export default Tabs;