import Card from "../ui/Card";

const MiraclesSave = (props) => {
  return (
    <Card>
      <div className="row">
        <div className="col">
          <strong>Miracle Save</strong> <br />
          [CHA + INT]
        </div>
        <div className="col text-center d-flex align-items-center justify-content-center">
          <h2 if="(int)>0 && (cha)>0 && (pow)>0">(cha)+(int)</h2>
          <span if="(pow) == 0 || (int) == 0 || (cha) == 0">No Power</span>
        </div>
      </div>
    </Card>
  );
};

export default MiraclesSave;
