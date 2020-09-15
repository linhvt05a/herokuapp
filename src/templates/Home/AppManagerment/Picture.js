import React, { Component } from "react";
import {IMAGE_URL} from '../../../contant'

const Picture = () => {
	return (
		<div>
			<figure className="app_managerment--right">
				<img
					className="w-100"
					src={`${IMAGE_URL}images/icon_phone.png`}
					alt="Ứng dụng quản lý"
				/>
			</figure>
		</div>
	);
}

export default Picture;
