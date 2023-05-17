import "../blocks/Weather.css";
import "../blocks/card.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import React, { useContext } from "react";
import { temperature } from "../utils/weatherApi";
import { weatherOptions } from "../utils/Constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weather = (item) => {
    return item.day === day && item.type === type;
  };

  const weatherOption = weatherOptions.find(weather);

  const currentTemp = temperature(weatherTemp);
  console.log(currentTemp);
  const currentTempString = currentTemp[currentTemperatureUnit];

  const imageSrcUrl = weatherOption.url || "";
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
