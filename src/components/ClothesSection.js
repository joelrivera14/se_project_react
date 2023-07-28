import "../blocks/Clothes.css";

export default function ClothesSection({ addOpen }) {
  return (
    <div className="clothes">
      <div className="clothes__title">Your items</div>
      <button className="clothes__button" onClick={addOpen}>
        + Add new
      </button>
    </div>
  );
}
