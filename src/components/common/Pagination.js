import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { Link } from "react-router-dom";


class NumPage extends Component{
    constructor(props) {
        super(props);
    }

    page = (e) => {
        this.props.change(this.props.value);
    }

    render() {
        return (
            <li value={this.props.value} className={`page-item ${this.props.className ? 'active' : ''}`} onClick={this.page}>
                <Link className="page-link">
                    {this.props.name}
                </Link>
            </li>
            // <li value={this.props.value} className={this.props.className ? this.props.className : ''} onClick={this.page}>
            //     <a>{this.props.name}</a>
            // </li>
        )
    }
}

class Pagination extends Component {
    render() {
        if( !this.props.total_page || this.props.total_page < 2  ){
            return (<div></div>)
        }
        const { page, total_page, total_record } = this.props;

        const page1 = parseInt(page);
        const page2 = parseInt(page) + 1;
        const page3 = parseInt(page) + 2;
        const page4 = parseInt(page) + 3;
        const page5 = parseInt(page) + 4;

        // console.log("Pagination: " + page1 + ";" +page2 + ";" +page + ";" + page4 + ";" + page5)
        return (
            <ul className="pagination">
                <NumPage value={1} name={<Trans>Đầu</Trans>} change={this.props.change}/>
                <NumPage value={page1} name={page1} change={this.props.change} />
                <NumPage value={page2} name={page2} change={this.props.change} />
                <NumPage value={page3} name={page3} change={this.props.change} />
                <NumPage value={page4} name={page4} change={this.props.change} /> 
                <NumPage value={page5} name={page5} change={this.props.change} /> 
                <NumPage value={total_page} name= {<Trans>Cuối</Trans>} change={this.props.change} />

                {/* { page1 == 1 && <NumPage value={1} name={<Trans>Đầu</Trans>} change={this.props.change}/> }

                { page1 > 1 && <NumPage value={page1} name={page1} change={this.props.change} /> }

                { page2 > 1 && <NumPage value={page2} name={page2} change={this.props.change} /> }
                { page3 > 0 && <NumPage value={page3} name={page3} className="active" change={this.props.change} /> }
                { page4 < total_page && <NumPage value={page4} name={page4} change={this.props.change} /> }
                { page5 < total_page && <NumPage value={page5} name={page5} change={this.props.change} /> }

                { page3 < total_page && <NumPage value={total_page} name= {<Trans>Cuối</Trans>} change={this.props.change} /> } */}

                {/* { page3 > 1 && <NumPage value={1} name={<Trans>First</Trans>} change={this.props.change}/> }

                { page1 > 1 && <NumPage value={page1} name={page1} change={this.props.change} /> }
                { page2 > 1 && <NumPage value={page2} name={page2} change={this.props.change} /> }
                { page3 > 0 && page3 <= total_page && <NumPage value={page3} name={page3} className="active" change={this.props.change} /> }
                { page4 < total_page && <NumPage value={page4} name={page4} change={this.props.change} /> }
                { page5 < total_page && <NumPage value={page5} name={page5} change={this.props.change} /> }

                { page3 < total_page && <NumPage value={total_page} name= {<Trans>Last</Trans>} change={this.props.change} /> } */}

                {/* <li> &nbsp; &nbsp; &nbsp; &nbsp; <b>{total_page}</b> &nbsp; <Trans>from</Trans> &nbsp; {total_record} </li> */}
            </ul>
        )
    }
}

export default Pagination;
