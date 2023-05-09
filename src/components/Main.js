import { defaultClothingItems } from "../utils/utils";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { useMemo, useContext } from "react";
import CurrentTempUnitContext from "../utils/CurrentTempUnitContext";
import { temperature } from "../utils/WeatherApi";

function Main({ weatherTemp, onSelectCard }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const currentTemp = temperature(weatherTemp);
  const currentTempString = currentTemp[currentTempUnit];

  const filteredCards = defaultClothingItems.filter((item) => {
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
