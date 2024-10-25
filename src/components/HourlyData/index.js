import { useEffect, useState } from "react";
import { CONSTANTS, ROUTE_CONSTANTS } from "../core/constants";
import Card from "../Card";
import { useParams,Link } from "react-router-dom";
import { Button } from "antd";
import  "./index.css"
const HourlyData = ()=>{
    const { day } = useParams() 
    const [ data,setData ] = useState([])
      useEffect(() => {
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
                setData(data.list.filter((dataObj)=>{
                  const date = new Date(dataObj.dt_txt);                    
                  return date.getDay() === +day
                }))
          })
          .catch((err) => {
            console.error(err);
            alert("Please try again.");
          })
          .finally(() => {});
      }, [day]);
    return (
        <div>
          <div className="hourly__container">
        {
        data.map((dataObj, i) => {
          
          const currentWeekDay = new Date(dataObj.dt_txt).getDay();
          return (
            <Card
              key={i}
              weekDay={CONSTANTS.weekdays[currentWeekDay]}
              imgSrc={dataObj.weather[0].icon}
              temp={Math.round(dataObj.main.temp)}
              time= {dataObj.dt_txt.split(" ")[1]}
            />
          );
        })}
        </div>
              <Link to={ROUTE_CONSTANTS.MAIN}>
                  <Button>Back</Button>
              </Link>
        </div>
    )
}

export default HourlyData