import Card from "../../ui/Card";
import Stats from "../stats/Stats";

const Corruption = (props) => {
  return (
    <Card>
        <h5 className="text-center boldu">Corruption [pow]</h5>
        <Stats small={true} type="Banes"    v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Wounding" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Defiling" v-on-inputchange="updateprofs"></Stats>
    </Card>
  );
};

export default Corruption;
