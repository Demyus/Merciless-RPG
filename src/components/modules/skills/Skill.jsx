import { useState, useRef } from "react";


const Skill = (props) => {
    let [currentStat, setCurrentStat] = useState(0);    
    const maxCharStat = 5;
    const statRef = useRef();    
  
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
    <div className="row mb-2">
        <div className="col-sm-6 ">
            <div className="row">
                <div className="col text-center">
                   {props.type} 
                </div>
            </div> 
            <div className="row">
                <div className="col-3 px-0">
                        <button className="btn btn-sm btn-dark" onClick={removeStat}><i className="bi bi-caret-left-fill"></i></button>
                </div>
                <div className="col-6 px-0">
                    <input disabled ref={statRef} className="form-control form-control-sm text-center p-0" min="0" max={maxCharStat} maxLength="1" value={currentStat} />
                </div>
                <div className="col-3 px-0">
                    <button className="btn btn-sm btn-dark" onClick={addStat}><i className="bi bi-caret-right-fill"></i></button>
                </div>
            </div>
        </div>


        <div className="col-4 text-center">
            Total:
            <input type="text" value="parseInt(str)+parseInt(athletics)" className="form-control form-control-sm text-end" disabled />
        </div>
    </div>

  );
};

export default Skill;
