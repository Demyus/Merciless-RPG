import Card from "../ui/Card";

const Defenses = (props) => {
  return (
    <Card>
      <div className="row">
        <h4 className="text-center boldu">Defenses</h4>
        <div className="col-9">
          <strong>Initiative </strong>{" "}
          <small if="arush">[+Adrenaline Rush]</small>
          <br />
          [10 + REF + OTHER]
        </div>
        <div className="col-sm-3">
          <input
            className="form-control form-control-sm"
            type="text"
            name=""
            disabled
            id="initiative"
            defaultValue="init"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-9">
          <strong>Dodge</strong> <br />
          [REFLEX + OTHER]
        </div>
        <div className="col-sm-3">
          <input
            className="form-control form-control-sm"
            type="text"
            name=""
            disabled
            id="dodge"
            defaultValue="parseInt(reflex)+parseInt(armordodge)"
          />
        </div>
      </div>
    </Card>
  );
};

export default Defenses;
