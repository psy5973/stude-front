// import { useEffect, useState } from "react";
import "../scss/CustomButton.scss"

const CustomButton = (props) => {
  const {
    type = "normal", // normal, textBtn
    // width = "",
    // height = "",
    // size = "normal", // small, normal, big
    className = ""
  } = props;


  const handleClick = (e) => {
    if(props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <button 
    onClick={e => handleClick(e)} 
    className={`customButton ${type}Btn ${className}`}
    >
      {props.labelText}
    </button>
  )
}

CustomButton.defaultProps = {
  type: "normal", // normal, textBtn
  width: "",
  height: "",
  size: "normal", // small, normal, big
  className: ""
};

export default CustomButton;