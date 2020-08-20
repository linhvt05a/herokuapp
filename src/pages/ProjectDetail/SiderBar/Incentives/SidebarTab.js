import React, { Component } from "react";
import "./styles.css";
import { logDOM } from "@testing-library/react";

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
      <li key={key} className="nav-item" onClick={this.handleOnClick.bind(this, key)}>
        <a className={"nav-link" + (this.state.activeIndex == key ? " active" : "")}>
          {tab.props.title}
        </a>
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
        <ul className="nav nav-tabs" role="tablist">
          {Object.keys(this.props.children).map(this.renderNavItem.bind(this))}
        </ul>
        <div className="tab-content">{tabs}</div>
      </div>
    );
  }
}


class TabContent extends Component {
  render() {
    return (
      <div className={"tab-pane fade"+ (this.props.active ? " active show" : "")} id={"incentives-" + (this.props.id_tab)}>
           {this.props.children}
      </div>
    );
  }
}

TabContent.defaultProps = {
  active: false
};

class SidebarTab extends React.Component {
  render() {
    const {dataTabs} = this.props;
    return (
      <TabsWraper className="tabs-wrapper">
      {
        dataTabs.map((item, index) => {
          console.log(item.content)
          if(item.id_tab==="tab01") {
            return (
                <TabContent key={index} active="true" title={item.title} id_tab={item.id_tab}>
                    {
                      item.content.map((itemCont,index) => (
                        <div className="incentives__project" key={index}>
                          <a href="/" className="link" />
                          <figure className="img">
                              <img src={itemCont.img} alt={item.title} />
                          </figure>
                          <div className="detail">
                              <div className="text">{itemCont.txtTitle}</div>
                              <span className="date">
                                <i className="icon far fa-clock" />
                                {itemCont.date}
                              </span>
                          </div>
                        </div>
                      ))
                    }
                </TabContent>
              )
            
            } else {
              return (
              <TabContent key={index} active="true" title={item.title} id_tab={item.id_tab}>
                {
                  item.content.map((itemCont,index) => (
                    <div className="incentives__user" key={index}>
                      <div className="heading">
                          <a href="/" className="text">{itemCont.txtTitle}</a>
                          <span className="date"><i className="icon far fa-clock" />{itemCont.date}</span>
                      </div>
                      <div className="list">
                            {
                              itemCont.txtContent.map((txt,index) => (
                                <p className="text" key={index}>{txt}</p>
                              ))
                            }
                      </div>
                  </div> 
                  ))
                }
              
            </TabContent> 
            )
            }
            
        })
      }
      </TabsWraper>
    );
  }
}

export default SidebarTab;