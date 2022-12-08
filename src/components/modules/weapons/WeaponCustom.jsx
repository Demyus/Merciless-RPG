import { useSelector, useDispatch } from "react-redux";
import { gearActions } from "../../../store/gear-slice";

const WeaponCustom = props => {
    

    return (
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
    )
} 

export default WeaponCustom;