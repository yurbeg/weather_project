import { useEffect, useState } from "react";
import { CONSTANTS, ROUTE_CONSTANTS,dataInfo } from "../core/constants";
import Card from "../Card";
import { useParams, Link } from "react-router-dom";
import { Button } from "antd";
import "./index.css";
const HourlyData = ({city}) => {
  const { day } = useParams();
  const [data, setData] = useState([]);  
  useEffect(() => {
    if(!dataInfo){
      return
    }
      setData(
        dataInfo.list.filter((dataObj) => {
          const date = new Date(dataObj.dt_txt);
          return date.getDay() === +day;
        })
      );
  }, [day,city]);
  return (
    <div>
      <div className="hourly__container">
        {data.map((dataObj, i) => {
          const currentWeekDay = new Date(dataObj.dt_txt).getDay();
          return (
            <Card
              key={i}
              weekDay={CONSTANTS.weekdays[currentWeekDay]}
              imgSrc={dataObj.weather[0].icon}
              temp={Math.round(dataObj.main.temp)}
              time={dataObj.dt_txt.split(" ")[1]}
              path="."
            />
          );
        })}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Link to={ROUTE_CONSTANTS.MAIN}>
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default HourlyData;
