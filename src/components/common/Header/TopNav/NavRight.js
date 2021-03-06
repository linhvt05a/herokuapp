import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import i18n from '../../../../i18n';

import { IMAGE_URL } from '../../../../contant';
import { useDispatch, useSelector } from "react-redux";
import { contactAddAction } from "../../../../store/action"
import { getLocalStore } from '../../../../functions/Utils';

const NavRight = (props) => {
    let dispatch = useDispatch()
    const [inHover, setHover] = useState(false);
    const langCurrent = getLocalStore('language')
    // console.log(langCurrent);

    const changeLanguage = (lng) => {
        localStorage.setItem('language', JSON.stringify(lng));
        window.location.reload();
    }
    const setShowAdvisory = (show) => {
        dispatch(contactAddAction.chatShow(show))
    }
    const chatBox = useSelector(state => state.contactAddReducer);
    let { showChat } = chatBox

    return (
        <ul className="header_contact d-none d-md-flex">
            <li className="chat">
                <p className="mb-0 cursor-pointer" onClick={() => setShowAdvisory(!showChat)}>
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
                            <button className="language_link" onClick={() => changeLanguage('zh')}>
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


export default React.memo(NavRight);