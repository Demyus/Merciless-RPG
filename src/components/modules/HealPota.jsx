import { useState, useRef } from "react";

import potionImg from '../../img/ico-potion.png';
import classes from "./Conditions.module.css";
import healClass from "./Healing.module.css";

const HealPota = (props) => {
    let [currentStat, setCurrentStat] = useState(0);
    const statRef = useRef();
  
    const addStat = (e) => {
      currentStat++;
      setCurrentStat(currentStat);
    };
  
    const removeStat = (e) => {
      if (currentStat === 0) {
        e.preventDefault();
        return;
      }
      currentStat--;
      setCurrentStat(currentStat);
    };
  return (
    <>
        <div className="row">
            <div className="col-9"><strong>{props.type}</strong> <small>[{props.healFor}]</small></div>
            <div className="col">
                <div className="row">
                <div className="col-4 px-0">
                    <button className="btn btn-sm" onClick={removeStat}>-</button>
                </div>
                <div className="col-4 px-0">
                    <input disabled ref={statRef} className="form-control form-control-sm text-center p-0" min="0" value={currentStat} />
                </div>
                <div className="col-4 px-0">
                    <button className="btn btn-sm" onClick={addStat}>+</button>
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col mt-n2">
                <button className={classes.btnNone + ' ' + healClass.potaicon } click="dmgtoggle" ><img src={potionImg} alt="Potion"/></button>                
            </div>
        </div>
    </>
  );
};

export default HealPota;
