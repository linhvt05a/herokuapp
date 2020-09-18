import React, { Component } from "react";

const Heading = props => {
	let { translate } = props
	return (
		<>
			<h4 className="title text-uppercase">APP real ESTATE</h4>
			<h5 className="sub-title">
				{translate("application_note_0")}
			</h5>
		</>
	);
}

export default Heading;
