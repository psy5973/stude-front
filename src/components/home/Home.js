import { useState } from "react";
import CustomInput from "../../customComponent/component/CustomInput";

const Home = (props) => {
  // state
  const [searchValue, setSearchValue] = useState("")
  
  const handleChangeInput = (e) => {
    setSearchValue(e.value)
  }  
  return (
    <div id="home">
      <div className="searchBox">
        <div className="mainTitle">STU:De</div>
        <CustomInput 
          className="searchInput" 
          placeholder="키워드를 입력하세요." 
          width="20rem"
          height="3rem"
          onChange={e => handleChangeInput(e)}
        />      
      </div>

      {/* 인기 순 */}
      <div className="popular-groups">

      </div>
    </div>
  )
}

export default Home;