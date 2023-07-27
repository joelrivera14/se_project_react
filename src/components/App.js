import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import { Profile } from "./Profile";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { BrowserRouter, Route } from "react-router-dom";
import AddItemModal from "./AddItemModal";
import * as api from "../utils/api";
import ProtectedRoute from "./ProtectedRoute";
import RegisterModal from "./RegisterModal";
import LogInModal from "./LogInModal";
import CurrentUserContext from "../contexts/CurrentUserContext";
import {
  checkToken,
  signIn,
  signUp,
  updateUser,
  addLike,
  removeLike,
} from "../utils/auth";
import EditProfileModal from "./EditProfileModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleLogInModal = () => {
    setActiveModal("login");
  };

  const handleupdateModal = () => {
    setActiveModal("update");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((currentTempState) => {
      return currentTempState === "C" ? "F" : "C";
    });
  };

  const handleAddItem = ({ name, imageUrl, weatherType }) => {
    const token = localStorage.getItem("jwt");
    api
      .addItem(
        {
          name,
          imageUrl,
          weather: weatherType,
        },
        token
      )
      .then((res) => {
        console.log(res);
        setClothingItems([res.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getClothingItems = () => {
    api
      .getItems()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteItem = (item) => {
    const token = localStorage.getItem("jwt");
    api
      .deleteItem(item._id, token)
      .then(() => {
        const filteredCards = clothingItems.filter(
          (card) => card._id !== item._id
        );
        console.log(filteredCards);
        setClothingItems(filteredCards);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignUp = ({ name, avatar, email, password }) => {
    signUp({ name, avatar, email, password })
      .then((res) => {
        console.log(res);
        // signIn(res).then((response) => {
        //   console.log(response);
        // });
        setActiveModal("");
      })
      .catch((data) => {
        console.log(data);
      });
  };

  const handleSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then((data) => {
        console.log(data);
        localStorage.setItem("jwt", data.token);
        checkToken(data.token).then((res) => {
          console.log(res);
          setIsLoggedIn(true);
          setCurrentUser(res.user);
          getClothingItems();
        });
      })
      .catch((data) => {
        console.log(data);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setClothingItems([]);
  };

  const handleUpdatedUser = ({ name, avatar, token }) => {
    updateUser({ name, avatar, token })
      .then(({ data }) => {
        setCurrentUser(data.user);
        handleCloseModal();
      })
      .catch((e) => console.log(e));
  };

  const handleLikeClick = (args) => {
    const { id, isLiked } = args;
    const token = localStorage.getItem("jwt");

    !isLiked
      ? addLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) => {
              return cards.map((c) =>
                c._id === id ? { ...c, likes: updatedCard.data.likes } : c
              );
            });
          })
          .catch((err) => console.log(err))
      : removeLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) => {
              return cards.map((c) => (c._id === id ? updatedCard.data : c));
            });
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((res) => {
          console.log(res);
          setIsLoggedIn(true);
          setCurrentUser(res.user);
          getClothingItems();
        })
        .catch((error) => {
          console.log({ error });
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  }, [setIsLoggedIn, setCurrentUser]);

  return (
    <div>
      <BrowserRouter>
        <CurrentUserContext.Provider value={currentUser}>
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <Header
              onCreateModal={handleCreateModal}
              onRegisterModal={handleRegisterModal}
              onLogInModal={handleLogInModal}
              isLoggedIn={isLoggedIn}
            />
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCardLike={handleLikeClick}
              />
            </Route>
            <ProtectedRoute
              path="/profile"
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
            >
              <Profile
                items={clothingItems}
                onSelectCard={handleSelectedCard}
                isOpen={handleupdateModal}
                addOpen={handleCreateModal}
                onCardLike={handleLikeClick}
                logOut={handleSignOut}
              />
              {activeModal === "update" && (
                <EditProfileModal
                  onClose={handleCloseModal}
                  isOpen={handleupdateModal}
                  editUser={handleUpdatedUser}
                ></EditProfileModal>
              )}
            </ProtectedRoute>
            <Footer />
            {activeModal === "preview" && (
              <ItemModal
                selectedCard={selectedCard}
                onClose={handleCloseModal}
                onDelete={handleDeleteItem}
              />
            )}
            {activeModal === "create" && (
              <AddItemModal
                onClose={handleCloseModal}
                isOpen={handleCreateModal}
                onAddItem={handleAddItem}
              />
            )}
            {activeModal === "register" && (
              <RegisterModal
                onClose={handleCloseModal}
                isOpen={handleRegisterModal}
                signUp={handleSignUp}
              />
            )}
            {activeModal === "login" && (
              <LogInModal
                onClose={handleCloseModal}
                isOpen={handleLogInModal}
                signIn={handleSignIn}
              />
            )}
          </CurrentTemperatureUnitContext.Provider>
        </CurrentUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
