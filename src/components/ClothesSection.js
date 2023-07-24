import { useContext } from "react";
import "../blocks/Clothes.css";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function ClothesSection() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="clothes">
      <div className="clothes__title">Your items</div>
      <button className="clothes__button">+ Add new</button>
    </div>
  );
}
