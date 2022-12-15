import Card from "../../ui/Card";
import Gears from "./Gears";

const gearList = [
    { Gear: [
        { id:0, cost: 30  , name: 'Alchemy Supplies'},
        { id:1, cost: 30  , name: 'Antidote'},
        { id:2, cost: 2   , name: 'Caltrops'},
        { id:3, cost: 150 , name: 'Bomb'},
        { id:4, cost: 5   , name: 'Chain 10FT'},
        { id:5, cost: 5   , name: 'Brewing kit'},
        { id:6, cost: 10  , name: 'Torch (10)'},
        { id:7, cost: 20  , name: 'Lamp'},
        { id:8, cost: 1   , name: 'Oil (5 Liters)'},
        { id:9, cost: 1   , name: 'Rope (10 Meters)'},
    ]},{
    Armors: [
        { id:10, cost: 5    , name: 'Robes'},
        { id:11, cost: 10   , name: 'Leather Armor'},
        { id:12, cost: 30   , name: 'Studded Leather'},
        { id:13, cost: 100  , name: 'Chain Mail'},
        { id:14, cost: 125  , name: 'Scale Mail'},
        { id:15, cost: 500  , name: 'Splint Mail'},
        { id:16, cost: 800  , name: 'Half Plate'},
        { id:17, cost: 1200 , name: 'Full Plate'},
    ]},{
    Weapons: [
        { id:18, cost:5  , name: 'Daggers'},
        { id:19, cost:10 , name: 'Short Sword '},
        { id:20, cost:15 , name: 'Long Sword '},
        { id:21, cost:50 , name: 'Claymore '},
        { id:22, cost:10 , name: 'Hand Axe '},
        { id:23, cost:12 , name: 'Combat Axe '},
        { id:24, cost:35 , name: 'Two handed Axe '},
        { id:25, cost:1  , name: 'Club'},
        { id:26, cost:15 , name: 'Morningstar '},
        { id:27, cost:8  , name: 'Mace'},
        { id:28, cost:20 , name: 'War Hammer '},
        { id:29, cost:4  , name: 'Stilleto'},
        { id:30, cost:20 , name: 'Rapier '},
        { id:31, cost:5  , name: 'Spear'},
        { id:32, cost:10 , name: 'Pole Arm '},
        { id:33, cost:2  , name: 'Staff'},
    ]},{
    Ranged: [
        { id:34, cost:30   , name: 'Short Bow '},
        { id:35, cost:50   , name: 'Long Bow  '},
        { id:36, cost:80   , name: 'Composite Bow '},
        { id:37, cost:100  , name: 'Hand Crossbow '},
        { id:38, cost:200  , name: 'Crossbow '},
        { id:39, cost:500  , name: 'Heavy Crossbow'},
        { id:40, cost:2500 , name: 'Pistol'},
    ]},{
    Shields: [
        { id:41, cost: 10  , name: 'Buckler '},
        { id:42, cost: 40  , name: 'Kite '},
        { id:43, cost: 100 , name: 'Tower'},
    ]},{
    Magics: [
        { id:44, cost: 100 , name: 'Heal Potion'},
        { id:45, cost: 200 , name: 'Scroll of Protection'},
        { id:46, cost: 200 , name: 'Rune of Mending'},
        { id:47, cost: 100 , name: 'Scroll of Flames'},
        { id:48, cost: 25  , name: 'Orb of Light (5)'},
        { id:49, cost: 50  , name: 'Scroll of Blessings'},
    ]},
]

const Gear = (props) => {

  return (
    <Card>
        <div className="row">
            <h4 className="text-center">Gear</h4>
            <div className="col" >
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
            </div>
            <div className="col" >
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
            </div>
            <div className="col" >
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
                <Gears gearList={gearList} />
            </div>
        </div>
    </Card>
  );
};

export default Gear;
