import { Typography } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
const Card = ({ weekDay, imgSrc, temp, time, path }) => {
  return (
    <div className="card__container">
      <Link to={`${path}`} style={{ textDecoration: "none" }}>
        <Typography.Title level={3}>{weekDay}</Typography.Title>
        <img
          src={`https://openweathermap.org/img/wn/${imgSrc}@2x.png`}
          alt="imagee"
        />
        <p> {temp}° </p>
        <p> {time} </p>
      </Link>
    </div>
  );
};
export default Card;
