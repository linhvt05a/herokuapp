import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

class DropdownDot extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    select(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle className="fa fa-ellipsis-h" color="#000000ba" size="15px"> </DropdownToggle>
                <DropdownMenu>
                    {
                        this.props.datas && this.props.datas.map((item, index) =>
                            <DropdownItem onClick={this.select} href={item.href} key={index}>{item.icon && item.icon}  <Trans>{item.value}</Trans></DropdownItem>
                        )
                    }
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

export default DropdownDot;
