import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

const WAIT_INTERVAL = 1000
const ENTER_KEY = 13
class SearchField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",

        };
    }
    componentDidMount() {
        this.setState({
            searchValue: (this.props.value ? this.props.value : '')
        });
    }
    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]: value
        })
    }

    handleKeyDown = e => {
        if (e.keyCode === ENTER_KEY) {
            // clearTimeout(this.timer)
            this.triggerChange()
        }
    }
    onSearch = () => {
        this.props.onSearch(this.state.searchValue)
    }
  
    render() {
        const { t } = this.props;
        const { searchValue } = this.state
        return (
            <div className="m_search">
                <label className="m_search--label d-none d-md-block">
                    {t(this.state.label ? this.state.label : "Search")}
                </label>
                <input className="m_search--input" type="text"
                    name="searchValue"
                    value={searchValue}
                    placeholder={this.props.placeholder ? t(this.props.placeholder) : t(this.props.label)}
                    onChange={this.onChange} onKeyDown={this.handleKeyDown}
                />
                <button className="m_search--button" type="button" onClick={this.onSearch}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default withTranslation()(SearchField);
