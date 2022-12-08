import Card from "../../ui/Card";
import WeaponsList from "./WeaponsList";
import { useSelector } from "react-redux";
import WeaponCustom from "./WeaponCustom";

const Weapons = (props) => {
  const stat = useSelector(state => state.charStats);
  const perks = false;
  return (
    <Card>
      <div className="col-sm-12 well">
        <h4 className="text-center boldu">Weapons</h4>
        <WeaponsList slot={1} />
        <WeaponsList slot={2} />
        <WeaponsList slot={3} />
        <WeaponCustom custom={1} />
        <WeaponCustom custom={2} />

        <div className="row mt-3">
          <div className="col">
            <h5>Perks:</h5>
            {perks && (<div>
              <b>Blood & Steel:</b> One handed weapon bonus +1 to LD
              <span data-v-show="shield2 == -2 || shield2 == -1" className="text-danger" >
                [Shield Required]
              </span>
            </div>)}
            {!perks && <p>N/A</p>}
          </div>
          <div className="col">
              <h5>Note:</h5>
              <strong>Damage:</strong> Weapon Damage + STR[{stat.Strength}]  <br/>
              <strong>Hit:</strong> Weapon Accuracy + Proficiency + Agility[{stat.Agility}] + other/perks <br/>
          </div>

          
        </div>
      </div>
    </Card>
  );
};

export default Weapons;
