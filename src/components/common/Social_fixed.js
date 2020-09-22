import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Trans } from "react-i18next";
import { Link } from 'react-router-dom';
import { PHONE_NUMBER } from '../../contant';
import { useDispatch, useSelector } from "react-redux";
import { contactAddAction } from "../../store/action"
//components
import ChatOnline from '../common/Chat/ChatOnline'

const SocialFixed = (props) => {
	let dispatch = useDispatch()
	// const [showChat, setShowAdvisory] = useState(false);
	const [showPhone, setShowPhoneNumber] = useState(false);
	const ScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	const setShowAdvisory = (show) => {
		dispatch(contactAddAction.chatShow(show))
	}
	const chatBox = useSelector(state => state.contactAddReducer);
	let { showChat } = chatBox
	return (
		<>
			<ul className={`social_fixed ${showChat ? "active" : ''}`}>
				{
					PHONE_NUMBER ?
						<li>
							<a className={`phone ${showPhone ? "active" : ''}`} onClick={() => setShowPhoneNumber(!showPhone)}>
								<i className="icon fas fa-phone-alt" />
								<i className="text">{PHONE_NUMBER}</i>
							</a>
						</li>
						: null
				}

				<li>
					<a className="chat startChatOnline" onClick={() => setShowAdvisory(!showChat)}>
						<i className="icon fas fa-comments" />
					</a>
				</li>
				<li>
					<a className={`totop toTop`} onClick={() => ScrollToTop()} >
						<i className="icon fas fa-chevron-up" />
					</a>
				</li>
			</ul>

			<ChatOnline active={showChat} setActive={setShowAdvisory} />
		</>
	);
};
export default SocialFixed;
