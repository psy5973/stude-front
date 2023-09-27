import { useEffect, useState } from "react";
import CustomPaper from "../../customComponent/component/CustomPaper";

const RecommendGroups = () => {
  const [recommendList, setRecommendList] = useState([])


  useEffect(() => {
    setRecommendList([1, 2, 3])
  }, [])
  return (
    <div>
      <div className="title">추천 그룹</div>
      <div className="groupList">
        {recommendList.map((item, index) => {
          return (
            <div className="group">
              <CustomPaper>123</CustomPaper>
            </div>
          )
          })
        }
      </div>
    </div>
  )
}

export default RecommendGroups;