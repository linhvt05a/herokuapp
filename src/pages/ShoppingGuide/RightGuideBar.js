import React, { Component } from "react";
import { ContentGuide } from "./index";

const RightGuideBar = (props) => {
  const{selected} = props
  console.log(selected)
  return (
    <div className="col-md-12 col-lg-8 col-xl-8 direction_product--right">
      <div className="card square border-0 h-100">
        <div className="card-body">
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane fade" id="tab01"></div>
              {selected && <ContentGuide />}
              {!selected && <div>Loading....</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightGuideBar;
