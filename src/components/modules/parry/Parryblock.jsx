import { useSelector } from "react-redux";

const Parryblock = (props) => {
  const profs = useSelector(state => state.proficiencies);
  const stat = useSelector(state => state.charStats );

  const parryValue = +profs[props.parryName] + +stat.Agility + +stat.shieldParry;

  return (
      <div className="row">
        <div className="col-sm-9">
          <strong>{props.parryName}</strong> <br />{" "}
          <small id="parryDesc">[WPN + AGI + (Penalty)]</small>
        </div>
        <div className="col-sm-3">
          <input className="form-control text-center" type="text" name={props.parryName} disabled value={parryValue} key={'prof'+props.parryName} />
        </div>
      </div>
  );
};

export default Parryblock;
