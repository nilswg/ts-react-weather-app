import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "../common/components/Header/header";
import Spinner from "../common/components/Spinner/spinner";
import Search from "../common/components/Search/search";
import FiveDaysForecast from "../common/components/Forecast/forecast";
import Weather from "../common/components/Weather/weather";
import { RootState } from "./store";
import { darkTheme, lightTheme } from "./theme";
import "./App.css";

function App() {
  const darkMode = useSelector((state: RootState) => state.app.darkMode);
  const loading = useSelector((state: RootState) => state.app.loading);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {loading && <Spinner />}
      <Header />
      <Search />
      <Weather />
      <FiveDaysForecast />
    </ThemeProvider>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  body{
    background: ${({ theme }) =>
      `url(${theme.backgroundImage}) no-repeat center 120%, 
       linear-gradient(${theme.backgroundGradient[0]} 0%, ${theme.backgroundGradient[1]} 100%)`};
  }
`;
