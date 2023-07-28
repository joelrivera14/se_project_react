import ModalWithForm from "./ModalWithForm";
import { useState, useEffect } from "react";

const LogInModal = ({ isOpen, onClose, signIn, openRegisterModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    signIn(user);
    console.log(user);
  }

  // function emailChange(e) {
  //   setEmail(e.target.value);
  // }

  // function passwordChange(e) {
  //   setPassword(e.target.value);
  // }

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Log in"
      onClick={onClose}
      onSubmit={handleSubmit}
      buttonText="Log in"
      name="login"
      text={
        <span className="modal__span">
          or
          <button onClick={openRegisterModal} className="modal__other_button">
            Register
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
      </div>
    </ModalWithForm>
  );
};

export default LogInModal;
