import Card from "../../ui/Card";
import Stats from "../Stats";

const Proficiencies = (props) => {
  return (
    <Card>
        <h5 className="text-center boldu">Proficiencies</h5>
        <Stats small={true} type="Blades"></Stats>
        <Stats small={true} type="Blunt"  v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Pierce" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Ranged" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Armor"  v-on-inputchange="updateprofs"></Stats>
    </Card>
  );
};

export default Proficiencies;
