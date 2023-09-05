import { HelpItemName } from "../store/help/helpSlice";
import "./HelpMenuItem.css";

interface Props {
  itemName: HelpItemName;
}

const HelpMenuItem: React.FC<Props> = ({ itemName }) => {
  return (
    <li className="help-item">
      <h2 className="help-item-name">{itemName}</h2>
      <p className="help-item-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda Lorem
        ipsum dolor sit
      </p>
    </li>
  );
};

export default HelpMenuItem;
