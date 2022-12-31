
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { perksActions } from "../../../store/perks-slice";

const PerksList = (props) => {
  const perks = props.perks;
  const [currentPerkDesc, setCurrentPerkDesc] = useState('...');
  const singleDesc = perks[0].desc;
  
  const selectedPerk = useRef();
  const dispatch = useDispatch();
  
  const perkChangeHandler = () => {
    //console.log(selectedPerk.current.value);
    //console.log(perks[selectedPerk.current.value].desc)
      setCurrentPerkDesc(perks[selectedPerk.current.value].desc);
      dispatch(perksActions.addPerk({slot: props.slot, id: +selectedPerk.current.value}))
  }

  const addSlot = () => {
    if(props.slots === 5) { return }
    dispatch(perksActions.addSlot());
  }
  const removeSlot = () => {
      dispatch(perksActions.removeSlot());
  }

  return (
    <div className="row my-2">
        <div className="col-sm-2">
        <select id={props.slot} className="form-select" onChange={perkChangeHandler} ref={selectedPerk} >
            {perks.map( (perk, i) => {
              return (
                <option key={`perko${i}`} value={perk.id}  >{perk.name}</option>
              )
            })}
            
        </select>
        </div>
        <div className="col-sm-9 ps-1">
        <textarea className="form-control" disabled value={props.single ? singleDesc : currentPerkDesc}></textarea>
        </div>
        <div className="col-sm-1 hstack px-0">
           { props.controls && 
                <>
                    { !props.first && <button onClick={removeSlot} className="btn btn-lg btn-danger p-2"><i className="bi bi-dash-circle"></i></button> }
                    { !props.last && <button onClick={addSlot} className="btn btn-lg btn-success p-2 ms-3"><i className="bi bi-plus-circle"></i></button>}
                </>            
            }
        </div>
    </div>
  );
};

export default PerksList;
