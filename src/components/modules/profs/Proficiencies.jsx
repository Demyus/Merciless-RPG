import Card from "../../ui/Card";
import Stats from "../Stats";
import CoreStat from "../CoreStat";

const Proficiencies = (props) => {
  return (
    <Card>
        <h5 className="text-center boldu">Proficiencies</h5>
        <Stats small={true} type="Blades"></Stats>
        <Stats small={true} type="Blunt" max-char-stat="maxblunt" char-attr="blunt" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Pierce" max-char-stat="maxpierce" char-attr="pierce" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Ranged" max-char-stat="maxranged" char-attr="ranged" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Armor" max-char-stat="maxarmor" char-attr="armor" v-on-inputchange="updateprofs"></Stats>
    </Card>
  );
};

export default Proficiencies;
