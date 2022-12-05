import Card from "../../ui/Card";
import { useSelector } from "react-redux";

const Defenses = (props) => {
  const stat = useSelector(state => state.charStats );
  const reflex = (stat.Agility + stat.Intuition);  
  const arush = false;

  return (
    <Card>
      <div className="row">
        <h4 className="text-center boldu">Defenses</h4>
        <div className="col-9">
          <strong>Initiative </strong>{" "}
          {arush && <small>[+Adrenaline Rush]</small>}
          <br />
          [10 + REFLEX + OTHER]
        </div>
        <div className="col-sm-3">
          <input className="form-control form-control-sm" type="text" name="" disabled id="initiative" value={10 + reflex + +stat.armorInit + +stat.shieldInit} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-9">
          <strong>Dodge</strong> <br />
          [REFLEX + OTHER]
        </div>
        <div className="col-sm-3">
          <input className="form-control form-control-sm" type="text" name="" disabled id="dodge" value={reflex + +stat.armorDodge} />
        </div>
      </div>

      <div className="row mt-1">
        <div className="col">
          Armor Dodge Bonus: {stat.armorDodge}<br />
          Armor Init Bonus: {stat.armorInit}<br />
          Shield Init Bonus: {stat.shieldInit}
        </div>
      </div>
    </Card>
  );
};

export default Defenses;
