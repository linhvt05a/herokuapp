import React, { Component } from 'react'

const data = [
    {
        img: "./assets/images/item_promotion.png",
        alt: "Khuyến Mãi Tháng 9"
    },
]
export default class Promotion extends Component {
    render() {
        return (
            <div className="promotion">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={item.img} alt={item.alt} width={139} height={44}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
