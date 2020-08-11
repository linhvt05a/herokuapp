import React from 'react';
import { Trans } from 'react-i18next';

const ButtonBase = (props) => {
    const { className, label, placeholder, onClick, type, ...attr } = props;
    return (
        <button
            className={className}
            onClick={onClick}
            type={type ? type : 'submit'}
            {...attr}
        >
            {label}
        </button>
    )

}

export default ButtonBase;