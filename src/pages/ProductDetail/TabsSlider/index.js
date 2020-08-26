import React, { Component } from "react";
import SliderInTab from "./SliderInTab";
import TabContent from './TabContent';
import TimeLine from '../../../components/common/TimeLine';
import Promotion from '../../../components/common/Promotion';
import IconLikeDown from '../../../components/common/IconLikeDown';

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
    const { dataImg, dataLayout } = this.props;
    const layout = [{ title: "image", content: dataImg }, { title: "2d", content: dataLayout.layout_2d }, { title: "3d", content: dataLayout.layout_3d }, { title: "ar", content: dataLayout.layout_ar }]
    return (
      <TabsWraper className="apartment_slider selectApartment">
        {
          layout.map((itemlayout, index) => (
            <TabContent key={index} active="true" title={itemlayout.title} >
              {
                itemlayout.content ?
                  itemlayout.content.map((item,i) => (
                    <div key={i}>
                      <TimeLine datas={['00', '20', '35']} />
                      <Promotion />
                      <IconLikeDown />
                    </div>
                  ))
              :""
              }
              <SliderInTab key={index} itemImg={itemlayout.content} />
            </TabContent>
          ))
        }

      </TabsWraper>
    );
  }
}

export default TabsSlider;