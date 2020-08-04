import React, { Component } from "react";
import { Trans } from "react-i18next";

import { CardHeader } from "../common";
import { userService } from "../../services";

class CardChangeAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      fileSelector: null,
      avatar_url: "",
    };
  }

  buildFileSelector = (e) => {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute("accept", "image/x-png,image/gif,image/jpeg");
    fileSelector.onchange = this.handleChange;
    return fileSelector;
  };

  handleChange = (e) => {
    this.setState({
      file: e.target.files[0],
    });
    this.props.onChange(this.state.file);
  };
  componentDidMount() {
    this.setState({
      avatar_url: this.props.avatar_url,
      fileSelector: this.buildFileSelector(),
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.avatar_url !== this.props.avatar_url) {
      this.setState({
        avatar_url: this.props.avatar_url,
      })
    }
  }

  onOpenFile = (e) => {
    this.state.fileSelector.click();
  };

  render() {
    const { file, avatar_url } = this.state;
    let image = null;
    if (file != null) {
      image = URL.createObjectURL(file);
    } else if (avatar_url != null) {
      image = avatar_url;
    }
    if (image) {
      return (
        <div className={this.props.className}>
          <CardHeader label="image" />
          <div className="card h-100 square">
            <div className="card-body">
              <div className="div_image_preview">
                <img className="img-thumbnail" src={image} />
                <small
                  className="float-right mt-1 mb-1"
                  style={{ fontSize: "13px", textDecoration: "underline" }}
                >
                  <a
                    className="fw-medium uni_text_6d30ab"
                    onClick={this.onOpenFile}
                  >
                    Thay đổi ảnh đại diện
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={this.props.className}>
          <CardHeader label="image" />
          <div className="card h-100 square">
            <div className="card-body">
              <div className="m_drag-images" onClick={this.onOpenFile}>
                <p className="text">
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                  <span>
                    <Trans>Update project avatar image</Trans>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default CardChangeAvatar;
