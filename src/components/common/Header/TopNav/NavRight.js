import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import i18n from '../../../../i18n';

import { IMAGE_URL } from '../../../../contant'


const NavRight = (props) => {
    const [inHover, setHover] = useState(false);
    const [show, setShowAdvisory] = useState(false);

    const langCurrent = localStorage.getItem('language')
    // console.log(langCurrent);

    const changeLanguage = (lng) => {
        localStorage.setItem('language', lng);
        i18n.changeLanguage(lng);
    }


    return (
        <ul className="header_contact d-none d-md-flex">
            <li className="chat">
                <p className="mb-0 cursor-pointer" onClick={() => setShowAdvisory(!show)}>
                    <i className="fas fa-comments" />
                    <Trans>header_menu_advisory</Trans>
                </p>
            </li>
            <li className="phone">
                <Link to="/#">
                    <i className="fas fa-phone-alt" />
                    1900 - 123 - 456
                </Link>
            </li>
            <li className="languages">

                <div className={`dropdown ${inHover ? "open" : ''}`} onMouseLeave={() => setHover(false)}>

                    <button
                        className="dropdown-toggle"
                        onMouseEnter={() => setHover(true)}
                        aria-expanded={inHover}>
                        <ImgLanguageSelected data={langCurrent} />
                        <i className="icon_arrow fas fa-chevron-down" />
                    </button>
                    <ul className="dropdown-menu pull-right" >
                        <li className={`${langCurrent == 'vi' ? 'd-none' : ''}`} >
                            <button className="language_link" onClick={() => changeLanguage('vi')}>
                                <img
                                    alt="languages vietnamese"
                                    src={`${IMAGE_URL}images/lang_vi.jpg`}
                                />
                                <span><Trans>lang_vi</Trans></span>
                            </button>
                        </li>
                        <li className={`${langCurrent == 'en' ? 'd-none' : ''}`} >
                            <button className="language_link" onClick={() => changeLanguage('en')}>
                                <img
                                    alt="languages english"
                                    src={`${IMAGE_URL}images/lang_en.jpg`}
                                />
                                <span><Trans>lang_en</Trans></span>
                            </button>
                        </li  >
                        <li className={`${langCurrent == 'cn' ? 'd-none' : ''}`}>
                            <button className="language_link" onClick={() => changeLanguage('cn')}>
                                <img
                                    alt="languages china"
                                    src={`${IMAGE_URL}images/lang_cn.jpg`}
                                />
                                <span><Trans>lang_cn</Trans></span>
                            </button>
                        </li>
                    </ul>
                </div>

            </li>
        </ul>
    )
}

const ImgLanguageSelected = (props) => {
    let { data } = props;
    // console.log(2,data);

    return (
        <img
            src={`${IMAGE_URL}images/lang_${data}.jpg`}
            alt={`languages ${data}`}
        />
    )
}


export default NavRight;