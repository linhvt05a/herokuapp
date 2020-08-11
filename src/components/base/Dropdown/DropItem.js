import React, { Component } from 'react';

//mousedown
class DropItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
        };
    }

    componentWillMount(){
        document.addEventListener( 'click', this.handleClick, false);
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleClick, false);
    }

    handleClick = (e) => {
        if( this.node.contains(e.target) ){
            //console.log('in')
            this.setState({ show: !this.state.show });
            return;
        }
        //console.log('out')
        this.setState({ show: false });
    }

    render() {
        return (
            <div ref={node => this.node = node }>
                { this.content() }
            </div>
        )
    }

}

export default DropItem;
