import Card from "../ui/Card";
import classes from "./Conditions.module.css";

const Edge = (props) => {
  return (
    <Card>
      <div className="col text-center">
        <strong>EDGE:</strong> <br />
        <button className={classes.btnNone} click="dmgtoggle">🔴</button>
        <button className={classes.btnNone} click="dmgtoggle">⚪</button>
        <span if="parseInt(edg) == 0">No Edge</span>
      </div>
    </Card>
  );
};

export default Edge;
