import React, { Component } from "react";

class Picture extends Component {
  render() {
    return (
      <div>
        <figure className="app_managerment--right">
          <img
            className="w-100"
            src="./assets/images/icon_phone.png"
            alt="Ứng dụng quản lý"
          />
        </figure>
      </div>
    );
  }
}

export default Picture;
