import React from "react";

const CardButton = (props) => {
  const{label, icon, showModel} = props
  return (
        <li className="tu_van chat startChatOnline" onClick={showModel}>
          <i className={icon} />
          <span>{label}</span>
      </li>
  );
};

export default CardButton;
