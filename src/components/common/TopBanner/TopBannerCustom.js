import React from 'react';
const TopBannerCustom = (props) => {
   
    return (
        <div 
            className={`top_banner--detail ${props.className} ` } 
            style={{ 
                backgroundImage: `url(${props.img})`,
            }}
        ></div>
    )
}
export default TopBannerCustom;
