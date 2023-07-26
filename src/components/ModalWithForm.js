import "../blocks/ModalWithForm.css";
import closeButton from "../images/closeButton.svg";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClick,
  name,
  onSubmit,
}) => {
  return (
    <div className="modal">
      <div className={`modal__content modal_content_${name}`}>
        <button type="button" onClick={onClick} className="modal__close-button">
          <img src={closeButton} alt="close button" />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <button className="modal__button-submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
