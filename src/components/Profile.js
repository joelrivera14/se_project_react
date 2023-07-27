import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import ItemCard from "./ItemCard";
import "../blocks/Profile.css";
import "../blocks/ItemCards.css";

export function Profile({
  items,
  onSelectCard,
  isOpen,
  addOpen,
  onCardLike,
  logOut,
}) {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar isOpen={isOpen} logOut={logOut} />
      </div>
      <div className="profile__clothes-section">
        <ClothesSection addOpen={addOpen} />
        <section className="cards">
          <ul className="cards__list">
            {items.map((card) => (
              <ItemCard
                key={card._id}
                item={card}
                onSelectCard={onSelectCard}
                onCardLike={onCardLike}
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
