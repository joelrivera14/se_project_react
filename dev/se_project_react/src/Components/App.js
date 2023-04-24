import logo from "../logo.svg";
import "../Blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const weatherTemp = "45° F";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <div className="modalWithForm"></div>
      <div className="itemModal"></div>
    </div>
  );
}

export default App;
