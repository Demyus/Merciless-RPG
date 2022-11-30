import Card from "../ui/Card";
import WeaponsList from "./WeaponsList";

const Weapons = (props) => {
  return (
    <Card>
      <div className="col-sm-12 well">
        <h4 className="text-center boldu">Weapons</h4>
        <WeaponsList data-v-on-selectchange="updateselected"></WeaponsList>
        <WeaponsList data-v-on-selectchange="updateselected"></WeaponsList>
        <WeaponsList data-v-on-selectchange="updateselected"></WeaponsList>
        <div className="row mb-2" id="customWPN1">
            <div className="pb-1  col-sm-3">
                <b>Name</b>
                <input type="text" className="form-control form-control-sm" v-model="customwpn1name" />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <b>HIT</b>
                <input type="text" className="form-control form-control-sm text-center" v-model="customwpn1hit" />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <b>Type</b>
                <input
                type="text" className="form-control form-control-sm text-center" v-model="customwpn1type" />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <b>Reach</b>
                <input type="text" className="form-control form-control-sm text-center" v-model="customwpn1reach" />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <b data-bs-toggle="tooltip" data-bs-placement="top" data-title="'STR + WPN'" >Damage</b>
                <input type="text" className="form-control form-control-sm text-center" v-model="customwpn1damage" />
            </div>
            <div className="pb-1  col">
                <b>Properties</b>
                <input type="text" className="form-control form-control-sm" v-model="customwpn1properties" />
            </div>
        </div>
        <div className="row" id="customWPN2">
          <div className="pb-1  col-sm-3">
            <b>Name</b>
            <input type="text" className="form-control form-control-sm" v-model="customwpn2name" />
          </div>
          <div className="pb-1  col-sm-1  text-center">
            <b>HIT</b>
            <input type="text" className="form-control form-control-sm text-center" v-model="customwpn2hit" />
          </div>
          <div className="pb-1  col-sm-1  text-center">
            <b>Type</b>
            <input type="text" className="form-control form-control-sm text-center" v-model="customwpn2type" />
          </div>
          <div className="pb-1  col-sm-1  text-center">
            <b>Reach</b>
            <input type="text" className="form-control form-control-sm text-center" v-model="customwpn2reach" />
          </div>
          <div className="pb-1  col-sm-1  text-center">
            <b data-bs-toggle="tooltip" data-bs-placement="top" data-title="'STR + WPN'" >Damage</b>
            <input type="text" className="form-control form-control-sm text-center" v-model="customwpn2damage" />
          </div>
          <div className="pb-1  col">
            <b>Properties</b>
            <input type="text" className="form-control form-control-sm" v-model="customwpn2properties" />
          </div>
        </div>
        <br />
        <div data-v-show="bloodnsteel">
          <b>Blood & Steel:</b> One handed weapon bonus +1 to LD
          <span data-v-show="shield2 == -2 || shield2 == -1" className="text-danger" >
            [Shield Required]
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Weapons;
