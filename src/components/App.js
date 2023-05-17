import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import { Profile } from "./Profile";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { defaultClothingItems } from "../utils/utils";
import { useEffect, useState } from "react";
import {
  getForecastWeather,
  parseWeatherData,
  temperature,
} from "../utils/WeatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { BrowserRouter, Route } from "react-router-dom";
import AddItemModal from "./AddItemModal";
import * as api from "../utils/Api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((currentTempState) => {
      return currentTempState === "C" ? "F" : "C";
    });
  };

  const handleAddItem = ({ name, link, weatherType }) => {
    api
      .addItems({
        name,
        link,
        weather: weatherType,
      })
      .then((res) => {
        console.log(res);
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteItem = (item) => {
    console.log(item);
    api.deleteItems(item._id).then(() => {
      const filteredCards = clothingItems.filter(
        (card) => card._id !== item._id
      );
      console.log(filteredCards);
      setClothingItems(filteredCards);
      handleCloseModal();
    });
  };

  return (
    <div>
      <BrowserRouter>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header onCreateModal={handleCreateModal} />
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile items={clothingItems} onSelectCard={handleSelectedCard} />
          </Route>
          <Footer />
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleDeleteItem}
            />
          )}
          {activeModal === "create" && (
            <AddItemModal
              onClose={handleCloseModal}
              isOpen={handleCreateModal}
              onAddItem={handleAddItem}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
