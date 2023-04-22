import logo from "../logo.svg";
import "../Blocks/App.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__logo-container">
          <div className="header__logo">
            <img src="/images/wtwrlogo.svg" alt="wtwr logo" />
          </div>
          <div className="header__date">June 15, New York</div>
        </div>

        <div className="header__avatar-logo-container">
          <div className="header__button">
            <button type="text">+ Add clothes</button>
          </div>
          <div className="header__name">name</div>
          <div className="header__avatar">
            <img src="/images/avatar.svg" alt="avatar" />
          </div>
        </div>
      </header>
      <main></main>
      <footer></footer>
      <div className="modalWithForm"></div>
      <div className="itemModal"></div>
    </div>
  );
}

export default App;
