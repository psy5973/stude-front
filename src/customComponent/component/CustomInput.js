import { useState } from "react"
import "../scss/CustomInput.scss"

const CustomInput = (props) => {
  const [className, setClassName] = useState("customInput")

  const setStyle = () => {
    let style = {}
    style.width = props.width;
    style.height = props.height;

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
      className={`${className} ${props.className}`} 
      placeholder={props.placeholder}
      onChange={e => handleChange(e)}
    />
  )
}

CustomInput.defaultProps = {
  width: "10rem",
  height: "2rem",
  className: "",
  placeholder: ""
};

export default CustomInput;