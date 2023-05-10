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
import CurrentTempUnitContext from "../utils/CurrentTempUnitContext";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  // const weatherTemp = "45° F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

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
    setCurrentTempUnit((currentTempState) => {
      return currentTempState === "C" ? "F" : "C";
    });
  };

  return (
    <div>
      <BrowserRouter>
        <CurrentTempUnitContext.Provider
          value={{ currentTempUnit, handleToggleSwitchChange }}
        >
          <Header onCreateModal={handleCreateModal} />
          <Route exact path="/">
            <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
          </Route>
          <Route path="/profile">
            <Profile items={defaultClothingItems} />
          </Route>
          <Footer />
          {activeModal === "create" && (
            <ModalWithForm title="New garment" onClose={handleCloseModal}>
              <div className="modal__labels">
                <label className="modal__label">
                  Name
                  <input
                    className="modal__input"
                    type="text"
                    name="name"
                    minLength="1"
                    maxLength="30"
                    placeholder="Name"
                  />
                </label>
                <label className="modal__label">
                  Image
                  <input
                    className="modal__input"
                    type="url"
                    name="link"
                    minLength="1"
                    maxLength="30"
                    placeholder="Image Url"
                  />
                </label>
              </div>
              <p className="modal__paragraph">Select the weather type:</p>
              <div className="modal__radios">
                <div className="modal__radio">
                  <input
                    className="modal__input-radio"
                    type="radio"
                    id="hot"
                    value="hot"
                  />
                  <label>Hot</label>
                </div>
                <div className="modal__radio">
                  <input
                    className="modal__input-radio"
                    type="radio"
                    id="warm"
                    value="warm"
                  />
                  <label>Warm</label>
                </div>
                <div className="modal__radio">
                  <input
                    className="modal__input-radio"
                    type="radio"
                    id="cold"
                    value="cold"
                  />
                  <label>Cold</label>
                </div>
              </div>
            </ModalWithForm>
          )}
          {activeModal === "preview" && (
            <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
          )}
        </CurrentTempUnitContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
