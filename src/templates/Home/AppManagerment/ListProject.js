import React, { Component } from "react";

const ListProject = props => {
	let { translate } = props
	const list = [
		{
			id: 1,
			name: translate("project_management"),
			des: translate("application_note_1"),
		},
		{
			id: 2,
			name: "Quản lý dự án 2",
			des:
				translate("application_note_2"),
		},
		{
			id: 3,
			name: "Quản lý dự án 3",
			des:
				translate("application_note_3"),
		},
		{
			id: 4,
			name: "Quản lý dự án 4",
			des:
				translate("application_note_4"),
		},
		{
			id: 5,
			name: "Quản lý dự án 5",
			des:
				translate("application_note_5"),
		},
		{
			id: 6,
			name: "Quản lý dự án 6",
			des:
				translate("application_note_6"),
		},
	];
	return (
		<ul className="features">
			{list.map((Item, index) => (
				<ItemOverList key={index} item={Item} />
			))}
		</ul>
	);
};

const ItemOverList = (props) => {
	const { item } = props;
	return (
		<li>
			<p className="name">{item.name}</p>
			<p className="des">{item.des}</p>
		</li>
	);
};

export default ListProject;
