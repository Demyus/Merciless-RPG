import Card from "../../ui/Card";
import Spells from "./Spells";
import { useSelector } from "react-redux";

const magicalarts = {
    Enchanting: [
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
        { id: 10, name: "Valor"        , desc: "Gain immunity against fear effects Hits determine duration in minutes"},
        { id: 11, name: "Levitate"      , desc: "Levitate yourself or target creature. Hits determine duration in minutes"},
        { id: 12, name: "Identify"      , desc: "Identify magical properties of an item"},
    ], Conjuring: [
        { id: 0, name: "Summon Ifrit"    , desc: "Summon a fire elemental to aid you, Power determines Health and DR of the Ifrit. Hits determine duration in rounds "},
        { id: 1, name: "Summon Undine"   , desc: "Summon a Water elemental to aid you, Power determines Health and DR of the Undine. Hits determine duration in rounds"},
        { id: 2, name: "Summon Sylph"    , desc: "Summon a Wind elemental to aid you, Power determines Health and DR of the Sylph. Hits determine duration in rounds"},
        { id: 3, name: "Summon weapon"   , desc: "Conjure a magical weapon of your choice, weapon is bound to you and can be called at will, DMG as weapon +1 magical Hits determine duration in Minutes"},
        { id: 4, name: "Conjure Fortress", desc: "A small fortress appears infront of you, it can harbor 5 creatures and protects them, when inside gain Regen"},
        { id: 5, name: "Gate of Travel"  , desc: "Create a Portal that takes you to a place you have seen and remember. Hits determine duration of the portal 1 Hit = 1 Minute ( you can close the portal before with a quick action)"},
        { id: 6, name: "Blink"           , desc: "Vanish from sight appearing up to POW+HITS meters away to an unoccupied space that you can see"},
        { id: 7, name: "Meteor Strike"   , desc: "Summon a large meteor that falls and strikes an area of POW Mts hits determine area in Mts . 12 LD Reflex Save for Half damage"},
        { id: 8, name: "Myst of Agony"   , desc: "Myst obscure sight and causes terrible pain. Hits determine Penalty to dice pool."},
        { id: 9, name: "Summon Mount"    , desc: "Call forth a steed worthy of you. Hits determine Steeds stats"},
        { id: 10, name: "Entangle"        , desc: "Create a foliage that entangle foes that try to cross . Hits determine duration in rounds"},
        { id: 11, name: "Web"             , desc: "Sling thick webbing that paralyzes a foe, can use them to climb surfaces. Hits determine duration in minutes"},
        { id: 12, name: "Call Lighting"   , desc: "Call fort the power of Lighting on a target area. Attack hits 3 Targets Power+Hits determine damage Ref Save DC POW ( Hits 1st Target for Full damage, Second target for half and last target for half of that rounded up) "},
    ], Necromancy: [
        { id: 0, name: "Animate undead"    , desc: "Raise a corpse from the dead as an undead under your control corpse stats and abilities are the same as they were in Life. Hits determine duration in minutes need a corpse to animate"},
        { id: 1, name: "Create undead"     , desc: "Gather parts of corpses to create an undead Golem. Hits determines Duration Stats of Undead Golem and Armor +1 Physical stat per POW Health 5+ Pow"},
        { id: 2, name: "Atrophy"           , desc: "Weaken target creature causing str based damage by half. Hits determine Duration in rounds. Fort Save DC POW"},
        { id: 3, name: "Vampiric Blood"    , desc: "Drain the life force of target creature. Hits determine health gained Fort Save DC POW"},
        { id: 4, name: "Dark Abyss"        , desc: "Summon a black veil of darkness that no light can pierce and cause -3 to saving throws and -8 to Attack DP. Hits determine duration in rounds"},
        { id: 5, name: "Eyes of the Demon" , desc: "Call forth the power of sight from a demon, Eyes can pierce illusions, see in complete darkness. Hits determine duration in minutes"},
        { id: 6, name: "Agony"             , desc: "Cause great pain in a target creature. Hits determine dice penalties. Fort Save POW"},
        { id: 7, name: "Fear"              , desc: "Cause debilitating fear in an area of 10 Mts. creatures traped in the zone of fear are afflicted with paralyzing fear rendering them useless in combat as they will run from the encounter, If you are not frightened you are Shaken by the experience causing a -2 to your Attack DP. Hits determine targets. Res Save POW"},
        { id: 8, name: "Unhallow"          , desc: "Desecrate the ground you are on Causing -3 to Living creatures DP. And +3 to undead and Demons Hits determine Duration in rounds (Unhallow does not affect the spellcaster) "},
        { id: 9, name: "Share Pain"        , desc: "Spell that lets you share stun or lethal damage to target creature. Lethal Damage track+Hits determine Damage"},
        { id: 10, name: "Blindness/Deafness", desc: "Render a target blind or deaf. Hits determine duration how many targets you can affect Fort Save POW | Blind: Attack DP -8 | Deaf: -3 Saving throws"},
        { id: 11, name: "Circle of Despair" , desc: "Render Blind and Deaf every target that begins its turn inside the circle of Despair Fort Save POW | Blind: Attack DP -8 | Deaf: -3 Saving throws"},
        { id: 12, name: "Curse"             , desc: "Curse a target creature. Curse can render a targets Attribute to 1, reduce number of attack DP by -4 Dice or saving throws reduced to 1. A curse is taxing and the spellcaster receives - 5 Lethal Damage that cant be healed by magical means. Curses have no Saving throw and need Restoration magic to clear or to fulfill a quest"},
        { id: 13, name: "Legion"            , desc: "Send a wave of Dark powers from the abyss to animate any corpse that is in a 20 Meter Diameter. (Caster Remains in a trance while spell is in effect)"},
        { id: 14, name: "Death Knight"      , desc: "Summons a Death knight to fight by your side. Hits determine Duration in rounds POW = Stats of Death knight and Armor +1 physical stat per POW Health 5 + stamina"},
        { id: 15, name: "Word of Power Kill / Orcus Claw", desc: "Utter a corrupted word in the demonic languaje, causing Lethal damage to the target. Fort Save POW. If save fails Target falls dead. If Target saves, Hits determine Lethal Damage"},
        { id: 16, name: "Wight"             , desc: "Summons a Wight to fight by your side. Hits determine Duration in rounds POW = Stats of Wight and Armor +1 Mental stat per POW Health 5+ Pow"},
    ], Evocation: [
        { id: 0, name: "Fireblast"     , desc: "Create a surge of fire that engulfs 3 targets. Power+Hits determine Damage Ref Save DC POW for half damage"},
        { id: 1, name: "Ball Lightning", desc: "Create a sphere of lightning that you can direct to a target area affecting 3.Power+Hits determine Damage Ref Save DC POW for half damage"},
        { id: 2, name: "Fireball"      , desc: "Create a sphere of flames that you can direct to a target area affecting POW mts.Power+Hits determine Damage"},
        { id: 3, name: "Telekinesis"   , desc: "Control objetcs with your mind. Power+ Hits determine weight to move 1 Success per kg 10 kg"},
        { id: 4, name: "Force Push"    , desc: "Create a wave of Force that crashes heavily against a target. Hits determine FTs pushed Back Fort Save DC POW"},
        { id: 5, name: "Ice Storm"     , desc: "Summon the power of a storm that rains down an area with ice and hail. 12 LD Hits determine Area of effect in Mts. Save Ref DC POW for half damage"},
        { id: 6, name: "Inferno"       , desc: "Summon the power of a Fire storm that incinerates everything it touches. 12 LD Hits determine Area of effect in Mts. Save Ref DC POW for half damage"},
        { id: 7, name: "Light"         , desc: "Cast a light source on an object, Light can blind a target and causes undead to be repelled Resolve DC based on POW to repel undead"},
        { id: 8, name: "Shatter"       , desc: "Causes a structure to fragmentate and shatter. Power+Hits determine damage to construct Fort saves DC POW"},
        { id: 9, name: "Darkness"      , desc: "Causes a pitch black darkness to envelope target area. Hits determine duration in rounds Causes Blind effect while in the area -8 to Attack DP"},
        { id: 10, name: "Word of Power Stun" , desc: "Utter a word that holds power to paralyze a target creature. Hits determine duration Fort Save DC POW"},
        { id: 11, name: "Levitate "      , desc: "Levitate yourself or target creature that you can see. Hits determine Duration in rounds, POW determines Targets affected"},
        { id: 12, name: "Firebolt"      , desc: "Target a creature in sight and fire a bolt of flames that deals flaming damage. Hits+POW determine damage Fort Save POW DC. "},
        { id: 13, name: "Ice Maiden"    , desc: "Target a creature in sight and Freeze him inside a spiked sarcophagus of ice causing 3 LD and rendering him immobile. Ref Save DC POW if Ref save is met you only receive 3 LD (Damage cant be mitigated). If Ref save failed then target is restrained and must make a Fort Save of POW or be restrained until you save or die (can save every turn)"},
    ], Terramancy: [
        { id: 0, name: "Speak with Animals", desc: "Gain the ability to speak with animals and beasts. Hits determine duration in minutes"},
        { id: 1, name: "Control Weather"   , desc: "Manipulate the weather at will, causing rain, wind, storms or other kind of weather manipulation. Hits determine reach of change in Miles"},
        { id: 2, name: "Bark Skin"         , desc: "Gain DR+3 for physical damage. Hits determine duration in rounds"},
        { id: 3, name: "Entangle "          , desc: "Vines grow under target creature holding him in place 1 Standard action required to get free from Entanglement No save"},
        { id: 4, name: "Envenom"           , desc: "Zap Stamina of a target creature by 3 each turn until it dies. Hits determine Duration Fort Save DC POW (3 saves required to overcome Envenom)"},
        { id: 5, name: "Regenerate"        , desc: "Gain the abillity to regenerate lost limbs and heal constantly. (Heal 1 LD each turn) Hits determine duration in Minutes"},
        { id: 6, name: "Wall of wind"      , desc: "Immunity against ranged attacks. Hits determine Duration in rounds"},
        { id: 7, name: "Shade of the grove", desc: "A creature you touch becomes Invisible until the spell ends. The spell ends for a target that attacks or casts a spell. Hits determine duration (can cast this spell on yourself and another target at the same time)"},
        { id: 8, name: "Lycantropy"        , desc: "Transform into a werewolf gaining +3 to physical attributes, damage immunity to non magical or silvered weapons, gain regeneration of 2 LD per turn. Hits determine duration"},
        { id: 9, name: "Hands of the Gecko", desc: "Climb 90 degree walls without problem. Hits determine duration in minutes."},
        { id: 10, name: "Gaias Fury"        , desc: "Call the power of mother earth to aid you with powerful elemental damage, . Can target an area of POW mt that you can see to be afflicted with Gale winds, Lighning strikes and Shaterring Earthquakes causing 12 LD. No saving Throw "},
        { id: 11, name: "Water Breathing"   , desc: "Breathe under water Hits determine duration in minutes "},
        { id: 12, name: "Magma Surge"       , desc: "Summon the power of raging volcanic fires from within the earth to Melt your foes. Melted stones surge from the ground up causing Blazing fires to surround a target creature you can see causing POW+ Hits LD Fort Save POW DC"},
        { id: 13, name: "Stone Skin"        , desc: "Gain DR+3 for Magical damage. Hits determine duration "},
]}

