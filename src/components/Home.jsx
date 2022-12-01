import Navbar from "./modules/Navbar";
import CoreStat from "./modules/CoreStat";
import Saves from "./modules/Saves";
import Conditions from "./modules/Conditions";
import Edge from "./modules/Edge";
import SpellSave from "./modules/SpellSave";
import MiraclesSave from "./modules/MiraclesSave";
import Defenses from "./modules/Defenses";
import Parry from "./modules/Parry";
import Armors from "./modules/Armors";
import Weapons from "./modules/Weapons";
import Healing from "./modules/Healing";
import Proficiencies from "./modules/profs/Proficiencies";
import MagicalArts from "./modules/profs/MagicalArts";
import Miracles from "./modules/profs/Miracles";
import Corruption from "./modules/profs/Corruption";
import KiTechs from "./modules/profs/KiTechs";
import Perks from "./modules/perks/Perks";

import Stats from "./modules/Stats";



import Gears from "./Gears"
import SpellsMagicalArts from "./SpellsMagicalArts";
import SpellsMiracles from "./SpellsMiracles";
import SpellsCorrupted from "./SpellsCorrupted";
import Pcjournal from "./Pcjournal";
import Settings from "./Settings";

import Container from "./ui/Container";
import Card from "./ui/Card";






function Home() {
    return (
        <>
            <div className="my-3"></div>
            <Container fluid={true} classes={'sticky-md-top'} >
                <Card>
                    <Navbar></Navbar>
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
                       <Conditions></Conditions>
                    </div>
                </div>

                <div className="row  mt-4">
                    <div className="col-sm-9 ">
                        <div className="row pb-3">
                            <div className="col-sm-4">
                                <Edge></Edge>
                            </div>
                            <div className="col-sm-4">
                                <SpellSave></SpellSave>
                            </div>
                            <div className="col-sm-4">
                                <MiraclesSave></MiraclesSave>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <Defenses></Defenses>
                            </div>
                            <div className="col-sm-4 ">
                                <Parry></Parry>
                            </div>
                            <div className="col-sm-4 ">
                                <Armors></Armors>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <Healing></Healing>
                    </div>
                </div>
            </Container>

            {/*---------------------------------------------------------------------- */}
            <div id="weaponos" className="container mt-4">
                <div className="row">
                    <Weapons></Weapons>
                </div>
            </div>
            {/*---------------------------------------------------------------------- */}
            <div id="profs" className="container mt-3">
                <div className="row">
                    <div className="col-sm-12 text-center py-4">
                        <h5 className="points_counter">Standard Array: 3,2,2,1</h5>
                    </div>
                    <div className="col">
                        <Proficiencies></Proficiencies>
                    </div>
                    <div className="col">
                        <MagicalArts></MagicalArts>
                    </div>
                    <div className="col">
                        <Miracles></Miracles>
                    </div>
                    <div className="col">
                        <Corruption></Corruption>
                    </div>
                    <div className="col">
                        <KiTechs></KiTechs>
                    </div>
                </div>
            </div>

            {/*---------------------------------------------------------------------- */}
            <div id="perkos" className="container mt-3">
                <div className="row">
                    <div id="perk_container" className="col">
                        <Perks></Perks>
                    </div>
                </div>
            </div>

            {/*---------------------------------------------------------------------- */}
            <div className="container mt-3">
                <Card>
                    <h4 className="text-center">Skills: <span id="skill_points">skills</span></h4>
                    <div className="row" id="skillz">
                        <div id="skillsstr" className="col">
                            <div className="col">
                                <h4 className="text-center">STR <span className="skillStr">[str]</span></h4>
                                <div className="row">
                                    <div className="col-sm-6 pe-0 text-center">
                                        Athletics
                                        <Stats attr-name="athletics" min="0" max-char-stat="6" maxlength="2" char-attr="athletics" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(str)+parseInt(athletics)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Swiming
                                        <Stats attr-name="swimming" min="0" max-char-stat="6" maxlength="2" char-attr="swimming" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(str)+parseInt(swimming)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="skillsagi" className="col px-1">
                            <h4 className="text-center">AGI <span className="skillAgi">[agi]</span></h4>
                            <div className="col border p-3">
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Stealth
                                        <Stats attr-name="stealth" min="0" max-char-stat="6" maxlength="2" char-attr="stealth" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(agi)+parseInt(stealth)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Thievery
                                        <Stats attr-name="thievery" min="0" max-char-stat="6" maxlength="2" char-attr="thievery" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(agi)+parseInt(thievery)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Acrobatics
                                        <Stats attr-name="acrobatics" min="0" max-char-stat="6" maxlength="2" char-attr="acrobatics" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(agi)+parseInt(acrobatics)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="skillscha" className="col px-1">
                            <h4 className="text-center">CHA <span className="skillCha">[cha]</span></h4>
                            <div className="col border p-3">
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Religion
                                        <Stats attr-name="religion" min="0" max-char-stat="6" maxlength="2" char-attr="religion" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(cha)+parseInt(religion)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Etiquette
                                        <Stats attr-name="etiquette" min="0" max-char-stat="6" maxlength="2" char-attr="etiquette" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(cha)+parseInt(etiquette)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Intimidation
                                        <Stats attr-name="intimidation" min="0" max-char-stat="6" maxlength="2" char-attr="intimidation" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(cha)+parseInt(intimidation)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Deceive
                                        <Stats attr-name="deceive" min="0" max-char-stat="6" maxlength="2" char-attr="deceive" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(cha)+parseInt(deceive)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Persuasion
                                        <Stats attr-name="persuasion" min="0" max-char-stat="6" maxlength="2" char-attr="persuasion" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(cha)+parseInt(persuasion)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="skillsint" className="col px-1">
                            <h4 className="text-center">INT <span className="skillInt">[int]</span></h4>
                            <div className="col border p-3">
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Perception
                                        <Stats attr-name="perception" min="0" max-char-stat="6" maxlength="2" char-attr="perception" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(int)+parseInt(perception)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Survival
                                        <Stats attr-name="survival" min="0" max-char-stat="6" maxlength="2" char-attr="survival" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(int)+parseInt(survival)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Insight
                                        <Stats attr-name="insight" min="0" max-char-stat="6" maxlength="2" char-attr="insight" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(int)+parseInt(insight)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Tracking
                                        <Stats attr-name="tracking" min="0" max-char-stat="6" maxlength="2" char-attr="tracking" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(int)+parseInt(tracking)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="skillslog" className="col px-1">
                            <h4 className="text-center">LOG <span className="skillLog">[log]</span></h4>
                            <div className="col border p-3">
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Arcana
                                        <Stats attr-name="arcana" min="0" max-char-stat="6" maxlength="2" char-attr="arcana" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(log)+parseInt(arcana)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        First Aid
                                        <Stats attr-name="firstaid" min="0" max-char-stat="6" maxlength="2" char-attr="firstaid" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(log)+parseInt(firstaid)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-center pe-0">
                                        Alchemy
                                        <Stats attr-name="alchemy" min="0" max-char-stat="6" maxlength="2" char-attr="alchemy" v-on-inputchange="updateskills"></Stats>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        Total
                                        <input type="text" defaultValue="parseInt(log)+parseInt(alchemy)" className="form-control form-control-sm text-end" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="pagebreak"></div>
                <div className="printseparator"><br /><br /><br /><br /></div>

                <div className="row mt-3">
                    <div className="col-sm-10 pe-0">
                        <div className="card card-body bg-light">
                            <div className="row">
                                <h4 className="text-center">Gear</h4>
                                <div className="col" data-v-for="cols in 3" id="cols">
                                    <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card card-body bg-light">
                            <h4 className="boldu">Wealth</h4>
                            <div className="col">
                                Platinum:<input className="form-control form-control-sm mar-top-5" type="number" name="" id="platinum" v-model="platinum" />
                            </div>
                            <div className="col">Gold:<input className="form-control form-control-sm mar-top-5" type="number" name="" id="gold" v-model="gold" /></div>
                            <div className="col">Silver: <input className="form-control form-control-sm mar-top-5" type="number" name="" id="silver" v-model="silver" /></div>
                            <div className="col">Gems & Jewelry: <input className="form-control form-control-sm mar-top-5" type="number" name="" id="gems" v-model="gems" /></div>
                            <div className="col">Rations <input type="number" name="" id="rations" className="form-control form-control-sm" v-model="rations" /></div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>

                <div className="card card-body bg-light mt-3" id="spells">
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
                </div>

            </div>
            {/*---------------------------------------------------------------------- */}
            <Pcjournal notes="notes" notes2="notes2" notes3="notes3" v-on-journalchange="updatejournal"></Pcjournal>
            <Settings options="1"></Settings>

            <div className="modal fade" id="settings" tabIndex="-1" aria-labelledby="settingsLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="settingsLabel">Settings</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row mt-3">
                                <div className="col px-0">
                                    <label htmlFor="j3">General Notes</label>
                                    <textarea name="" id="j3" className="form-control" cols="30" rows="10"  v-on-change="(event) => this.$emit('journalchange', event)"></textarea>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="journal" tabIndex="-1" aria-labelledby="journalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="journalLabel">Player Journal</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col px-0">
                            <label htmlFor="j1">Quests</label>
                                <textarea name="" id="j1" className="form-control" cols="30" rows="5"  v-on-change="(event) => this.$emit('journalchange', event)"> notes </textarea>
                            </div>
                            <div className="col pe-0">
                                <label htmlFor="j2">Etc</label>
                                <textarea name="" id="j2" className="form-control" cols="30" rows="5"  v-on-change="(event) => this.$emit('journalchange', event)"> notes2 </textarea>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col px-0">
                                <label htmlFor="j3">General Notes</label>
                                <textarea name="" id="j3" className="form-control" cols="30" rows="10"  v-on-change="(event) => this.$emit('journalchange', event)"> notes3 </textarea>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        </>

    );
}

export default Home;