import "../scss/CustomButton.scss"

const CustomButton = (props) => {
  return (
    <button className={`customButton ${props.className ? props.className : ""}`}>
      {props.labelText}
    </button>
  )
}

export default CustomButton;