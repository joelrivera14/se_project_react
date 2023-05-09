import "../blocks/Weather.css";
import "../blocks/card.css";
import CurrentTempUnitContext from "../utils/CurrentTempUnitContext";
import React, { useContext } from "react";
import { temperature } from "../utils/WeatherApi";

const weatherOptions = [
  { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/day/foggy.svg").default, day: true, type: "foggy" },
  {
    url: require("../images/day/rainy.svg").default,
    day: true,
    type: "rainy",
  },
  { url: require("../images/day/snowy.svg").default, day: true, type: "snowy" },
  {
    url: require("../images/day/stormy.svg").default,
    day: true,
    type: "stormy",
  },
  {
    url: require("../images/night/moon.svg").default,
    day: false,
    type: "moon",
  },
  {
    url: require("../images/night/nightcloudy.svg").default,
    day: false,
    type: "nightcloudy",
  },
  {
    url: require("../images/night/nightfoggy.svg").default,
    day: false,
    type: "nightfoggy",
  },
  {
    url: require("../images/night/nightrainy.svg").default,
    day: false,
    type: "nightrainy",
  },
  {
    url: require("../images/night/nightsnowy.svg").default,
    day: false,
    type: "nightsnowy",
  },
  {
    url: require("../images/night/nightstormy.svg").default,
    day: false,
    type: "nightstormy",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  console.log(day, type, weatherTemp, currentTempUnit);
  const currentTemp = temperature(weatherTemp);
  console.log(currentTemp);
  const currentTempString = currentTemp[currentTempUnit];

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <>
      <section className="weather" id="weather">
        <div className="weather__temp">{currentTempString}</div>
        <div>
          <img src={imageSrcUrl} className="weather__image" />
        </div>
      </section>
      <section id="weather__cards"></section>
    </>
  );
};

export default WeatherCard;
