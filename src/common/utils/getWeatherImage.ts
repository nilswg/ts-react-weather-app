const abbreviation = new Map([
  ["Snow", "sn"],
  ["Sleet", "sl"],
  ["Hail", "h"],
  ["Thunderstorm", "t"],
  ["Heavy Rain", "hr"],
  ["Light Rain", "lr"],
  ["Showers", "s"],
  ["Heavy Cloud", "hc"],
  ["Light Cloud", "lc"],
  ["Clear", "c"],
]);

const url = "https://www.metaweather.com/static/img/weather/";

const getImage = (weatherName: string): string => {
  if (!abbreviation.has(weatherName)) {
    throw Error("weather svg doesn't exit.");
  }
  return `${url}${abbreviation.get(weatherName)}.svg`;
};

export default getImage;
