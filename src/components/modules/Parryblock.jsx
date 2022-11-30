
const Parryblock = (props) => {
  return (
      <div className="row">
        <div className="col-sm-9">
          <strong>{props.parryName}</strong> <br />{" "}
          <small id="parryDesc">[WPN + AGI + (Penalty)]</small>
        </div>
        <div className="col-sm-3">
          <input
            className="form-control"
            type="text"
            name=""
            disabled
            defaultValue="parryValue"
          />
        </div>
      </div>
  );
};

export default Parryblock;
