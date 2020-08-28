import React, { Component } from 'react'

class TabContent extends Component {
  render() {
    const { title, active } = this.props;
    
    return (
      <div className={"wrap" + " wrap_" + (title) + (active ? " active" : "")}>
        {this.props.children}
      </div>
    );
  }
}

TabContent.defaultProps = {
  active: false
};

export default TabContent;