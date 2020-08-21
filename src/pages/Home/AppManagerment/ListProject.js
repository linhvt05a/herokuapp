import React, { Component } from "react";

const ListProject = () => {
  const list = [
    {
      name: "Quản lý dự án",
      des:
        "Xây dựng các công trình bất động sản chất lượng, đạt chuẩn cao cấp và đáp ứng yêu cầu của bạn",
    },
    {
      name: "Quản lý dự án",
      des:
        "Xây dựng các công trình bất động sản chất lượng, đạt chuẩn cao cấp và đáp ứng yêu cầu của bạn",
    },
    {
      name: "Quản lý dự án",
      des:
        "Xây dựng các công trình bất động sản chất lượng, đạt chuẩn cao cấp và đáp ứng yêu cầu của bạn",
    },
    {
      name: "Quản lý dự án",
      des:
        "Xây dựng các công trình bất động sản chất lượng, đạt chuẩn cao cấp và đáp ứng yêu cầu của bạn",
    },
    {
      name: "Quản lý dự án",
      des:
        "Xây dựng các công trình bất động sản chất lượng, đạt chuẩn cao cấp và đáp ứng yêu cầu của bạn",
    },
    {
      name: "Quản lý dự án",
      des:
        "Xây dựng các công trình bất động sản chất lượng, đạt chuẩn cao cấp và đáp ứng yêu cầu của bạn",
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
