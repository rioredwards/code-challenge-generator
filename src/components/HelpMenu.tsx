import "./HelpMenu.css";
import HelpMenuItem from "./HelpMenuItem";

interface Props {}

const HelpMenu: React.FC<Props> = () => {
  return (
    <div className="help-menu-container">
      <h2 className="help-menu-title">How To: | About: </h2>
      <ul className="help-menu-list">
        <HelpMenuItem itemName="LEVER" />
        <HelpMenuItem itemName="STOP_BUTTON" />
        <HelpMenuItem itemName="REEL" />
        <HelpMenuItem itemName="LOCK_SWITCH" />
        <HelpMenuItem itemName="DISPLAY" />
      </ul>
    </div>
  );
};

export default HelpMenu;
