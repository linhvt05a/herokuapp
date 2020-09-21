import React, { Component } from "react";

const ListProject = props => {
	let { translate } = props
	const list = [
		{
			id: 1,
			name: translate("project_management_label"),
			des: translate("project_management_application_des"),
		},
		{
			id: 2,
			name: "Quản lý dự án 2",
			des:
				translate("project_management_application_des"),
		},
		{
			id: 3,
			name: "Quản lý dự án 3",
			des:
				translate("project_management_application_des"),
		},
		{
			id: 4,
			name: "Quản lý dự án 4",
			des:
				translate("project_management_application_des"),
		},
		{
			id: 5,
			name: "Quản lý dự án 5",
			des:
				translate("project_management_application_des"),
		},
		{
			id: 6,
			name: "Quản lý dự án 6",
			des:
				translate("project_management_application_des"),
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
