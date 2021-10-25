import { Fragment } from "react";
import { selectorCurrentWeather } from "../../../app/AppSlice";
import { useSelector } from "../../../app/hooks";
import getWeatherImage from "../../utils/getWeatherImage";
import { RootState } from "../../../app/store";
import BarChart from "./ui/barChart";
import PieChart from "./ui/pieChart";
import styled from "styled-components";
import "./weather.css";

const Weather = () => {
  const cw = useSelector(selectorCurrentWeather);
  const weatherCityName = useSelector(
    (state: RootState) => state.app.weatherCityName
  );
  return cw ? (
    <WeatherContainer>
      <h1 className="weather-title">{`Weather Today ${cw.applicable_date}`}</h1>
      <div className="weather-content">
        <div className="weather-content-left">
          <h2>{weatherCityName}</h2>
          <div className="weather-content-left-icon">
            <img
              src={getWeatherImage(cw.weather_state_name)}
              alt={cw.weather_state_name}
            ></img>
            <h1>{`${Math.trunc(cw.the_temp)}°`}</h1>
          </div>
          <h2>{cw.weather_state_name}</h2>
        </div>
        <div className="weather-content-right">
          <p>{`Humidity`}</p>
          <PieChart value={cw.humidity} />
          <p>{`Min / Max Temp`}</p>
          <div className="weather-content-right-barchart">
            <BarChart
              min={{
                distance: Math.trunc(cw.min_temp),
                colors: ["#add9c0", "#4a6fa1"],
              }}
              max={{
                distance: Math.trunc(cw.max_temp),
                colors: ["#ff47ab", "#e0064e"],
              }}
            />
          </div>
        </div>
      </div>
    </WeatherContainer>
  ) : (<Fragment />);
};

export default Weather;

const WeatherContainer = styled.div`
  --weatherbgColor: ${({ theme }) => theme.weather.bgColor};
  --weatherTitleColor: ${({ theme }) => theme.weather.title};
  --pieChartbgColor: ${({ theme }) => theme.weather.pie.bgColor};
  --barChartbgColor: ${({ theme }) => theme.weather.bars.bgColor};
  width: 100%;
  height: 100%;
  background-color: var(--weatherbgColor);
  margin-top: 20px;
  padding: 1rem;
  border-radius: 1rem;
`;
