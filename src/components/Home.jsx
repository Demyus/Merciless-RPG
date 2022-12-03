import Navbar from "./ui/Navbar";
import CoreStat from "./modules/stats/CoreStat";
import Saves from "./modules/saves/Saves";
import Conditions from "./modules/conditions/Conditions";
import Edge from "./modules/edge/Edge";
import SpellSave from "./modules/saves/SpellSave";
import MiraclesSave from "./modules/saves/MiraclesSave";
import Defenses from "./modules/defenses/Defenses";
import Parry from "./modules/parry/Parry";
import Armors from "./modules/armors/Armors";
import Weapons from "./modules/weapons/Weapons";
import Healing from "./modules/healing/Healing";
import Proficiencies from "./modules/profs/Proficiencies";
import MagicalArts from "./modules/profs/MagicalArts";
import Miracles from "./modules/profs/Miracles";
import Corruption from "./modules/profs/Corruption";
import KiTechs from "./modules/profs/KiTechs";
import Perks from "./modules/perks/Perks";
import Skills from "./modules/skills/Skills";
import Gear from "./modules/gear/Gear";
import Wealth from "./modules/wealth/Wealth";
import Spellbook from "./modules/spellbook/Spellbook";
import Pcjournal from "./modules/journal/Pcjournal";
import Settings from "./modules/settings/Settings";

import Container from "./ui/Container";
import Card from "./ui/Card";

function Home() {
    return (
        <>
            <div className="my-3"></div>
            <Container fluid={true} classes={'sticky-md-top'} >
                <Card>
                    <Navbar />
                </Card>
            </Container>

            <Container classes={'mt-3'}>
                <div className="col-12 text-center my-4">
                    <h5 className="points_counter">Standard Array: 3,3,2,2,1,1,1 (Edge or Power) - total: <span> totalStat </span></h5>
                </div>
                <div className="row">
                    <div className="col-6 col-sm-3">
                        <CoreStat type='Physical'></CoreStat>
                    </div>
                    <div className="col-6 col-sm-3">
                        <CoreStat type='Mental'></CoreStat>
                    </div>
                    <div className="col-12 col-sm-3">
                        <Saves></Saves>
                    </div>
                    <div className="col-sm-3" id="Condition_container">
                       <Conditions />
                    </div>
                </div>

                <div className="row  mt-4">
                    <div className="col-sm-9 ">
                        <div className="row pb-3">
                            <div className="col-sm-4">
                                <Edge />
                            </div>
                            <div className="col-sm-4">
                                <SpellSave />
                            </div>
                            <div className="col-sm-4">
                                <MiraclesSave />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <Defenses />
                            </div>
                            <div className="col-sm-4 ">
                                <Parry />
                            </div>
                            <div className="col-sm-4 ">
                                <Armors />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <Healing />
                    </div>
                </div>
            </Container>

            <div id="weaponos" className="container mt-4">
                <div className="row">
                    <Weapons />
                </div>
            </div>

            <div id="profs" className="container mt-3">
                <div className="row">
                    <div className="col-sm-12 text-center py-4">
                        <h5 className="points_counter">Standard Array: 3,2,2,1</h5>
                    </div>
                    <div className="col">
                        <Proficiencies />
                    </div>
                    <div className="col">
                        <MagicalArts />
                    </div>
                    <div className="col">
                        <Miracles />
                    </div>
                    <div className="col">
                        <Corruption />
                    </div>
                    <div className="col">
                        <KiTechs />
                    </div>
                </div>
            </div>

            <div id="perkos" className="container mt-3">
                <div className="row">
                    <div id="perk_container" className="col">
                        <Perks />
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <Card>
                    <h4 className="text-center">Skills: <span id="skill_points">skills</span></h4>
                    <Skills />
                </Card>
            </div>

            <div className="container mt-3">
                <div className="row mt-3">
                    <div className="col-sm-10 pe-0">
                        <Gear />
                    </div>
                    <div className="col-sm-2">
                        <Wealth />
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <Spellbook />
            </div>

            <Pcjournal notes="notes" notes2="notes2" notes3="notes3" v-on-journalchange="updatejournal"></Pcjournal>
            <Settings options="1"  />
            <div className="py-5"></div>
        </>
    );
}

export default Home;