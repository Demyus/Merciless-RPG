import Card from "../../ui/Card";
import { useSelector } from "react-redux";

const MiraclesSave = (props) => {
  const stat = useSelector(state => state.charStats)
  const noPow = stat.Power === 0 || stat.Intuition === 0 || stat.Charisma === 0

  return (
    <Card>
      <div className="row">
        <div className="col">
          <strong>Miracle Save</strong> <br />
          [CHA + INT]
        </div>
        <div className="col text-center d-flex align-items-center justify-content-center">
          {!noPow && <h2>{stat.Charisma + stat.Intuition}</h2>}
          {noPow && <span>No Power</span>}
        </div>
      </div>
    </Card>
  );
};

export default MiraclesSave;
