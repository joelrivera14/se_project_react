import ModalWithForm from "./ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({ isOpen, onClose, signUp, openLoginModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      avatar: avatar,
      name: name,
      email: email,
      password: password,
    };
    signUp(user);
    console.log(user);
  }

  // function nameChange(e) {
  //   setName(e.target.value);
  // }

  //  function emailChange(e) {
  //     setEmail(e.target.value);
  //   }

  // function passwordChange(e) {
  //   setPassword(e.target.value);
  // }

  // function avatarChange(e) {
  //   setAvatar(e.target.value);
  // }

  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setPassword("");
      setAvatar("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign Up"
      onClick={onClose}
      onSubmit={handleSubmit}
      buttonText="Next"
      text={
        <span className="modal__span">
          or
          <button onClick={openLoginModal} className="modal__other_button">
            Log in
          </button>
        </span>
      }
    >
      <div className="modal__labels">
        <label className="modal__label">
          Email*
          <input
            className="modal__input"
            type="email"
            name="link"
            minLength="1"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="modal__label">
          Password*
          <input
            className="modal__input"
            type="password"
            name="link"
            minLength="1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            name="name"
            minLength="1"
            maxLength="3000"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="modal__label">
          Avatar URL
          <input
            className="modal__input"
            type="url"
            name="link"
            minLength="1"
            placeholder="Avatar URL"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
