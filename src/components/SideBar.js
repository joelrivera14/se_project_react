import avatar from "../images/avatar.svg";
import "../blocks/SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} className="sidebar__avatar" alt="avatar" />
      <div className="sidebar__name">just some text</div>
    </div>
  );
}
