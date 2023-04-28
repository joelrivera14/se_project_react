import "../blocks/Header.css";
import logo from "../images/wtwrlogo.svg";
import avatar from "../images/avatar.svg";

const Header = ({ onCreateModal }) => {
  console.log("Header");
  return (
    <header className="header">
      <div className="header__logo-container">
        <div className="header__logo">
          <img src={logo} alt="wtwr logo" />
        </div>
        <div className="header__date">June 15, New York</div>
      </div>

      <div className="header__avatar-logo-container">
        <div className="header__button-holder">
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add clothes
          </button>
        </div>
        <div className="header__name">Terrence Tegegne</div>
        <div className="header__avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
