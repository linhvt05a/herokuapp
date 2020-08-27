import React, { Component } from 'react'
import Accordion from './Accordion/Accordion';


class SalesAccordion extends Component {
    render() {
      const { data } = this.props;
        return (
            <div>
                <Accordion data={data}/>
            </div>
        )
    }
}
export default SalesAccordion;