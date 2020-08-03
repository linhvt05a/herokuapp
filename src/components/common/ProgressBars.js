import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
 class ProgressBars extends Component {
  
  render() {

    const {data} = this.props

    return (
        <div className="card-body">
        <div className="row">
          <div className="col-6 font-weight-bold">
           {data.title}
            <span className="text-red">{data.value}%</span>
          </div>
          <div className="col-6 text-right">{data.status}</div>
        </div>
            <ProgressBar 
                animated 
                now={data.value} 
                color = {data.color} 
               
            />
        <hr style = {{opacity : data.id ==="4" ? 0 : 1}}/>
        </div>
    
    );
  }
}
export default ProgressBars