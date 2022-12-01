import Card from "../../ui/Card";
import Stats from "../Stats";

const Miracles = (props) => {
  return (
    <Card>
        <h5 className="text-center boldu">Miracles [pow]</h5>
        <Stats small={true} type="Restoration" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Blessings"   v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Divination"  v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Providence"  v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Exorcist"    v-on-inputchange="updateprofs"></Stats>
    </Card>
  );
};

export default Miracles;
