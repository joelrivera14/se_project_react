import SideBar from "./SideBar";

export function Profile() {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div className="profile__clothes-section"></div>
    </div>
  );
}
