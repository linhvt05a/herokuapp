import React, { Component } from "react";
import { Link } from "react-router-dom";
const Download = () => {
	return (
		<div className="stores">
			<div className="item">
				<Link to="/playstore" className="heading">
					<i className="icon fab fa-google-play" />
					<p className="text">
						<span className="top">Tải ứng dụng từ</span>
						<span className="bottom">PLAY STORE</span>
					</p>
				</Link>
				<figure className="qr_code">
					<img src="../images/qr_code.jpg" alt="PLAY STORE" />
				</figure>
			</div>
			<div className="item">
				<Link to="/appstore" className="heading">
					<i className="icon fab fa-apple" />
					<p className="text">
						<span className="top">Đã có sẳn trên</span>
						<span className="bottom">APP STORE</span>
					</p>
				</Link>
				<figure className="qr_code">
					<img src="../images/qr_code.jpg" alt="PLAY STORE" />
				</figure>
			</div>
		</div>
	);
}

export default Download;