const miracles = {
    Blessing: [
        { id: 0, name:"Bless weapon",       desc: "weapon gains +1 Holy damage. Power + Hits determine duration in Minutes (Undead, Devil and Demons Cant Mitigate the +1 Holy damage)"},
        { id: 1, name:"Flame Strike",       desc: "weapon gains +1 Fire damage. Power + Hits determine duration in Minutes (Undead cant Defend this fire damage) "},
        { id: 2, name:"Celerity",           desc: "Gain +1d6 to Initiative, gain +2 Dice to Dodge action hits determine duration in Rounds"},
        { id: 3, name:"Purify",             desc: "Food and Drink do not spoil, and restores spoiled food (food consumed after being purified heal 1 LD) "},
        { id: 4, name:"Aspersio",           desc: "Creates Holy water. Holy water Deals POW used as Damage to Undead, Devil and Demon Monster types"},
        { id: 5, name:"Enhance Strength",   desc: "Gain +2 str. Power+Hits Determine duration in rounds "},
        { id: 6, name:"Enhance Agility",   desc: "Gain +2 Agi. Power+Hits Determine duration in rounds "},
        { id: 7, name:"Enhance Stamina",   desc: "Gain +2 Sta. Power+Hits Determine duration in rounds "},
        { id: 8, name:"Zeal",               desc: "Your attacks heal you for every hit you score by 1LD per hit. Hits Determine Duration in rounds  "},
        { id: 9, name:"Aura of Valor",      desc: "Your presence inspire Valor and determination in others that are within 5 mts from you. You and friendly creatures Gain a +3 to saving throws that involve resolve and gains +2 attack DP Hits determine duration in Minutes "},
        { id: 10, name:"Breath of Life",     desc: "This Miracle oxygenates the blood of a voluntary subject, you cant die from air deprivation and allows you to breathe under water. Hits determine duration in Hrs "},
        { id: 11, name:"True Strike",        desc: "Your attack DP and guarantee 3 Hits on your results (if die score results as 1 it counts only as a failure) Hits determine duration in hrs "},
    ],
    Mending: [
        { id: 0, name: "Heal"            , desc: "Heal lethal wounds at 1 box per hit. Heal Hits to target Creature in touch range"},
        { id: 1, name: "Detoxify"        , desc: "Subdue the toxic effects of Poisons or illness that assaults a target, Hits determine targets to heal"},
        { id: 2, name: "Regeneration"    , desc: "Gain the abillity to regenerate lost limbs and heal constantly. Heal target stamina as LD, Hits determine Duration in Minutes"},
        { id: 3, name: "Prayer"          , desc: "Say a healing prayer for a target creatur that you have line of sight, healing it for your determined POW. Hits determines range of heal."},
        { id: 4, name: "Sacred Word"     , desc: "You utter a prayer that heals 3 LD to a target that is no more than 10 Mts, Hits determine Targets"},
        { id: 5, name: "Restore"         , desc: "Dispells petrification, Cancels (cancel not remove) Berserk, Lycantropy and Paralysis"},
        { id: 6, name: "Resist Poisons"  , desc: "Gain resistance to all kind of poisons and toxins. +3 to DP saving throws Hits determine duration"},
        { id: 7, name: "Resurrection"    , desc: "Bring a creature back from the dead Requires 1 Diamond of no less than 10 or the Miracle renders the caster without Divine power for 15 - Hits Days"},
        { id: 8, name: "Circle of Health", desc: "Friendly characters that begin their turn inside the circle of health gain +3 to Lethal track while inside the circle. Hits determine Duration"},
        { id: 9, name: "Remove Disease"  , desc: "Cure all kind of diseases that afflict target creature"},
        { id: 10, name: "Lift Darkness"   , desc: "Remove Illusions on target creature and enchantments  "},
        { id: 11, name: "Healing Hands"   , desc: "Your hands touch a target and heal your designated POW to a single target. Hits determine"},
        ],
    Providence: [
        { id: 0, name: "Shield of Faith" , desc: "Gain +3 DR Hits Determine Duration in minutes"},
        { id: 1, name: "Resistance"      , desc: "Gain +3 to saving throws. Hits determine duration in minutes"},
        { id: 2, name: "Endure Elements" , desc: "Gain resistance of +5 DR against chosen element. Hits determine duration in hrs "},
        { id: 3, name: "Consecrate"      , desc: "Prayer that makes sacred ground, undead creatures must make fort save or take 2 lethal damage Hits determine duration in Rounds "},
        { id: 4, name: "Magic Resistance", desc: "Gain resistance against spells 10 DR. Hits determine duration in rounds"},
        { id: 5, name: "Holy Light"      , desc: "Create a white heatless light that causes fear in undead Res save DC POW hits determine duration in rounds"},
        { id: 6, name: "Divine Power"    , desc: "Gain +2 Holy LD with all attacks Hits determine duration in rounds (Undead, Devil and Demons Cant Mitigate the +2 Holy damage)"},
        { id: 7, name: "Devotion"        , desc: "Protect target creature, Lethal damage is shared between caster and target creature for 1 hr. Hits determine Targets affected"},
        { id: 8, name: "Bulwark"         , desc: "Gain +10 DR against Ranged attacks except magical attacks"},
        { id: 9, name: "Inspiration"     , desc: "Target creature cannot fall uncouncious unless Lethal track is filled +2 sta Hits determine duration"},
        { id: 10, name: "Death guard"     , desc: "If slain in battle stabilize and you have 1 lethal track left for 10 minutes. Hits determine targets"},
        { id: 11, name: "Barrier"         , desc: "Create a barrier of celestial energy in a sphere, emanating from the caster, creatures trying to pass trough this barrier suffer 8LD or half on a succesfull Fort save DC POW. Hits determine duration"},
        ],
    Divination: [
        { id: 0, name: "Detect Evil"      , desc: "An aura of dark mist surrounds all that has evil intent. Gain a +1 to parry, dodge and +2 to initiative and can't be ambushed. Hits determine duration in hrs"},
        { id: 1, name: "Augury"           , desc: "Learn whether an action would be good or bad. Ask game master for results Hits determine response"},
        { id: 2, name: "Wind whisper"     , desc: "Target creatures can communicate at distance for 1hr. Power + Hits determine Duration, Power determines targets affected "},
        { id: 3, name: "Control Weather"  , desc: "Control Winds, rain, thunder, Quakes and other elemental conditions. 10 LD to an area of 10 Mts Hits determine Targets affected"},
        { id: 4, name: "Divination"       , desc: "Provides a glimpse into de future letting you re roll unsatisfactory results up to 3 times. Hits detirmine duration in hr"},
        { id: 5, name: "Circle of Truth"  , desc: "Compels creatures within the circle to say nothing but the truth. Hits determine duration in minutes"},
        { id: 6, name: "Mark of Justice"  , desc: "Mark target creature that is compelled to attack you or take 1 Lethal damage, you have +2 to your attack DP against this creature. Hits determine duration "},
        { id: 7, name: "Fist of the Deity", desc: "Your deity grants you power to crush foes who go against his will. Power + Hits Holy damage to a target area of 10 mts. Undead, Demon and Devils have -4 DR Ref for Half damage DC POW"},
        { id: 8, name: "Foretold"         , desc: "Throw 2 Dice and keep their score, you can influence the battle field for good or ill. Hits determine duration in minutes "},
        { id: 9, name: "Read thoughts"    , desc: "Read the thoughts of target creature. Hits determine duration "},
        { id: 10, name: "True Sight"       , desc: "Detect illusions, invisible or astral creatures. Hits Determine duration in hrs"},
    ],
    Exorcist: [
        { id: 0, name: "Holy Power"    , desc: "Raise your holy symbol high to cause damage equal to your power. POW determines area in mts"},
        { id: 1, name: "Holy Weapon"   , desc: "You imbue sacred power to your weapon each attack made with a holy weapon counts as magical Gain +1 Holy LD. Undead and demons take +2 Holy LD and cant mitigate damage"},
        { id: 2, name: "Judgement"     , desc: "Add your Power+weapon as dmg instead of your str. Damage is holy and has Penetration = 2"},
        { id: 3, name: "Holy Light "   , desc: "Imbue the power of your deity to an object, causing it to shine a light that makes undead uneasy. Creates a brigt light that causes Fear to undead, Demons and Devils Res Save DC POW"},
        { id: 4, name: "Sacred Ground" , desc: "Bless the ground that is around you. Undead and demons cant enter this sacred ground willingly, if an undead or demon is found on sacred ground all his DP have a penalty of -4"},
        { id: 5, name: "Zeal "          , desc: "Each attack heals for weapon Damage. Hits determine duration"},
        { id: 6, name: "Root"          , desc: "Target creature feels as if his legs are made out of lead, target can only walk as if under the slow effect. Hits determine duration Res Save DC POW "},
        { id: 7, name: "Enhance Senses", desc :"Augment reaction of a character to super human lvs. +3 DP to saving throws Hits determine duration in Hrs "},
        { id: 8, name: "Holy Water"    , desc: "Creates water with the holy property that burns Undead, Devils and demons. Holy water Deals POW Holy LD to Undead, Devil and Demon Monster types. Hits determine Liters of water that can be Blessed"},
        { id: 9, name: "Smite"         , desc: "Utter a prayer to slay an evil creature (add POW to your DMG) Hits determine duration"},
        { id: 10, name: "Banishment"    , desc: "Compel a summoned creature or extra planar entity to return to their plane of existance. Res Resolve vs POW "},
        { id: 11, name: "Boost"         , desc: "You call upon inner strength to perform amazing physical feats beyond their normal abilities +2 to agility and stamina, gain the ability to fall from great heights Hits determine Duration in hrs"},
    ]
}

