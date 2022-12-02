import Card from "../../ui/Card";
import SpellsMagicalArts from "./SpellsMagicalArts";
import SpellsMiracles from "./SpellsMiracles";
import SpellsCorrupted from "./SpellsCorrupted";

const Spellbook = (props) => {

  return (
    <Card classes="mt-3">
        <br />
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-link active" id="nav-MagicalArts" data-bs-toggle="tab" href="#MagicalArts" role="tab" aria-controls="MagicalArts" aria-selected="true"><b>Magical Arts</b></a>
                <a className="nav-link" id="nav-miracls" data-bs-toggle="tab" href="#miracls" role="tab" aria-controls="miracls" aria-selected="false"><b>Miracles</b></a>
                <a className="nav-link" id="nav-corrupted" data-bs-toggle="tab" href="#corrupted" role="tab" aria-controls="corrupted" aria-selected="false"><b>Corruption</b></a>
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="MagicalArts" role="tabpanel" aria-labelledby="MagicalArts-tab">
                <SpellsMagicalArts v-for="item in 10" v-on-selectchange="updatespells"></SpellsMagicalArts>
            </div>
            <div className="tab-pane fade" id="miracls" role="tabpanel" aria-labelledby="miracls-tab">
                <SpellsMiracles v-for="item in 10" v-on-selectchange="updatemiracles"></SpellsMiracles>

            </div>
            <div className="tab-pane fade" id="corrupted" role="tabpanel" aria-labelledby="corrupted-tab">
                <SpellsCorrupted v-for="item in 10" v-on-selectchange="updatecorrupted"></SpellsCorrupted>
            </div>
        </div>
    </Card>
  );
};

export default Spellbook;
