import React from "react";

class SortAccordion extends React.Component {
  render() {
    const {list_floor_or_lot} = this.props.data;
    return (
      <div {...{ className: "exchanges_filter" }}>
        <div {...{ className: "wrap" }}>
          {list_floor_or_lot.map((data, key) => (
            <AccordionItem key={key} {...data} />
          ))}
        </div>
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  };

  render() {
    
    const {
      props: { product_floor_or_lot_name, list_product },
      state: { opened }
    } = this;

    return (
      <div
        {...{
          className: `floors ${opened && "active"}`,
          onClick: () => {
            this.setState({ opened: !opened });
          }
        }}
      >
        <div {...{ className: "floor" }}>
          <span {...{ className: "floor-name" }}>{product_floor_or_lot_name}</span>
          <span className="floor-number"><i className="available">5</i>/15</span>
        </div>
        <div {...{ className: "aparts" }}>
          {
              list_product.map((item,index) => (
                <div key={index} {...{ className: "apart" }}>
                    <span className="apart-name">{item.product_name}</span>
                    <span className="apart-price">{item.product_estimate_price}{item.product_estimate_price_unit_name}</span>
                </div>
              ))
          }
        </div>
      </div>
    );
  }
}

export default SortAccordion;