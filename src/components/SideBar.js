import avatar from "../images/avatar.svg";
import "../blocks/SideBar.css";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

export default function SideBar({ isOpen, logOut }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div>
      <div className="sidebar">
        <img src={avatar} className="sidebar__avatar" alt="avatar" />
        <div className="sidebar__name">
          {currentUser?.name || "not Logged In"}
        </div>
      </div>
      <div className="sidebar__buttons">
        <button className="sidebar__user" onClick={isOpen}>
          Change Profile Data
        </button>
        <button className="sidebar__logout" onClick={logOut}>
          Log Out
        </button>
      </div>
    </div>
  );
}
