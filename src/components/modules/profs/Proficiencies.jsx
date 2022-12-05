import Card from "../../ui/Card";
import Stats from "../stats/Stats";

const Proficiencies = (props) => {
  return (
    <Card>
        <h5 className="text-center boldu">Proficiencies</h5>
        <Stats small={true} type="Blades" slice='profs'></Stats>
        <Stats small={true} type="Blunt"  slice='profs'></Stats>
        <Stats small={true} type="Pierce" slice='profs'></Stats>
        <Stats small={true} type="Ranged" slice='profs'></Stats>
        <Stats small={true} type="Armor"  slice='profs'></Stats>
    </Card>
  );
};

export default Proficiencies;
