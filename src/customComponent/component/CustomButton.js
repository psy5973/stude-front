import "../scss/CustomButton.scss"

const CustomButton = (props) => {
  const setClassName = () => {
    const { type } = props;

    let className = "customButton"

    className += ` ${type}Btn`

    return className;
  }

  const handleClick = (e) => {
    props.onClick(e)
  }


  return (
    <button onClick={e => handleClick(e)} className={`${setClassName()} ${props.className ? props.className : ""}`}>
      {props.labelText}
    </button>
  )
}

CustomButton.defaultProps = {
  type: "normal", // normal, textBtn
  width: "",
  height: "",
  size: "normal" // small, normal, big
};

export default CustomButton;