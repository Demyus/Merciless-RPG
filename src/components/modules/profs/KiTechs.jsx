import Card from "../../ui/Card";
import Stats from "../Stats";

const KiTechs = (props) => {
  return (
    <Card>
        <h5 className="text-center boldu">Ki Techs [pow]</h5>
        <Stats small={true} type="Spirit Warrior" max-char-stat="maxbanes" char-attr="banes" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Shadow" max-char-stat="maxwounding" char-attr="wounding" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Diamond Fist" max-char-stat="maxdefiling" char-attr="defiling" v-on-inputchange="updateprofs"></Stats>
    </Card>
  );
};

export default KiTechs;