const corruption = {
    Banes: [
        { id: 0, name:'Curse weapon',     desc: 'Target loses -3 to your attack pool. Power + Hits determine duration in rounds'},
        { id: 1, name: 'Hell Fire',       desc: 'Weapon gains +1 Fire damage deals double damage on celestials. Power + Hits determine duration Cant be mitigated with DR'},
        { id: 2, name: 'Letargy',         desc: 'Lose -1d6 to Initiative, and -2 Dice to Dodge and parry action Fortitude Save DC POW'},
        { id: 3, name: 'Rot',             desc: 'Food and Drink spoil instantly, causes illness if used on a living target causing weakness of -1 to STR, STA and AGI. Fortitude Save DC POW'},
        { id: 4, name: 'Vile water',      desc: 'Creates Poison and toxic water: Poison creates a POW MTS diameter of gas cloud that causes 2 points of Stamina damage if you end your turn inside the gas cloud. Fortitude Save DC POW'},
        { id: 5, name: 'Weaken Strength', desc: 'Lose -2 str. Power+Hits Determine duration in rounds'},
        { id: 6, name: 'Weaken Agility' , desc: 'Lose -2 Agi. Power+Hits Determine duration in rounds'},
        { id: 7, name: 'Weaken Stamina' , desc: 'Lose -2 Sta. Power+Hits Determine duration in rounds'},
        { id: 8, name: 'Apathy',          desc: 'Each Standard action you make fatigues you for 3 Stun DMG. Hits Determine Duration Fortitude Save DC POW'},
        { id: 9, name: 'Horror',          desc: 'Cause Paranoic trait -8 To all saving throws Hits determine duration in Rounds'},
        { id: 10, name: 'Masoquism',       desc: 'Gain 1 extra Attack die to your attack pool +1 extra die per each point of Lethal damage that you have. Hits determine duration in rounds'},
        { id: 11, name: 'Vile Strike',     desc: 'Gain +2 bleeding DMG (cant be mitigated with DR) Hits determine duration in rounds'}
    ],
    Wounding: [
        { id: 0, name:'Wound',          desc: 'Deal lethal wounds at 1 box per hit. POW+ HITS determine damage'},
        { id: 1, name:'Toxify',         desc: 'Create a cloud of toxic gas that blinds targets that end their turn inside of it causing 2 Lethal Damage per turn that you remain inside. Hits determine duration in rounds'},
        { id: 2, name:'Degeneration',   desc: 'Your body starts to break down from the inside out. Causing you 2 stamina points of damage Per round. Hits determine duration in rounds'},
        { id: 3, name:'Bone Blast',     desc: 'Break a bone of one target creature -1 Str - 1 Stam -2 Lethal Damage and -2 to Attack DP. Fortitude SaveDC of POW'},
        { id: 4, name:'Unholy Word',    desc: 'You utter a single prayer that Deals 3 Lethal damage to a target that is no more than 10 m'},
        { id: 5, name:'Hopeless',       desc: 'Makes permanent petryfication, Berserk, Lycantropy and Paralysis requires some kind of quest to remove this affliction. (Curses have no Saving throw and need Restoration magic to clear or to fulfill a quest)'},
        { id: 6, name:'Lethality',      desc: 'Lose resistance to all kind of poisons and toxins. -10 to saves Hits determine duration'},
        { id: 7, name:'Death word',     desc: 'Bring a creature to the halls of the dead. Fort Save POW. If save fails Target falls dead. If Target saves, Hits determine Lethal Damage'},
        { id: 8, name:'Circle of Death',desc: 'Lose -3 to Lethal track while inside a 5Mt circle. Power and hits determine Duration'},
        { id: 9, name:'Plague',         desc: 'you afflict the creature with a disease. A raging fever sweeps through the creature\'s body. Reroll every str and stamina check that was a success. Hits determines duration in Rounds'},
        { id: 10, name:'Darkness',       desc: 'Summon a black veil of darkness that no light can pierce. Hits determine duration in minutes'},
        { id: 11, name:'Death Grip',     desc: 'You Concentrate to crush your targets throat causing him to suffocate. POW+ Hits determine Lethal'},
    ],
    Defiling: [
        { id: 0, name: 'Felguard',             desc: 'Target creature Loses -5 DR, Hits determine duration Standard Yes'},
        { id: 1, name: 'Vulnerability',        desc: 'Lose -3 to saving throws. Hits determine duration Standard Yes'},
        { id: 2, name: 'Sadism',               desc: 'Gain +1 Damage when you deal damage to a target creature to a Max of +3 Standard No'},
        { id: 3, name: 'Desecrate',            desc: 'Prayer that makes unholy ground, creatures must make fort save or take 2 lethal damage while standing on the unholy ground Hits determine duration in rounds Complex No'},
        { id: 4, name: 'Magic Resistance ',     desc: 'Gain +5DR against spells. Power+Hits Standard No'},
        { id: 5, name: 'Wicked Light',         desc: 'Create a white heatless light that causes fear in all who sees it. creatures who are in the light are afflicted with paralyzing fear rendering them useless in combat as they will run from the encounter, If you are not frightened you are Shaken by the experience causing a -2 to your Attack DP. Hits determine targets. Res Save POW'},
        { id: 6, name: 'Power Overwhelming',   desc: 'Gain +2 Damage for each Stamina point sacrificed. (stamina returns after 1 day of rest) Miracle lasts until you rest.'},
        { id: 7, name: 'Demon Flesh',          desc: 'Gain +3 DR Hits determine Duration in rounds Standard Yes'},
        { id: 8, name: 'Aura of Fear',         desc: 'Instill great fear to all around you. creatures who are in an area near 10mts of the caster are afflicted with paralyzing fear rendering them useless in combat as they will run from the encounter, If you are not frightened you are Shaken by the experience causing a -2 to your Attack DP. Hits determine targets. Res Save POW'},
        { id: 9, name: 'Death Pact',           desc: 'If slain in battle stabilize and you have 1 lethal track. Hits determine duration in minutes Standard Yes'},
        { id: 10, name: 'Bone weapon',          desc: 'Extend your bone and marrow into a blade from your hand, Bone blade behaves as Dagger or sword +1LD, hits made with Bone blade have Damage Penetration of +2. Hits Determine duration Standard Yes'},
        { id: 11, name: 'Hands of Destruction', desc: 'Your touch causes living organisms to wither and decay bringing death. Lethal damage equal to POW used. Fort Save of POW, save for half Damage'},
    ],
}

