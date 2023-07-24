import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const context = useContext(CurrentUserContext);
  const isLiked = item.likes?.some((like) => like === context._id);
  const imageSrc = isLiked
    ? require("../images/likedbutton.svg").default
    : require("../images/likebutton.svg").default;
  return (
    <div className="card">
      <img
        src={item.imageURL}
        className="card_image"
        onClick={() => onSelectCard(item)}
        alt="card"
      />
      <div className="card__holder">
        <div className="card_name">{item.name}</div>
        <img
          className="card__likebutton"
          src={imageSrc}
          alt="like button"
          onClick={() =>
            onCardLike({
              id: item?.id || item?._id,
              isLiked: isLiked,
            })
          }
        />
      </div>
    </div>
  );
};

export default ItemCard;
