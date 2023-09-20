import CustomButton from "../customComponent/component/CustomButton";

const Header = () => {

  return (
    <>
      <div className="logo">header</div>
      <div className="rightDiv">
        <CustomButton labelText="123" className="btn" />
        <CustomButton labelText="123" className="btn" />
        <CustomButton labelText="123" className="btn" />
      </div>
    </>
  )

}

export default Header;