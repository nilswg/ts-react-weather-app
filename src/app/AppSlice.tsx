import { createSelector, createSlice } from "@reduxjs/toolkit";
import LocationData from "../common/interfaces/locationData";
import WeatherData from "../common/interfaces/weatherData";
import { RootState } from "./store";

export interface AppState {
  darkMode: boolean;
  loading: boolean;
  locations: LocationData[];
  weathers: WeatherData[];
  weatherCityName: string;
  searchInput: string;
}

// const testWeatherData = [
//   {
//     "id": 6405636616093696,
//     "weather_state_name": "Heavy Cloud",
//     "weather_state_abbr": "hc",
//     "wind_direction_compass": "SSW",
//     "created": "2021-10-23T15:59:02.033333Z",
//     "applicable_date": "2021-10-23",
//     "min_temp": 6.355,
//     "max_temp": 14.280000000000001,
//     "the_temp": 13.32,
//     "wind_speed": 4.273517302219041,
//     "wind_direction": 197.73224499203155,
//     "air_pressure": 1026,
//     "humidity": 66,
//     "visibility": 11.982832756700866,
//     "predictability": 71
//   }
// ]

const initialState: AppState = {
  darkMode: JSON.parse(localStorage.getItem("dark_mode") as string) as boolean,
  loading: false,
  locations: [],
  weathers: [],
  weatherCityName:"",
  searchInput:"",
};

const reducers = {
  setDarkMode: (state: AppState) => {
    localStorage.setItem("dark_mode", (!state.darkMode).toString());
    state.darkMode = !state.darkMode;
  },
  setLoading: (state: AppState, action: { payload: boolean }) => {
    state.loading = action.payload;
  },
  setLocations:(state: AppState, action: { payload: { locations: LocationData[] }}) => {
    state.locations = action.payload.locations;
  },
  setWeathers: (state: AppState, action: { payload: { weathers: WeatherData[] }}) => {
    state.weathers = action.payload.weathers;
  },
  setWeatherCityName:(state: AppState, action: { payload: string}) => {
    state.weatherCityName = action.payload;
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers,
});

export const { setDarkMode, setLoading, setLocations, setWeathers, setWeatherCityName } = appSlice.actions;
export default appSlice.reducer;


export const selectWeathers = (state:RootState) => state.app.weathers
export const selectorCurrentWeather = createSelector(
    [selectWeathers],
    (weathers) => weathers[0]
)

