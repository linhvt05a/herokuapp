import React, { Component } from "react";

const Heading = props => {
	let { translate } = props
	return (
		<>
			<h4 className="title text-uppercase">APP real ESTATE</h4>
			<h5 className="sub-title">
				{translate("home_management_application_note")}
			</h5>
		</>
	);
}

export default Heading;
