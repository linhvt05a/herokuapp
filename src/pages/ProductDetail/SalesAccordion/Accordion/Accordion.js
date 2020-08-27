import React from "react";
import AccordionItem from "./AccordionItem";

class Accordion extends React.Component {
  render() {
    const {data, dataDemo} = this.props; //data trong /Accordion/index.js
    
    return (
      data ? 
      <div {...{ className: "wrapper" }}>
        <div {...{ className: "accordion-list" }}>
              <div {...{ className: "sales_collapse"}}>
                <AccordionItem dataDemo={dataDemo} {...data} />
              </div>
        </div>
      </div> : ""
    );
  }
}

export default Accordion;