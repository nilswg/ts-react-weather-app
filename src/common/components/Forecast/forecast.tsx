import { Fragment } from "react";
import styled from "styled-components";
import { selectWeathers } from "../../../app/AppSlice";
import { useSelector } from "../../../app/hooks";
import getWeatherImage from "../../utils/getWeatherImage";
import "./forecast.css"

const Forecast = () => {
  const weathers = useSelector(selectWeathers);
  return weathers.length ? (
    <ForecastContainer>
      <h1 className="forecast-container-title">Following 5 Days Forecast</h1>
      <div className="forecast-context">
        {weathers?.map((w) => (
          <div className="forecast-item">
            <h3>{w.applicable_date}</h3>
            <img
              src={getWeatherImage(w.weather_state_name)}
              alt={w.weather_state_name}
            />
            <h3>{w.weather_state_name}</h3>
            <div className="forecast-last-item">
                <p>{`T:${Math.trunc(w.max_temp)}°/${Math.trunc(w.min_temp)}°`}</p>
                <p>{`H: ${w.humidity}%`}</p>
            </div>
          </div>
        ))}
      </div>
    </ForecastContainer>
  ) : (<Fragment />);
};

export default Forecast;


const ForecastContainer = styled.div`
  --forecastbgColor:${({ theme }) => theme.forecast.bgColor};
  --forecastTitleColor:${({ theme }) => theme.forecast.title};

  width: 100%;
  background-color: var(--forecastbgColor);
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 1rem;
`