import Card from "../../ui/Card";

const SpellSave = (props) => {
  return (
    <Card>
      <div className="row">
        <div className="col">
          <strong>Spell Save</strong> <br />
          [LOG + INT]
        </div>
        <div className="col text-center d-flex align-items-center justify-content-center">
          <h2>(log)+(int)</h2>
          <span if="(pow) == 0 || (int) == 0 || (log) == 0">No Power</span>
        </div>
      </div>
    </Card>
  );
};

export default SpellSave;
