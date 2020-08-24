import React, { Component } from "react";

const CardSearch = () => {
  return (
    <div className="options__search">
      <div className="text">Tìm kiếm</div>
      <i className="icon fas fa-search" />
      <div className="search form-group">
        <input
          type="text"
          className="w-100 form-control"
          placeholder="Nhập nội dung"
        />
      </div>
    </div>
  );
};
export default CardSearch;
