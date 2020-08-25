import React from "react";
import AccordionItem from "./AccordionItem";

class Accordion extends React.Component {
  render() {
    const {data} = this.props; //data trong /Accordion/index.js
    console.log(data);
    
    return (
      data ? 
      <div {...{ className: "wrapper" }}>
        <div {...{ className: "accordion-list" }}>
              <div {...{ className: "sales_collapse"}}>
                <AccordionItem {...data} />
              </div>
        </div>
      </div> : ""
    );
  }
}

export default Accordion;