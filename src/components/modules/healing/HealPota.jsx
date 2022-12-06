import { useDispatch, useSelector } from "react-redux";
import { gearActions } from "../../../store/gear-slice";

import potionImg from '../../../img/ico-potion.png';
import classes from "../conditions/Conditions.module.css";
import healClass from "./Healing.module.css";

const HealPota = (props) => {
    const gear = useSelector(state => state.gear);
    const dispatch = useDispatch();
    const pots = [];

    const addPota = (e) => {
      dispatch(gearActions.addGear(props.type))
    };
  
    const removePota = (e) => {
      if (gear[props.type] === 0) {
        e.preventDefault();
        return;
      }
      dispatch(gearActions.removeGear(props.type))
    };

      for (let x = 0; x < gear[props.type]; x++) {
          pots.push(<button className={classes.btnNone + ' ' + healClass.potaicon } onClick={removePota} key={'pota'+x} ><img src={potionImg} alt={props.type}/></button>)
      }

  return (
    <>
        <div className="row">
            <div className="col-9"><strong>{props.type}</strong> <small>[{props.healFor}]</small></div>
            <div className="col ps-0">
                <div className="row">
                <div className="col-4 px-0">
                    <button className="btn btn-sm btn-dark" onClick={removePota}><i className="bi bi-caret-left-fill"></i></button>
                </div>
                <div className="col-4 px-0">
                    <input disabled className="form-control form-control-sm text-center p-0" min="0" value={gear[props.type]} />
                </div>
                <div className="col-4 px-0">
                    <button className="btn btn-sm btn-dark" onClick={addPota}><i className="bi bi-caret-right-fill"></i></button>
                </div>
                </div>
            </div>
        </div>
        <div className="row pb-2">
            <div className="col mt-n2">
                {pots}
            </div>
        </div>
    </>
  );
};

export default HealPota;
