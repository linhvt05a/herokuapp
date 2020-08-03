import React, { Component } from 'react';
import { Trans } from 'react-i18next';
class CardTabFilter extends Component {
    render() {
        const { datas } = this.props;
        return (
            <thead>
                <tr className="sorter-header">
                    {
                        datas.map((item, index) =>
                            item.isSort === "true" ?
                                <th key={index} className={`text-uppercase border-top-0 sorterHeader ${item.sort}`} onClick={((e) => this.props.onClick(e, item))}><Trans>{item.label}</Trans></th> :
                                item.icon ? <th className="text-uppercase border-top-0 no-sort"><i className={item.icon}></i></th> : <th key={index} className={item.isCenter === "true" ? "text-uppercase border-top-0  no-sort" : ""}><Trans>{item.label}</Trans></th>
                        )}
                </tr>
            </thead>
        );
    }
}
export default CardTabFilter;
