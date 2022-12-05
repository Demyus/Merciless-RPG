import Card from "../../ui/Card";
import ArmorsList from "./ArmorsList";
import ShieldLists from "../shields/ShieldsList";

import { useSelector } from "react-redux";

const Armors = (props) => {
  const stat = useSelector(state => state.charStats );
  const perk = false;
  const totalEncumbrance = (stat.Strength + stat.Stamina) * 2;

  return (
    <Card>
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="col text-center">
              <h4>Armor </h4>
              <ArmorsList selectchange="updatearmor"></ArmorsList>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col text-center">
              <h4>Shield</h4>
              <ShieldLists selectchange="updateshield"></ShieldLists>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p className="mb-0">
            Encumbrance <small>[FORT x 2]</small>: <span id="encumbrance"> {+stat.armorEncumbrance + +stat.shieldEncumbrance} </span> / {totalEncumbrance}            
          </p>
          {perk && <span if="bloodnsteel">Blood and Steel +1 Parry</span>}
        </div>
      </div>
    </Card>
  );
};

export default Armors;
