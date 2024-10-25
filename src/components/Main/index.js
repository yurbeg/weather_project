import { useEffect, useState } from "react";
import Card from "../Card";
import { CONSTANTS, ROUTE_CONSTANTS, handleRequest } from "../core/constants";
import "./index.css";
const Main = ({ city }) => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    handleRequest((data) => {
      let currentDay = new Date().getDate();
      setData(
        data.list.filter((obj) => {
          const date = new Date(obj.dt_txt);
          const dataDate = date.getDate();
          if (dataDate === currentDay) {
            currentDay++;
            return obj;
          }
          return undefined;
        })
      );
    },city);
  }, [city]);
  return (
    <div>
      <div className="main__container">
        {data.map((dataObj, i) => {
          const currentWeekDay = new Date(dataObj.dt_txt).getDay();
          return (
            <Card
              key={i}
              weekDay={CONSTANTS.weekdays[currentWeekDay]}
              imgSrc={dataObj.weather[0].icon}
              temp={Math.round(dataObj.main.temp)}
              time={dataObj.dt_txt.split(" ")[1]}
              path={`${ROUTE_CONSTANTS.CARD}/${currentWeekDay}`}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Main;
