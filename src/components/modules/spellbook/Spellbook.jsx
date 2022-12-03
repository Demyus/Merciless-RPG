import Card from "../../ui/Card";
import Spells from "./Spells";

const Spellbook = (props) => {

  return (
    <Card classes="mt-3">
        <br />
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-link active" id="nav-MagicalArts" data-bs-toggle="tab" href="#MagicalArts" role="tab" aria-controls="MagicalArts" aria-selected="true"><b>Magical Arts</b></a>
                <a className="nav-link" id="nav-miracls" data-bs-toggle="tab" href="#miracls" role="tab" aria-controls="miracls" aria-selected="false"><b>Miracles</b></a>
                <a className="nav-link" id="nav-corrupted" data-bs-toggle="tab" href="#corrupted" role="tab" aria-controls="corrupted" aria-selected="false"><b>Corruption</b></a>
                <a className="nav-link" id="nav-corrupted" data-bs-toggle="tab" href="#kitech" role="tab" aria-controls="kitech" aria-selected="false"><b>Ki Techs</b></a>
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="MagicalArts" role="tabpanel" aria-labelledby="MagicalArts-tab">
                <Spells school="Magical Arts" v-for="item in 10" v-on-selectchange="updatespells"></Spells>
            </div>
            <div className="tab-pane fade" id="miracls" role="tabpanel" aria-labelledby="miracls-tab">
                <Spells school="Miracles" v-for="item in 10" v-on-selectchange="updatemiracles"></Spells>

            </div>
            <div className="tab-pane fade" id="corrupted" role="tabpanel" aria-labelledby="corrupted-tab">
                <Spells school="Corruption" v-for="item in 10" v-on-selectchange="updatecorrupted"></Spells>
            </div>
            <div className="tab-pane fade" id="kitech" role="tabpanel" aria-labelledby="kitech-tab">
                <Spells school="Ki Techs" v-for="item in 10" v-on-selectchange="updatecorrupted"></Spells>
            </div>
        </div>
    </Card>
  );
};

export default Spellbook;
