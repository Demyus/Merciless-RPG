import PerksList from "./PerksList";
import Card from "../../ui/Card";
import { useSelector } from "react-redux";

const perks = [
  { id: 0,  name: 'Select Perk...',        desc: '...'},
  { id: 1,  name: 'Adrenaline Rush',       desc: 'Character gets +5 to Initiative tests'},
  { id: 2,  name: 'Blind Sight',           desc: 'Even in the absence of light you are able to distinguish your surroundings. Penalty for fighting while blinded is only -3 DP'},
  { id: 3,  name: 'Blood and Steel',       desc: 'One handed weapon and shield bonus +1 to LD and +1 to Shield Parry'},
  { id: 4,  name: 'Brutal Intimidation',   desc: 'Your powers of persuasion stem from application of brute force rather than your social grace. Can use your STR stat instead of your CHR to Intimidate or Persuade your target'},
  { id: 5,  name: 'Burning Power',         desc: 'Spells that deal Damage increase +2DV and gain +2 Drain'},
  { id: 6,  name: 'Burnout',               desc: 'Not magic inclined. Every spell does 1/2 of the stated effect'},
  { id: 7,  name: 'Conjurer',              desc: 'You specialize in Conjuration spells granting you more knowledge on spells regarding this school of Magic. Gain +3 to your DP when casting Conjuration spells +1 DC to your spell saves'},
  { id: 8,  name: 'Deadly Warrior',        desc: 'Every time you bring an enemy to zero with a non mechanical or spellcasting Standard attack, you can immediately make an extra attack as Quick action.'},
  { id: 9,  name: 'Defender',              desc: 'Users of shields gain an additional +2 to Parry'},
  { id: 10, name: 'Drug Toleration',       desc: 'Gain +3 to your Saving throws DP to all addiction tests'},
  { id: 11, name: 'Dual Wield',            desc: 'Practitioners of Dual wielding weapons gain +1 LD and +1 to Parry'},
  { id: 12, name: 'Duelist',               desc: 'The duelist style gains +1 to your attack DP and gain +1 Parry (cant be a ranged weapon)'},
  { id: 13, name: 'Enchanter',             desc: 'You specialize in Enchaanting spells granting you more knowledge on spells regarding this school of Magic. Gain +3 to your DP when casting Enchanting spells +1 DC to your spell saves'},
  { id: 14, name: 'Evoker',                desc: 'You specialize in Evocation spells granting you more knowledge on spells regarding this school of Magic. Gain +3 to your DP when casting Evocation spells +1 DC to your spell saves'},
  { id: 15, name: 'Exceptional Attribute', desc: 'Can raise a single attribute to + 1 over chosen race Limit'},
  { id: 16, name: 'Exceptional Skill',     desc: 'Can raise a single Skill to +1 over the chosen race limit'},
  { id: 17, name: 'Fast Draw',             desc: 'Once per round, you can draw one additional weapon or sheathe another as a Quick action further more You can Quick Strike 1 target beating his initiative for 1 turn (once per encounter)'},
  { id: 18, name: 'Great Weapon',          desc: 'Practitioner of Great weapon styles gain +1 LD'},
  { id: 19, name: 'Grudge Bearer',         desc: 'You have a deep hatred for a particular kind of creature. Gain +3 to Attack DP if you attack the heated creature'},
  { id: 20, name: 'Guts',                  desc: 'Character hypes himself up to resist fear or intimidation tests. +2 to your saving throws DP on fear and intimidation checks'},
  { id: 21, name: 'Hawk Eye',              desc: 'Character gets a +1 to perception checks and gain a +1 to your range attack DP'},
  { id: 22, name: 'Lighting Reflex',       desc: 'Can reroll 2 dice that came out as 1 in any agility test (Once per encounter)'},
  { id: 23, name: 'Mage Slayer',           desc: 'You have practiced techniques useful in melee combat against spellcasters, If you are near a spellcaster that that is casting a spell you can make an immediate attack'},
  { id: 24, name: 'Magic Resistance',      desc: 'Gain +1 Magical Damage Reduction'},
  { id: 25, name: 'Necromancer',           desc: 'You specialize in Necromancy spells granting you more knowledge on spells regarding this school of Magic. Gain +3 to your DP when casting Necromancy spells and a +1 DC to your spell saves'},
  { id: 26, name: 'Terramancer',           desc: 'You specialize in Terramancy spells granting you more knowledge on spells regarding this school of Magic. Gain +3 to your DP when casting Terramancy spells +1 DC to your spell saves'},
  { id: 27, name: 'Twin Fangs',            desc: 'Twin daggers. You sacrifice some Accuracy of you weapon to gain Gain a +2LD on hit. -2 to your Attack DP'},
  { id: 28, name: 'Toughness',             desc: 'Gain +1 Natural Damage Reduction'},
  { id: 29, name: 'Toxin Resistance',      desc: 'Character gains a +2 to your saving throw DP to resist diseases, poisons or Toxins.'},
  { id: 30, name: 'Unarmed Combat',        desc: 'You have trained to attack using your body as your weapon. STR+STA+1 Stun Damage'},
  { id: 31, name: 'Weapon Mastery',        desc: 'Gain +2 Dice to your attack DP for your weapon of choice'},
] 

const gutsPerk = [  
  { id: 20, name: 'Guts',                  desc: 'Character hypes himself up to resist fear or intimidation tests. +2 to your saving throws DP on fear and intimidation checks'},
]

const Perks = (props) => {
  const stats = useSelector(state => state.charStats);
  const pc = useSelector(state => state.pcSlice);
  const perkSlice = useSelector(state=>state.perks);  
  const perkSlots = [];

  const generatePerkSlots = () => {
    if(pc.race === 'halfling') {
      perkSlots.push( 
        <PerksList 
          key = 'perkoSlotRacial'
          slot = 'slotRacial'
          perks = {gutsPerk} 
          controls = {false}
          first = {true}
          last = { false }
          slots = {perkSlice.slots}
        />
      )
    }


    for (let x = 1; x <= perkSlice.slots; x++) {
      perkSlots.push( 
        <PerksList 
          key = {`perkoSlot${x}`} 
          slot = {`slot${x}`} 
          perks = {perks} 
          controls = {x === perkSlice.slots? true : false } 
          first = {x === 1}
          last = {x === 5}
          slots = {perkSlice.slots}
        />
      )
    }
  }

  generatePerkSlots();

  return (
    <Card>
        <h4 className="text-center boldu">Perks</h4>
        <div className="col-sm-12">
            <p id="racial_feat"><b>Racial Feat:</b> {stats.racialPerk}</p>
        </div>
        {perkSlots}
        
    </Card>
  );
};

export default Perks;
