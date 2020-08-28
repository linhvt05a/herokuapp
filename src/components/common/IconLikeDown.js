import React, { Component } from 'react'

export default class IconLikeDown extends Component {
    render() {
        return (
            <ul class="icon_like_down">
                <li>
                    <i class="fas fa-download"></i>
                </li>
                <li>
                    <i class="liked active fas fa-heart"></i>
                </li>
            </ul>
        )
    }
}
