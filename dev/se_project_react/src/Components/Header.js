import "../Blocks/Header.css";

const Header = () => {
  console.log("Header");
  return (
    <header className="header">
      <div className="header__logo-container">
        <div className="header__logo">
          <img
            src={require("../Images/wtwrlogo.svg").default}
            alt="wtwr logo"
          />
        </div>
        <div className="header__date">June 15, New York</div>
      </div>

      <div className="header__avatar-logo-container">
        <div className="header__button">
          <button type="text">+ Add clothes</button>
        </div>
        <div className="header__name">name</div>
        <div className="header__avatar">
          <img src={require("../Images/avatar.svg").default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
