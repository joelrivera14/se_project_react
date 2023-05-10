import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import ItemCard from "./ItemCard";
import "../blocks/Profile.css";
import "../blocks/cards.css";

export function Profile({ items, onSelectCard }) {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div className="profile__clothes-section">
        <ClothesSection />
        <section className="cards">
          <ul className="cards__list">
            {items.map((card) => (
              <ItemCard
                key={card._id}
                item={card}
                onSelectCard={onSelectCard}
                name={card.name}
                weather={card.weather}
                id={card.id}
                link={card.link}
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
