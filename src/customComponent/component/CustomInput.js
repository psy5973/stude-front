// import { useState } from "react"
import "../scss/CustomInput.scss"

const CustomInput = (props) => {
  // defaultProps
  const {
    width = "10rem",
    height = "2rem",
    className = "",
    placeholder = "",
  } = props;

  const setStyle = () => {
    let style = {}
    style.width = width;
    style.height = height;

    return style;
  }

  const handleChange = (e) => {
    let event = {
      value: e.target.value,
      lastInputValue: e.nativeEvent.data
    }

    props.onChange(event)
  }

  return(
    <input 
      style={setStyle()} 
      className={`customInput ${className}`} 
      placeholder={placeholder}
      onChange={e => handleChange(e)}
    />
  )
}

export default CustomInput;