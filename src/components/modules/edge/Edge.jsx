import Card from "../../ui/Card";
import classes from "../conditions/Conditions.module.css";
import { useSelector, useDispatch } from "react-redux";
import { charStatActions } from "../../../store/stats-slice";

const Edge = (props) => {  
  let edge = [];
  let edgeUsed = []
  const stat = useSelector(state => state.charStats );
  const dispatch = useDispatch();

  const useEdge = () => {
    dispatch(charStatActions.addStat('usedEdge'))
  }

  const recoverEdge = () => {        
    dispatch(charStatActions.removeStat('usedEdge'))
  } 

  for (let x = 0; x < (stat.Edge - stat.usedEdge); x++) { edge.push(<button className={classes.btnNone}  onClick={useEdge} >🔴</button>) }
  for (let z = 0; z < stat.usedEdge; z++)    { edgeUsed.push(<button className={classes.btnNone} onClick={recoverEdge} >⚪</button>) }

  return (
    <Card>
      <div className="col text-center">
        <strong>EDGE:</strong> <br />
        {edge}{edgeUsed}
        { !stat.Edge && <span>No Edge</span>}
      </div>
    </Card>
  );
};

export default Edge;
