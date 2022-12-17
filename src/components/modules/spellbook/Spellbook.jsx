import Card from "../../ui/Card";
import Spells from "./Spells";

// Enchanting: 0 - 12
// Conjuring: 13 - 25
// Necromancy: 26 - 42
// Evocation: 43 - 56
// Terramancy: 57 - 70

const magicalarts = [
    // Enchanting
        { id: 0, name: "Bewitch"       , desc: "Charm target creature to be your friend or fall in love. Hits determine duration in rounds Resolve save DC POW"},
        { id: 1, name: "Stun bolt"     , desc: "Sends a creature into a magical slumber, Hits + POW cause Stun Damage saving throw of Resolve DC POW"},
        { id: 2, name: "Sleep"         , desc: "Rends creatures into a magical slumber in an area of POW+HITS Mts. Spell causes 10 SD saving throw of Resolve DC POW"},
        { id: 3, name: "Fire Blade"    , desc: "Weapon becomes engulfed in flames causing 1LD of Fire damage, you can use blade as a torch and set objects on fire. Hits determine duration in minutes."},
        { id: 4, name: "Diamond Fists" , desc: "Enchant your unnarmed attacks to cause Lethal Damage. Hits determine duration in minutes"},
        { id: 5, name: "Berserker"     , desc: "You enter a combat trance of animalistic instinct. You gain a +2 to Physical attributes, Hits determine Duration in rounds. If no enemy is on sight and you are still Berserking you attack the first creature you see, be that friend foe or loved one"},
        { id: 6, name: "Paralyze"      , desc: "Target creatures body becomes rigid being unable to move. Hits determine duration in rounds. Fort save DC POW"},
        { id: 7, name: "Absorb element", desc: "Enchant a piece of armor or jewelry to absorb a type of elemental energy that can then be redirected. Absorb 5 LD of chosen Element that can be cast back to a target creature with DP of Enchanting+5. Hits determine duration in minutes"},
        { id: 8, name: "Heat Metal"    , desc: "Increase the temperature of target metal that becomes red hot, causing 1 Lethal DMG and -2 to Attack DP Penalty. Hits determine Duration in rounds"},
        { id: 9, name: "Alter Self"    , desc: "Alter your physical attributes to impersonate another creature that has same humanoid traits. Hits determine Duration in hrs"},
        { id: 10, name: "Valor "        , desc: "Gain immunity against fear effects Hits determine duration in minutes"},
        { id: 11, name: "Levitate"      , desc: "Levitate yourself or target creature. Hits determine duration in minutes"},
        { id: 12, name: "Identify"      , desc: "Identify magical properties of an item"},
    // Conjuring
        { id: 13, name: "Summon Ifrit"    , desc: "Summon a fire elemental to aid you, Power determines Health and DR of the Ifrit. Hits determine duration in rounds "},
        { id: 14, name: "Summon Undine"   , desc: "Summon a Water elemental to aid you, Power determines Health and DR of the Undine. Hits determine duration in rounds"},
        { id: 15, name: "Summon Sylph"    , desc: "Summon a Wind elemental to aid you, Power determines Health and DR of the Sylph. Hits determine duration in rounds"},
        { id: 16, name: "Summon weapon"   , desc: "Conjure a magical weapon of your choice, weapon is bound to you and can be called at will, DMG as weapon +1 magical Hits determine duration in Minutes"},
        { id: 17, name: "Conjure Fortress", desc: "A small fortress appears infront of you, it can harbor 5 creatures and protects them, when inside gain Regen"},
        { id: 18, name: "Gate of Travel"  , desc: "Create a Portal that takes you to a place you have seen and remember. Hits determine duration of the portal 1 Hit = 1 Minute ( you can close the portal before with a quick action)"},
        { id: 19, name: "Blink"           , desc: "Vanish from sight appearing up to POW+HITS meters away to an unoccupied space that you can see"},
        { id: 20, name: "Meteor Strike"   , desc: "Summon a large meteor that falls and strikes an area of POW Mts hits determine area in Mts . 12 LD Reflex Save for Half damage"},
        { id: 21, name: "Myst of Agony"   , desc: "Myst obscure sight and causes terrible pain. Hits determine Penalty to dice pool."},
        { id: 22, name: "Summon Mount"    , desc: "Call forth a steed worthy of you. Hits determine Steeds stats"},
        { id: 23, name: "Entangle"        , desc: "Create a foliage that entangle foes that try to cross . Hits determine duration in rounds"},
        { id: 24, name: "Web"             , desc: "Sling thick webbing that paralyzes a foe, can use them to climb surfaces. Hits determine duration in minutes"},
        { id: 25, name: "Call Lighting"   , desc: "Call fort the power of Lighting on a target area. Attack hits 3 Targets Power+Hits determine damage Ref Save DC POW ( Hits 1st Target for Full damage, Second target for half and last target for half of that rounded up) "},
    // Necromancy
        { id: 26, name: "Animate undead"    , desc: "Raise a corpse from the dead as an undead under your control corpse stats and abilities are the same as they were in Life. Hits determine duration in minutes need a corpse to animate"},
        { id: 27, name: "Create undead"     , desc: "Gather parts of corpses to create an undead Golem. Hits determines Duration Stats of Undead Golem and Armor +1 Physical stat per POW Health 5+ Pow"},
        { id: 28, name: "Atrophy"           , desc: "Weaken target creature causing str based damage by half. Hits determine Duration in rounds. Fort Save DC POW"},
        { id: 29, name: "Vampiric Blood"    , desc: "Drain the life force of target creature. Hits determine health gained Fort Save DC POW"},
        { id: 30, name: "Dark Abyss"        , desc: "Summon a black veil of darkness that no light can pierce and cause -3 to saving throws and -8 to Attack DP. Hits determine duration in rounds"},
        { id: 31, name: "Eyes of the Demon" , desc: "Call forth the power of sight from a demon, Eyes can pierce illusions, see in complete darkness. Hits determine duration in minutes"},
        { id: 32, name: "Agony"             , desc: "Cause great pain in a target creature. Hits determine dice penalties. Fort Save POW"},
        { id: 33, name: "Fear"              , desc: "Cause debilitating fear in an area of 10 Mts. creatures traped in the zone of fear are afflicted with paralyzing fear rendering them useless in combat as they will run from the encounter, If you are not frightened you are Shaken by the experience causing a -2 to your Attack DP. Hits determine targets. Res Save POW"},
        { id: 34, name: "Unhallow"          , desc: "Desecrate the ground you are on Causing -3 to Living creatures DP. And +3 to undead and Demons Hits determine Duration in rounds (Unhallow does not affect the spellcaster) "},
        { id: 35, name: "Share Pain"        , desc: "Spell that lets you share stun or lethal damage to target creature. Lethal Damage track+Hits determine Damage"},
        { id: 36, name: "Blindness/Deafness", desc: "Render a target blind or deaf. Hits determine duration how many targets you can affect Fort Save POW | Blind: Attack DP -8 | Deaf: -3 Saving throws"},
        { id: 37, name: "Circle of Despair" , desc: "Render Blind and Deaf every target that begins its turn inside the circle of Despair Fort Save POW | Blind: Attack DP -8 | Deaf: -3 Saving throws"},
        { id: 38, name: "Curse"             , desc: "Curse a target creature. Curse can render a targets Attribute to 1, reduce number of attack DP by -4 Dice or saving throws reduced to 1. A curse is taxing and the spellcaster receives - 5 Lethal Damage that cant be healed by magical means. Curses have no Saving throw and need Restoration magic to clear or to fulfill a quest"},
        { id: 39, name: "Legion"            , desc: "Send a wave of Dark powers from the abyss to animate any corpse that is in a 20 Meter Diameter. (Caster Remains in a trance while spell is in effect)"},
        { id: 40, name: "Death Knight"      , desc: "Summons a Death knight to fight by your side. Hits determine Duration in rounds POW = Stats of Death knight and Armor +1 physical stat per POW Health 5 + stamina"},
        { id: 41, name: "Word of Power Kill / Orcus Claw", desc: "Utter a corrupted word in the demonic languaje, causing Lethal damage to the target. Fort Save POW. If save fails Target falls dead. If Target saves, Hits determine Lethal Damage"},
        { id: 42, name: "Wight"             , desc: "Summons a Wight to fight by your side. Hits determine Duration in rounds POW = Stats of Wight and Armor +1 Mental stat per POW Health 5+ Pow"},
    // Evocation
        { id: 43, name: "Fireblast"     , desc: "Create a surge of fire that engulfs 3 targets. Power+Hits determine Damage Ref Save DC POW for half damage"},
        { id: 44, name: "Ball Lightning", desc: "Create a sphere of lightning that you can direct to a target area affecting 3.Power+Hits determine Damage Ref Save DC POW for half damage"},
        { id: 45, name: "Fireball"      , desc: "Create a sphere of flames that you can direct to a target area affecting POW mts.Power+Hits determine Damage"},
        { id: 46, name: "Telekinesis"   , desc: "Control objetcs with your mind. Power+ Hits determine weight to move 1 Success per kg 10 kg"},
        { id: 47, name: "Force Push"    , desc: "Create a wave of Force that crashes heavily against a target. Hits determine FTs pushed Back Fort Save DC POW"},
        { id: 48, name: "Ice Storm"     , desc: "Summon the power of a storm that rains down an area with ice and hail. 12 LD Hits determine Area of effect in Mts. Save Ref DC POW for half damage"},
        { id: 49, name: "Inferno"       , desc: "Summon the power of a Fire storm that incinerates everything it touches. 12 LD Hits determine Area of effect in Mts. Save Ref DC POW for half damage"},
        { id: 50, name: "Light"         , desc: "Cast a light source on an object, Light can blind a target and causes undead to be repelled Resolve DC based on POW to repel undead"},
        { id: 51, name: "Shatter"       , desc: "Causes a structure to fragmentate and shatter. Power+Hits determine damage to construct Fort saves DC POW"},
        { id: 52, name: "Darkness"      , desc: "Causes a pitch black darkness to envelope target area. Hits determine duration in rounds Causes Blind effect while in the area -8 to Attack DP"},
        { id: 53, name: "Word of Power Stun" , desc: "Utter a word that holds power to paralyze a target creature. Hits determine duration Fort Save DC POW"},
        { id: 54, name: "Levitate"      , desc: "Levitate yourself or target creature that you can see. Hits determine Duration in rounds, POW determines Targets affected"},
        { id: 55, name: "Firebolt"      , desc: "Target a creature in sight and fire a bolt of flames that deals flaming damage. Hits+POW determine damage Fort Save POW DC. "},
        { id: 56, name: "Ice Maiden"    , desc: "Target a creature in sight and Freeze him inside a spiked sarcophagus of ice causing 3 LD and rendering him immobile. Ref Save DC POW if Ref save is met you only receive 3 LD (Damage cant be mitigated). If Ref save failed then target is restrained and must make a Fort Save of POW or be restrained until you save or die (can save every turn)"},
    // Terramancy
        { id: 57, name: "Speak with Animals", desc: "Gain the ability to speak with animals and beasts. Hits determine duration in minutes"},
        { id: 58, name: "Control Weather"   , desc: "Manipulate the weather at will, causing rain, wind, storms or other kind of weather manipulation. Hits determine reach of change in Miles"},
        { id: 59, name: "Bark Skin"         , desc: "Gain DR+3 for physical damage. Hits determine duration in rounds"},
        { id: 60, name: "Entangle"          , desc: "Vines grow under target creature holding him in place 1 Standard action required to get free from Entanglement No save"},
        { id: 61, name: "Envenom"           , desc: "Zap Stamina of a target creature by 3 each turn until it dies. Hits determine Duration Fort Save DC POW (3 saves required to overcome Envenom)"},
        { id: 62, name: "Regenerate"        , desc: "Gain the abillity to regenerate lost limbs and heal constantly. (Heal 1 LD each turn) Hits determine duration in Minutes"},
        { id: 63, name: "Wall of wind"      , desc: "Immunity against ranged attacks. Hits determine Duration in rounds"},
        { id: 64, name: "Shade of the grove", desc: "A creature you touch becomes Invisible until the spell ends. The spell ends for a target that attacks or casts a spell. Hits determine duration (can cast this spell on yourself and another target at the same time)"},
        { id: 65, name: "Lycantropy"        , desc: "Transform into a werewolf gaining +3 to physical attributes, damage immunity to non magical or silvered weapons, gain regeneration of 2 LD per turn. Hits determine duration"},
        { id: 66, name: "Hands of the Gecko", desc: "Climb 90 degree walls without problem. Hits determine duration in minutes."},
        { id: 67, name: "Gaias Fury"        , desc: "Call the power of mother earth to aid you with powerful elemental damage, . Can target an area of POW mt that you can see to be afflicted with Gale winds, Lighning strikes and Shaterring Earthquakes causing 12 LD. No saving Throw "},
        { id: 68, name: "Water Breathing"   , desc: "Breathe under water Hits determine duration in minutes "},
        { id: 69, name: "Magma Surge"       , desc: "Summon the power of raging volcanic fires from within the earth to Melt your foes. Melted stones surge from the ground up causing Blazing fires to surround a target creature you can see causing POW+ Hits LD Fort Save POW DC"},
        { id: 70, name: "Stone Skin"        , desc: "Gain DR+3 for Magical damage. Hits determine duration "},
]

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
                <Spells school="Magical Arts" spells={magicalarts} ></Spells>
            </div>
            <div className="tab-pane fade" id="miracls" role="tabpanel" aria-labelledby="miracls-tab">
                <Spells school="Miracles" spells={magicalarts}></Spells>

            </div>
            <div className="tab-pane fade" id="corrupted" role="tabpanel" aria-labelledby="corrupted-tab">
                <Spells school="Corruption" spells={magicalarts} ></Spells>
            </div>
            <div className="tab-pane fade" id="kitech" role="tabpanel" aria-labelledby="kitech-tab">
                <Spells school="Ki Techs" spells={magicalarts} ></Spells>
            </div>
        </div>
    </Card>
  );
};

export default Spellbook;
