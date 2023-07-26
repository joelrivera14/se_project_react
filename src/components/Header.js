import "../blocks/Header.css";
import logo from "../images/wtwrlogo.svg";
import avatar from "../images/avatar.svg";
import ToggleSwitch from "./ToggleSwitch";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({
  onCreateModal,
  onRegisterModal,
  onLogInModal,
  isLoggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__logo-container">
        <NavLink exact to="/">
          <div className="header__logo">
            <img src={logo} alt="wtwr logo" />
          </div>
        </NavLink>
        <div className="header__date">June 15, New York</div>
      </div>

      {!isLoggedIn && (
        <div className="header__avatar-logo-container">
          <ToggleSwitch />
          <div className="header__button-holder">
            <button
              className="header__button"
              type="text"
              onClick={onRegisterModal}
            >
              Sign Up
            </button>
          </div>
          <button
            className="header__button-login"
            type="text"
            onClick={onLogInModal}
          >
            <div className="header__name">Log In</div>
          </button>
        </div>
      )}
      {isLoggedIn && (
        <div className="header__avatar-logo-container">
          <ToggleSwitch />
          <div className="header__button-holder">
            <button
              className="header__button"
              type="text"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
          </div>
          <NavLink to="/profile" className="header__link">
            <div className="header__name">
              {currentUser?.name || "not Logged In"}
            </div>
          </NavLink>
          <NavLink to="/profile">
            <div className="header__avatar">
              <img src={avatar} alt="avatar" />
            </div>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
