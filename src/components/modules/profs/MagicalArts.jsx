import Card from "../../ui/Card";
import Stats from "../stats/Stats";

const MagicalArts = (props) => {
  return (
    <Card>
        <h5 className="text-center boldu">Magical Arts [pow]</h5>
        <Stats type="Conjuration" small={true} v-on-inputchange="updateprofs"></Stats>
        <Stats type="Enchantment" small={true} v-on-inputchange="updateprofs"></Stats>
        <Stats type="Evocation"   small={true} v-on-inputchange="updateprofs"></Stats>
        <Stats type="Terramancy"  small={true} v-on-inputchange="updateprofs"></Stats>
        <Stats type="Necromancy"  small={true} v-on-inputchange="updateprofs"></Stats>
    </Card>
  );
};

export default MagicalArts;
