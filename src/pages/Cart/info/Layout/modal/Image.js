import React from 'react';

const Image = props => {
    return (
        <img style={{ width: props.width }} src={props.data ? props.data[0].floor_or_lot_avatar_url : null} />
    )
}

export default React.memo(Image)