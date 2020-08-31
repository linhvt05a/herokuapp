import React from 'react';
import { Trans } from "react-i18next";

const NavLeft = (props) => {
    return (
        <div className="header_promotion">
            <div className="text">
                <span className="highlight">
                    <Trans>header_promotion_text_highlight</Trans>
                </span>
                <Trans>header_promotion_text</Trans>
            </div>
        </div>
    )
}
export default NavLeft;