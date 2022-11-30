import Card from "../../ui/Card";
import Stats from "../Stats";

const Miracles = (props) => {
  return (
    <Card>
        <h5 className="text-center boldu">Miracles [pow]</h5>
        <Stats small={true} type="Restoration" max-char-stat="maxrestoration" char-attr="restoration" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Blessings" max-char-stat="maxblessings" char-attr="blessings" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Divination" max-char-stat="maxdivination" char-attr="divination" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Providence" max-char-stat="maxprovidence" char-attr="providence" v-on-inputchange="updateprofs"></Stats>
        <Stats small={true} type="Exorcist" max-char-stat="maxexorcist" char-attr="exorcist" v-on-inputchange="updateprofs"></Stats>
    </Card>
  );
};

export default Miracles;
