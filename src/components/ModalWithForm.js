import "../blocks/ModalWithForm.css";
import closeButton from "../images/closeButton.svg";
import addgarmentdisabled from "../images/addgarmentdisabled.svg";

const ModalWithForm = ({
  children,
  buttonText = "add garment",
  title,
  onClick,
  name,
  onSubmit,
}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
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
