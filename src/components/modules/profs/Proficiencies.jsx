import Card from "../../ui/Card";
import Stats from "../Stats";

const Proficiencies = (props) => {
  return (
    <Card>
        <h5 className="text-center boldu">Proficiencies</h5>
        <div className="row">
            <div className="col-sm-7"><h5>Blades</h5></div>
            <div className="col-sm-5">
                <Stats attr-name="Blades" max-char-stat="maxblades" char-attr="blades" v-on-inputchange="updateprofs"></Stats>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-7"><h5>Blunt</h5></div>
            <div className="col-sm-5">
                <Stats attr-name="Blunt" max-char-stat="maxblunt" char-attr="blunt" v-on-inputchange="updateprofs"></Stats>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-7"><h5>Pierce</h5></div>
            <div className="col-sm-5">
                <Stats attr-name="Pierce" max-char-stat="maxpierce" char-attr="pierce" v-on-inputchange="updateprofs"></Stats>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-7"><h5>Ranged</h5></div>
            <div className="col-sm-5">
                <Stats attr-name="Ranged" max-char-stat="maxranged" char-attr="ranged" v-on-inputchange="updateprofs"></Stats>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-7"><h5>Armor</h5></div>
            <div className="col-sm-5">
                <Stats attr-name="Armor" max-char-stat="maxarmor" char-attr="armor" v-on-inputchange="updateprofs"></Stats>
            </div>
        </div>
    </Card>
  );
};

export default Proficiencies;
