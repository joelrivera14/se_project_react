import logo from "../logo.svg";
import "../Blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";

function App() {
  const weatherTemp = "45° F";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <ModalWithForm title="new garment">these are children</ModalWithForm>
    </div>
  );
}

export default App;
