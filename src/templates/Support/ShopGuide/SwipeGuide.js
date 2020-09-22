import React, { Component } from 'react';
import { Trans, withTranslation } from 'react-i18next';

const SwipeGuide = (props) =>{
    const{item, t} = props
      return(
        <div className="direction_product--detail slick-slide slick-current slick-active"
              style={{ width: 685 }}
            >
              <div className="step_detail uni-text-6d30ab">
               <Trans>step</Trans>{item.step}:<span className="text">{item.title}</span>
              </div>
              <div className="group">
                <div className="group_title uni-text-0d0d0d">
                  <i className="icon fas fa-mouse" />
                {item.field}
                </div>
                <p className="group_content">{item.criteria}</p>
                <br />
                  {item.categories}
                <p />
              </div>
              <div className="group">
                <div className="group_title uni-text-0d0d0d">
                  <i className="icon fas fa-mouse" />
                  {item.guideMouse}
                </div>
                <p className="group_content">
                  {item.content}
                </p>
              </div>
              <i className="note">
                  {item.webGuide}
              </i>
              <figure className="image">
                <img className="w-100" src={item.guideImage} />
              </figure>
          </div>
      )
    }
  export default withTranslation() (SwipeGuide)