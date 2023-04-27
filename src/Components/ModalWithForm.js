import "../blocks/ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "add garment",
  title,
  onClose,
  name,
}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close-button">
          <img src={require("../images/closeButton.svg").default} />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form>{children}</form>
        <button className="modal__button-submit" type="submit">
          <img src={require("../images/addgarmentdisabled.svg").default} />
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
