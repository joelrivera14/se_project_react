import { defaultClothingItems } from "../utils/utils";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { useMemo, useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { temperature } from "../utils/weatherApi";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const getWeatherType = () => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  const currentTemp = temperature(weatherTemp);
  const currentTempString = currentTemp[currentTemperatureUnit];

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="weather__main">
      <WeatherCard day={false} type="nightstormy" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {currentTempString} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              name={item.name}
              weather={item.weather}
              id={item.id}
              link={item.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Main;
