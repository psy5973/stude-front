import CustomButton from "../../customComponent/component/CustomButton";

const Header = () => {
  return (
    <>
      {/* <div className="logo">header</div> */}
      <div className="rightDiv">
        <CustomButton labelText="123" className="btn" type="text" />
        <CustomButton labelText="456" className="btn" type="text" />
        <CustomButton labelText="789" className="btn" type="text" />
      </div>
    </>
  )
}

export default Header;