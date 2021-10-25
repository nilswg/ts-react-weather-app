import reqWeather from "../../../../api/reqWeater";
import { useDispatch } from "../../../../app/hooks";
import WeatherData from "../../../interfaces/weatherData";
import { setLoading, setWeatherCityName, setWeathers } from "../../../../app/AppSlice";

interface LocationItemProps {
  id: string;
  cityName: string;
  hiddenSearchResult:Function;
}

const LocationItem = (props: LocationItemProps) => {
  const { id, cityName, hiddenSearchResult } = props;
  const dispatch = useDispatch();

  const onClick = () => {

    hiddenSearchResult();

    dispatch(setWeatherCityName(cityName));

    dispatch(setLoading(true));
    reqWeather(id).then(
      (res: WeatherData[]) => {
        dispatch(setLoading(false));
        dispatch(setWeathers({ weathers: res }));
      },
      (err) => {
        console.error(err);
      }
    );
  };

  return (
    <a id={id} onClick={onClick}>
      {cityName}
    </a>
  );
};

export default LocationItem;
