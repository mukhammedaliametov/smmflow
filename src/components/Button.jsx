import React from "react";

const Button = (props) => {
  return (
    <button className="bg-[#1D4ED8] text-white py-[13px] px-[25px] rounded-[6px] cursor-pointer">
      {props.name}
    </button>
  );
};

export default Button;