const kitechs = {
    'Spirit Warrior': [
        { id: 0, name: 'Aura Bolt', desc: 'You spend 1 Ki poiint to weaponize your Soul to cause major damage to a target creature at 10 Mts or less unless a saving throw of Reflex = Hits Difficulty. DMG= POW+Intuiton+Hits'},
        { id: 1, name: 'Meteor', desc: 'You spend 1 Ki Point when you fall more than 5 mts you add your falling distance to your Attack Damage. POW + Int + Height'},
        { id: 2, name: 'Cleanse Mind', desc: 'You spend 1 Ki Purge mind affecting spells from affecting you Add your POW to your Resolve save'},
        { id: 3, name: 'Spirit Bomb', desc: 'you spend 3 KI points to make an overwhelming Sphere of Spirit Power that emmanates from your body causing Lethal damage in an area around you. POW+Intuition'},
        { id: 4, name: 'Aura Sight', desc: 'Spend 1 Ki Point as a bonus action to see the auras of every sentient living being and their intentions POW+Intuition determines duration'},
        { id: 5, name: 'Spirit Strike', desc: 'Spend 3 Ki Points to Attack a target and ignore its Armor. POW+Intuition Determines ignored damage '},
        { id: 6, name: 'Levitation', desc: 'You spend 2 Ki Points to use an action so you can Levitate yourself vertically, up to 10 Mts and remains suspended there for the Duration. POW+INT determines duration'},
        { id: 7, name: 'Ethereal Form', desc: 'You spend 3 kI points and spend your reaction to enter the ethereal plane for an instant, all damage that would be inflicted upon you is reduced to 0. POW+INT'},
        { id: 8, name: 'Elemental Attack', desc: 'You spend 2 Ki points and an action to Infuse your attacks with an element of your choice. Int+POW determines Duration'},
        { id: 9, name: 'Stillness', desc: 'You spend 3 Ki points and an action to Heal your wounds POW+INT. Hits determines Heal'},
    ],
    Shadow: [
        { id: 0, name: 'Predator Soul', desc: 'you can use your action to spend 4 KI points to become invisible for POW + Intuition. During that time, you also have resistance to a chosen Damage type'},
        { id: 1, name: 'Life Drain', desc: 'You can use your Action to spend 2 KI points to Absorb the health points of your target POW+AGI'},
        { id: 2, name: 'Aura of Death', desc: 'You can spend 2 KI points to use your quick action to gain the ability to unsettle or terrify those around you POW + CHR + HITS. Resolve Save ends Difficulty =Hits'},
        { id: 3, name: 'Mastery of Death', desc: 'You can spend The maximum KI points you possess to Escape the grasp of Death . (Fall to 0 Health)'},
        { id: 4, name: 'Shadow Step', desc: 'You can warp around the battlefield when you spend 2 Ki points to use a quick action to move to a place you can see. AGI+POW determines distance in Mts'},
        { id: 5, name: 'Death Strike', desc: 'Spend 3 Ki points to cause damage to your targets Fortitude. POW+Agi = Stamina Damage. FORT save reduces damage'},
        { id: 6, name: 'Shadow Clone', desc: 'Spend 3 Ki points and an action to create a shadow clone of yourself. POW+AGI, Hits determine Stats'},
        { id: 7, name: 'Adrenaline Boost', desc: 'Spend 1 Ki Point and gain +1d6 to your initiative roll. POW+AGI determines Duration'},
        { id: 8, name: 'Spell Resistance', desc: 'You spend 2 Ki Points to add your POW+INT to your spell save'},
        { id: 9, name: 'Lethal Blow', desc: 'You spend 2 Ki points to add your POW to you attack dice pool'},
    ],
    'Diamond Fist': [
        { id: 0, name: 'Rapid Strike', desc: 'you can spend 1 ki point to add you POW to your Attack pool ADD Agi+Pow+weapon DMG to your attack pool'},
        { id: 1, name: 'Wind Step', desc: 'you can spend 1 ki point to add your Ki power to your Evade'},
        { id: 2, name: 'Stunning Strike', desc: 'Paralizing attack that renders a target helpless POW+STR. Save = Fortitude + HITS'},
        { id: 3, name: 'Counter Strike', desc: 'When a creature Attacks you with a melee attack roll, you can spend 1 ki point as a reaction to Parry or Dodge (Which ever is higher) that attack to hit one creature of your choice, in range. Add POW to Parry or Dodge if you succed, add your hits to the attack.'},
        { id: 4, name: 'Ki attack', desc: 'Spend 1 Ki point to infuse your attacks with devastating lethal damage. POW+Stamina determines duration, ADD POW to your Attacks.'},
        { id: 5, name: 'Wholeness of body', desc: 'Spend 2 Ki Points to Heal your Stamina in health. PWR+Stamina Determines duration'},
        { id: 6, name: 'Diamond Body', desc: 'mastery of the ki flowing through you makes cleanses poisons or diseases Add your POW to your Fortitude Save'},
        { id: 7, name: 'Physical Boost', desc: 'You call upon inner strength to perform amazing physical feats beyond their normal abilities. Gain +2 to your selected attribute POW+Physical Attirbute to boost. Hits determine duration'},
        { id: 8, name: 'Slow Fall', desc: 'you can spend 1 ki point to add your POW to your Reflex save to reduce falling damage, each hit reduces 1 meter for falling damage'},
        { id: 9, name: 'Mystic Armor', desc: 'You Spend 2 Ki points and and action to activate this power that protects you from physical attacks. POW+Stamina. Hits determines duration'},
    ]
}
   
