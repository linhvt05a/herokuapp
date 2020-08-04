import React from 'react';

const m_header = (props) => {
    return (
        <div class="m_heading">
            <button class="m_button no-event"><span>{props.name}</span></button>
            {props.dropdown ?
                <div class="dropdown m_select m_dropdown">
                    <button class=" m_select--label m_dropdown--label square  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {props.dropdown.title}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {props.dropdown.data.map((value, index) => {
                            return <a key={index} class="dropdown-item" href={`${value.href}`}>{value.label.toUpperCase()}</a>
                        })}
                    </div>
                </div>
                : null}
        </div>
    )
}
export default m_header;