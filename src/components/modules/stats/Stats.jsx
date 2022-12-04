import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { charStatActions } from "../../../store/stats-slice";

const Stats = (props) => {
  const dispatch = useDispatch();
  // get data from the Store
  const stat = useSelector(state => state.charStats );
  const title = props.type ? props.type : "N/A";  
  const statRef = useRef();
 
  const header = props.small ? <h5>{title}</h5> : <h4>{title}</h4>

  // init stats not accounted for
  let currentStat = 0;  
  if(stat[props.type]){
    currentStat = stat[props.type]
  } else {
    dispatch(charStatActions.initStat(props.type));
    currentStat = stat[props.type]
  }

  // init max stat not accounted for
  let currentMax = 5;  
  if(stat[`max${[props.type]}`]){
    currentMax = stat[`max${[props.type]}`];
  } else {
    dispatch(charStatActions.initMax(props.type));
    currentMax = stat[`max${[props.type]}`];
  }


  const addStat = (e) => {
    //console.log(stat)
    if (stat[props.type] === stat[`max${[props.type]}`]) {
      e.preventDefault();
      return;
    }
    dispatch(charStatActions.addStat(props.type))
  };

  const removeStat = (e) => {
    if (stat[props.type] === 0) {
      e.preventDefault();
      return;
    }
    dispatch(charStatActions.removeStat(props.type))
  };

  return (
    <div className="row">
      <div className="col-sm-8">{header}</div>
      <div className="col-sm-4 text-center ps-0">
        <div className="row">
          <div className="col-4 px-0">
            <button className="btn btn-sm btn-dark" onClick={removeStat}><i className="bi bi-caret-left-fill"></i></button>
          </div>
          <div className="col-4 px-0">
            <input disabled ref={statRef} className="form-control form-control-sm text-center p-0" min="0" max={currentMax} maxLength="1" value={currentStat} />
          </div>
          <div className="col-4 px-0">
            <button className="btn btn-sm btn-dark" onClick={addStat}><i className="bi bi-caret-right-fill"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
