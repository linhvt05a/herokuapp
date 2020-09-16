import React, { Component } from 'react'

export default class IconLikeDown extends Component {
    render() {
        return (
            <ul className="icon_like_down">
                <li>
                    <i className="fas fa-download"></i>
                </li>
                <li>
                    <i className="liked active fas fa-heart"></i>
                </li>
            </ul>
        )
    }
}
