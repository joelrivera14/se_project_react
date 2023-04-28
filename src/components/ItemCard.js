const ItemCard = ({ name, weather, _id, id, item, link, onSelectCard }) => {
  return (
    <div className="card">
      <img
        src={item.link}
        className="card_image"
        onClick={() => onSelectCard(item, name, weather, _id, id, link)}
      />

      <div className="card_name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
