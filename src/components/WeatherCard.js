import "../blocks/Weather.css";
import "../blocks/ItemCard.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import React, { useContext } from "react";
import { temperature } from "../utils/weatherApi";
import { weatherOptions } from "../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const checkWeatherOption = (item) => {
    return item.day === day && item.type === type;
  };

  const weatherOption = weatherOptions.find(checkWeatherOption);

  const currentTemp = temperature(weatherTemp);

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
