import { useState, useRef } from "react";

const Stats = (props) => {
  let [currentStat, setCurrentStat] = useState(0);
  const title = props.type ? props.type : "N/A";
  const maxCharStat = 5;
  const statRef = useRef();
  const header = props.small ? <h5>{title}</h5> : <h4>{title}</h4>

  const addStat = (e) => {
    if (currentStat === 5) {
      e.preventDefault();
      return;
    }
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
    <div className="row">
      <div className="col-sm-8">{header}</div>
      <div className="col-sm-4 text-center ps-0">
        <div className="row">
          <div className="col-4 px-0">
            <button className="btn btn-sm" onClick={removeStat}>-</button>
          </div>
          <div className="col-4 px-0">
            <input disabled ref={statRef} className="form-control form-control-sm text-center p-0" min="0" max={maxCharStat} maxLength="1" value={currentStat} />
          </div>
          <div className="col-4 px-0">
            <button className="btn btn-sm" onClick={addStat}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
