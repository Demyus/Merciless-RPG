import { useSelector, useDispatch } from "react-redux";
import { skillsActions } from "../../../store/skills-slice";

const Skill = (props) => {
    const dispatch = useDispatch();
    const stat = useSelector(state => state.charStats)
    const skill = useSelector(state => state.skills)
    const maxCharStat = 6;
  
    const addStat = (e) => {
      if (skill[props.skill] === 6) {
        e.preventDefault();
        return;
      }
      dispatch(skillsActions.addSkill(props.skill))
    };
  
    const removeStat = (e) => {
      if (skill[props.skill] === 0 || skill[props.skill] === -2) {
        e.preventDefault();
        return;
      }      
      dispatch(skillsActions.removeSkill(props.skill))
    };

  return (
    <div className="row mb-2">
        <div className="col-sm-6 ">
            <div className="row">
                <div className="col text-center">
                   {props.skill} 
                </div>
            </div> 
            <div className="row">
                <div className="col-3 px-0">
                        <button className="btn btn-sm btn-dark" onClick={removeStat}><i className="bi bi-caret-left-fill"></i></button>
                </div>
                <div className="col-6 px-0">
                    <input disabled  className="form-control form-control-sm text-center p-0" min="0" max={maxCharStat} maxLength="1" value={skill[props.skill]} />
                </div>
                <div className="col-3 px-0">
                    <button className="btn btn-sm btn-dark" onClick={addStat}><i className="bi bi-caret-right-fill"></i></button>
                </div>
            </div>
        </div>
        <div className="col-4 text-center">
            Total:
            <input type="text" value={skill[props.skill] + stat[props.stat]} className="form-control form-control-sm text-center" disabled />
        </div>
    </div>

  );
};

export default Skill;
