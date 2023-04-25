import logo from "../logo.svg";
import "../Blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import { useState } from "react";

function App() {
  const weatherTemp = "45° F";
  const [activeModal, setActiveModal] = useState("");
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="new garment" onClose={handleCloseModal}>
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
    </div>
  );
}

export default App;
