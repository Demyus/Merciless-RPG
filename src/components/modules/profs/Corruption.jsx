import Card from "../../ui/Card";
import Stats from "../Stats";

const Corruption = (props) => {
  return (
    <Card>
        <h5 className="text-center boldu">Corruption [pow]</h5>
        <Stats small={true} type="Banes" max-char-stat="maxbanes" char-attr="banes" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Wounding" max-char-stat="maxwounding" char-attr="wounding" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Defiling" max-char-stat="maxdefiling" char-attr="defiling" v-on-inputchange="updateprofs"></Stats>
    </Card>
  );
};

export default Corruption;
