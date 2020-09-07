import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Trans } from "react-i18next";
import { Link } from 'react-router-dom';
import { PHONE_NUMBER } from '../../contant';
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../store/action"
//components
import ChatOnline from '../common/Chat/ChatOnline'

const SocialFixed = (props) => {
	// const [showChat, setShowAdvisory] = useState(false);
	const [showPhone, setShowPhoneNumber] = useState(false);
	const ScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	const setShowAdvisory = () => {
		dispatch(examAction.loadChat(showChat))
	}
	const dispatch = useDispatch();
	const chat = useSelector(state => state.examReducer);
	let { showChat } = chat
	return (
		<>
			<ul className={`social_fixed ${showChat ? "active" : ''}`}>
				{
					PHONE_NUMBER ?
						<li>
							<Link to="/#" className={`phone ${showPhone ? "active" : ''}`} onClick={() => setShowPhoneNumber(!showPhone)}>
								<i className="icon fas fa-phone-alt" />
								<i className="text">{PHONE_NUMBER}</i>
							</Link>
						</li>
						: null
				}

				<li>
					<Link to="/#" className="chat startChatOnline" onClick={() => setShowAdvisory()}>
						<i className="icon fas fa-comments" />
					</Link>
				</li>
				<li>
					<Link to="/#" className={`totop toTop`} onClick={() => ScrollToTop()} >
						<i className="icon fas fa-chevron-up" />
					</Link>
				</li>
			</ul>

			<ChatOnline active={showChat} setActive={setShowAdvisory} />
		</>
	);
};
export default SocialFixed;
