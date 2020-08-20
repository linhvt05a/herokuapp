import React, { Component } from "react";
import "./styles.css";

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
      <div className={"wrap"+ " wrap_"+(this.props.title) + (this.props.active ? " active" : "")}>
           {this.props.children}
      </div>
    );
  }
}

TabContent.defaultProps = {
  active: false
};

const dataTabs = [
    {
        title: "1d",
        content: "./assets/images/living-room-area_01.jpg"
    },
    {
        title: "2d",
        content: "https://via.placeholder.com/730x420"
    },
    {
        title: "3d",
        content: "./assets/images/living-room-area_01.jpg"
    },
    {
        title: "AR",
        content: "https://via.placeholder.com/730x420"
    }
]

class TabInSlider extends React.Component {
  render() {
    
    return (
      <TabsWraper className="tabs-wrapper">
      {
        dataTabs.map((item, index) => (
            <TabContent key={index} active="true" title={item.title} >
                <figure>
                    <img className="w-100" src={item.content} alt="" />
                </figure>
            </TabContent> 
        ))
      }
      </TabsWraper>
    );
  }
}

export default TabInSlider;