import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { CardHeader } from "../common";
import { Trans } from 'react-i18next';

class DialogProjectDashBoardDetail extends Component {
  render() {
    const { data } = this.props;
    // console.log("dataa", data);
    return (
      <Modal size="lg" animation={true} show={this.props.visible} onHide={this.props.close}>
        <CardHeader label="News" />
        <div className="modal-content square border-0">
          <div className="modal-body pb-0 w-100 pb-2">
            <div className="row">
              <div className="col-12">
                <p>
                  <u>Title: </u>
                  <span className="fw-medium" id="title_news">
                   {data.project_news_title}
                  </span>
                </p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <p>
                  <u>Content:</u>
                </p>
              </div>
              <div id="content_news" className="p-2" style={{ height: "100px" }}>
                {data.project_news_content}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={this.props.close}
                className="btn bg-grey-blue bg-lighten-4 square btn-cancel font-weight-bold"
                style={{ float: "right", width: "20%" }}
              >
                {" "}
                <Trans>close</Trans>{" "}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
export default DialogProjectDashBoardDetail;
