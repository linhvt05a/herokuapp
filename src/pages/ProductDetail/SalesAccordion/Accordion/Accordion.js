import React from "react";
import AccordionItem from "./AccordionItem";

class Accordion extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div {...{ className: "wrapper" }}>
        <div {...{ className: "accordion-list" }}>
          {data.map((dataItem, key) => {
            return (
              <div {...{ className: "sales_collapse", key }}>
                <AccordionItem {...dataItem} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Accordion;