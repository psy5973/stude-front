const CustomPaper = (props) => {
  const { 
    width = "",
    height = "",
    boderColor = "black"
  } = props;
  const getStyle = () => {
    let style = {};

    style.width = width;
    style.height = height;
    style.border = `1px solid ${boderColor}`

    return style;
  }

  return (
  <div /* className="customPaper" */
    style={getStyle()}
  >
    {props.children}
  </div>
  )
}

export default CustomPaper;