import ModalWithForm from "./ModalWithForm";
import { useState, useEffect } from "react";

const LogInModal = ({ isOpen, onClose, signIn }) => {
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
    onClose();
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign Up"
      onClick={onClose}
      onSubmit={handleSubmit}
      buttonText="Log In"
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
            onChange={emailChange}
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
            onChange={passwordChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default LogInModal;
