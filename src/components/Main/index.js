import { useEffect, useState } from "react";
import Card from "../Card";
import { CONSTANTS} from "../core/constants";
import "./index.css"
const Main = () => {
  const [data, setData] = useState([]);
  const requestData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=Yerevan&appid=${CONSTANTS.API_KEY}&units=metric`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data from API");
        }
        return res.json();
      })
      .then((data) => {        
        let currentDay = new Date().getDate();
        setData(
          data.list.filter((obj) => {
            const date = new Date(obj.dt_txt);
            const dataDate = date.getDate();
            if (dataDate === currentDay) {
              currentDay++;
              return obj;
            }
            return undefined
          })
        );
      })
      .catch((err) => {
        console.error(err);
        alert("Please try again.");
      })
      .finally(() => {});
  };
  useEffect(() => {
    requestData();
  }, []);
  return (
    <div className="main__container">
      {data.map((dataObj, i) => {
        const currentWeekDay = new Date(dataObj.dt_txt).getDay();
        return (
         
          <Card
            key={i}
            weekDay={CONSTANTS.weekdays[currentWeekDay]}
            imgSrc={dataObj.weather[0].icon}
            temp={Math.round(dataObj.main.temp)}
            time= {dataObj.dt_txt.split(" ")[1]}
            day = {currentWeekDay}
          />
        );
      })}
    </div>
  );
};
export default Main;
