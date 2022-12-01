import Card from "../../ui/Card";
import Stats from "../Stats";

const KiTechs = (props) => {
  return (
    <Card>
        <h5 className="text-center boldu">Ki Techs [pow]</h5>
        <Stats small={true} type="Spirit Warrior" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Shadow"         v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Diamond Fist"   v-on-inputchange="updateprofs"></Stats>
    </Card>
  );
};

export default KiTechs;
