import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

export default function EditProfileModal({ onClose, isOpen, editUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, avatar);
    editUser({ name, avatar });
  }

  function handleAvatar(e) {
    setAvatar(e.target.value);
  }
  function handleName(e) {
    setName(e.target.value);
  }

  useEffect(() => {
    if (isOpen) {
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Change profile data"
      onClick={onClose}
      onSubmit={handleSubmit}
      buttonText="Save changes"
      name="edit"
    >
      <div className="modal__labels">
        <label className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            name="name"
            minLength="1"
            maxLength="3000"
            placeholder="Name"
            value={currentUser.name}
            onChange={handleName}
          />
        </label>
        <label className="modal__label">
          Avatar
          <input
            className="modal__input"
            type="url"
            name="link"
            minLength="1"
            placeholder="Image Url"
            value={currentUser.avatar}
            onChange={handleAvatar}
          />
        </label>
      </div>
    </ModalWithForm>
  );
}
