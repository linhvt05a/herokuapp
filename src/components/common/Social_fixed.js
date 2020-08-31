import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Trans } from "react-i18next";
import { Link } from 'react-router-dom';
import { PHONE_NUMBER } from '../../contant';

//components
import ChatOnline from '../common/Chat/ChatOnline'

const SocialFixed = (props) => {
	const [showChat, setShowAdvisory] = useState(false);
	const [showPhone, setShowPhoneNumber] = useState(false);
	const SlideActions =  useRef();

	const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollIconActive, setScrollIconActive] = useState(false);
	const ScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
	}
	

    useEffect(() => {

		const heightBorder = document.getElementsByClassName('header_border')[0].clientHeight
		console.log("1",heightBorder);
		console.log("2",scrollTop);
        const handleScroll = (e) => {
			setScrollTop(e.target.documentElement.scrollTop);
			setScrolling(e.target.documentElement.scrollTop > heightBorder);
			if(scrollTop > heightBorder){
				setScrollIconActive(!scrollIconActive)
			}
        }

        window.addEventListener('scroll', handleScroll);
		
        return () => { 
            window.removeEventListener('scroll', handleScroll) 
			
        }
    },[scrollTop]);


	return (
		<>
			<ul className={`social_fixed ${showChat ? "active" : ''}`}>
				{
					PHONE_NUMBER ? 
						<li>
							<Link to="/#" className={`phone ${showPhone ? "active" : ''}`}  onClick={() => setShowPhoneNumber(!showPhone)}>
								<i className="icon fas fa-phone-alt" />
								<i className="text">{ PHONE_NUMBER }</i>
							</Link>
						</li>
					: null
				}

                <li>
                    <Link to="/#" className="chat startChatOnline" onClick={() => setShowAdvisory(!showChat)}>
                        <i className="icon fas fa-comments" />
                    </Link>
                </li>
                <li>
                    <Link to="/#" className={`totop toTop ${scrollIconActive ? 'active' : ''}`} onClick={() => ScrollToTop()} >
                        <i className="icon fas fa-chevron-up" />
                    </Link>
                </li>
			</ul>

			<ChatOnline active={showChat} setActive={setShowAdvisory} />
		</>
	);
};
export default SocialFixed;
