const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content modal__content_preview">
        <button type="button" onClick={onClose} className="modal__close-button">
          <img src={require("../Images/closeButton.svg").default} />
        </button>
        <img src={selectedCard.link} className="modal__image-preview" />
        <div className="modal__preview-text">
          <div>{selectedCard.name}</div>
          <div>Weather type: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
