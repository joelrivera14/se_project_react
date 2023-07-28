import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import likeButton from "../images/likebutton.svg";
import likedButton from "../images/likedbutton.svg";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const context = useContext(CurrentUserContext);
  const isLiked = item.likes?.some((like) => like === context._id);
  const imageSrc = isLiked ? likeButton : likedButton;
  return (
    <div className="card">
      <img
        src={item.imageUrl}
        className="card_image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
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