const Spellbook = (props) => {
    const magicalArtsSpellSlots = [];
    const miraclesSpellSlots = [];
    const corruptionSpellSlots = [];
    const kiTechsSpellSlots = [];
    const spellSlots = useSelector(state => state.spells);

    const generateSpellSlots = (school, spells, slots) => {
        const schoolSlots = spellSlots[`${school} spellsSlots`]
        for (let x = 1; x <= schoolSlots; x++) {
            slots.push(
                <Spells 
                    key={`spellSlot${x}`} 
                    school={school} 
                    spells={spells} 
                    controls = { x === schoolSlots }
                    first = {x === 1}
                />
            )
        }    
    }
    
    generateSpellSlots('Magical Arts', magicalarts, magicalArtsSpellSlots);
    generateSpellSlots('Miracles', miracles, miraclesSpellSlots);
    generateSpellSlots('Corruption', corruption, corruptionSpellSlots);
    generateSpellSlots('Ki Techs', kitechs, kiTechsSpellSlots);

 //props.controls
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
                { magicalArtsSpellSlots }
            </div>
            <div className="tab-pane fade" id="miracls" role="tabpanel" aria-labelledby="miracls-tab">
                { miraclesSpellSlots }

            </div>
            <div className="tab-pane fade" id="corrupted" role="tabpanel" aria-labelledby="corrupted-tab">
                { corruptionSpellSlots }
            </div>
            <div className="tab-pane fade" id="kitech" role="tabpanel" aria-labelledby="kitech-tab">
                { kiTechsSpellSlots }
            </div>
        </div>
    </Card>
  );
};

export default Spellbook;
