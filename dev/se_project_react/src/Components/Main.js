import { defaultClothingItems } from "./utils";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

function Main({ weatherTemp }) {
  return (
    <main className="weather__main">
      <WeatherCard day={false} type="nightstormy" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card_items">
          {defaultClothingItems.map((x) => (
            <ItemCard x={x} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
