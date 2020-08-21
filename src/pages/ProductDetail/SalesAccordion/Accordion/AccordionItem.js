import React, { Component } from 'react';
import Parser from 'html-react-parser';
import TabsSlider from "../../TabsSlider";

class AccordionItem extends React.Component {
    state = {
      opened: true
    };
  
    render() {
      const {
        props: { id, title, paragraph },
        state: { opened }
      } = this;
      
      return (
        <div
          {...{
            className: `card ${opened && "show"}`       
          }}
        >
          <div {...{ className: "card-header" }}>
              <h3 {...{ className: "title" }}>{title}</h3>
            <div {...{ onClick: () => { this.setState({ opened: !opened }); }}}>
              <i class="icon_collapse fas fa-plus"></i>
            </div>
          </div>  
          <div {...{ className: "collapse" }}>           
              {id === 1 ?
                <div className="list_style_01">
                    <div className="row">
                      {
                        paragraph.map((item,index) => (
                          <div className="col-12 col-sm-6 col-sm-6 col-md-4" key={index}>
                            <p className="list_style_01--item" key={index}>
                              {item.title}
                              <span className="value">{item.txt}</span>
                            </p>
                            
                          </div>
                        ))
                      }
                    </div>
                  </div> :
                id===2 ?
                <div className="list_style_01">
                    <div className="row">
                      {
                        paragraph.map((item,index) => (
                          <div className="col-sm-12 col-sm-12 col-md-12" key={index}>
                            <TabsSlider/>
                          </div>
                        ))
                      }
                    </div>
                  </div> :
                  id===3 ?
                  <div className="list_style_01">
                    <div className="row">
                      {
                        paragraph.map((item,index) => (
                          <div className="col-sm-12 col-sm-12 col-md-12" key={index}>
                            {Parser(item.content)}
                          </div>
                        ))
                      }
                    </div>
                  </div> :
                  id===4 ?
                  <div className="list_style_01">
                    <div className="row">
                      {
                        paragraph.map((item,index) => (
                          <div className="col-12 col-sm-6 col-sm-6 col-md-4" key={index}>
                            <p className="list_style_02--item" key={index}>{item.content}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div> :
                  <div className="list_style_01">
                    <div className="row">
                      {
                        paragraph.map((item,index) => (
                          <div className="col-sm-12 col-sm-12 col-md-12" key={index}>
                            <p key={index}>{item.content}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                }            
          </div>
        </div>
      );
    }
  }
export default  AccordionItem;