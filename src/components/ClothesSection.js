import { useContext } from "react";
import "../blocks/Clothes.css";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function ClothesSection({ addOpen }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="clothes">
      <div className="clothes__title">Your items</div>
      <button className="clothes__button" onClick={addOpen}>
        + Add new
      </button>
    </div>
  );
}
