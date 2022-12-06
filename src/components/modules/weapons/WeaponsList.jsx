import { useRef, useState } from "react";
import { gearActions } from "../../../store/gear-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const weapons = {
    Blades: [
        { id:0, name: 'Daggers'                , hands:1, reqs: 0, hit: 3  , type: 'Blades', reach: 0 , damage: 1, props: 'Armor Penetration +2. Back Stab ignores Armor' },
        { id:1, name: 'Short Sword'            , hands:1, reqs: 0, hit: 1  , type: 'Blades', reach: 0 , damage: 3, props: 'Bleeds target for 1 LD (cant be mitigated)' },
        { id:2, name: 'Hand Axe'               , hands:1, reqs: 0, hit: 0  , type: 'Blades', reach: 0 , damage: 2, props: 'Roll 9 again' },
        { id:3, name: 'Long Sword [Str 2]'     , hands:1, reqs: 2, hit: 0  , type: 'Blades', reach: 1 , damage: 4, props: 'Versatil +1 Lethal when wielded with 2 hands' },
        { id:4, name: 'Combat Axe [Str 3]'     , hands:1, reqs: 3, hit: 0  , type: 'Blades', reach: 1 , damage: 4, props: 'Bleeds target for 1 LD (cant be mitigated)' },
        { id:5, name: 'Claymore [Str 4]'       , hands:2, reqs: 4, hit: -1 , type: 'Blades', reach: 2 , damage: 5, props: 'Roll 9 again' },
        { id:6, name: 'Two handed Axe [Str 4]' , hands:2, reqs: 4, hit: -1 , type: 'Blades', reach: 1 , damage: 5, props: 'Roll 9 again +2 Armor Penetration' },
    ],
    Blunt: [
        { id:7, name: 'Club'                , hands:1, reqs: 0, hit:  2, type: 'Blunt', reach: 0, damage: 1, props: 'Stun -2 Dice on next turn on afflicted target'},
        { id:8, name: 'Morningstar [Str 2]' , hands:1, reqs: 2, hit:  1, type: 'Blunt', reach: 0, damage: 2, props: 'Stun -2 Dice on next turn on afflicted target'},
        { id:9, name: 'Mace [Str 2]'        , hands:1, reqs: 2, hit:  0, type: 'Blunt', reach: 1, damage: 3, props: 'Stun -2 Dice on next turn on afflicted target'},
        { id:10, name: 'War Hammer [Str 4]'  , hands:1, reqs: 4, hit: -1, type: 'Blunt', reach: 1, damage: 4, props: 'Roll 9 again Stun -2 Dice on next turn on afflicted target'},
        { id:11, name: 'Maul [Str 4]'        , hands:2, reqs: 4, hit: -2, type: 'Blunt', reach: 1, damage: 5, props: 'Stun -3 Dice on next turn on afflicted target'},
    ],
    Pierce: [
        { id:12, name: 'Stilleto'           , hands:1, reqs: 0, hit: 3 , type: 'Pierce', reach: 0, damage: 1, props: 'Armor Penetration +2. Back Stab ignores Armor'},
        { id:13, name: 'Rapier'             , hands:1, reqs: 1, hit: 1 , type: 'Pierce', reach: 1, damage: 2, props: 'Armor Penetration +2'},
        { id:14, name: 'Short Spear [Str 2]', hands:1, reqs: 2, hit: 0 , type: 'Pierce', reach: 1, damage: 2, props: 'Armor Penetration +2 Can be Thrown dealing STRX2 +2'},
        { id:15, name: 'Spear [Str 2]'      , hands:1, reqs: 3, hit:-1 , type: 'Pierce', reach: 3, damage: 3, props: 'Armor Penetration +2 Versatil +1 Lethal when wielded with 2 hands'},
        { id:16, name: 'Pole Arm [Str 4]'   , hands:2, reqs: 4, hit:-2 , type: 'Pierce', reach: 3, damage: 4, props: 'Armor Penetration+3'},
    ],
    Ranged: [
        { id:17, name: 'Short Bow'             , hands:2, reqs: 0, hit: 1, type: 'Ranged', reach: '20 Mtrs', damage: 1, props: '1 Quick Action to load Arrow'},
        { id:18, name: 'Long Bow [Str 2]'      , hands:2, reqs: 2, hit: 0, type: 'Ranged', reach: '30 Mtrs', damage: 2, props: '1 Quick Action to load Arrow'},
        { id:19, name: 'Composite Bow [Str 3]' , hands:2, reqs: 3, hit: 0, type: 'Ranged', reach: '50 Mtrs', damage: 3, props: '1 Quick Action to load Arrow'},
    ],
    Mechanical: [
        { id:20, name: 'Hand Crossbow'                , hands:1, reqs: 0, ranged: 0, hit: 1, type: 'Mechanical', reach: '10 Mtrs', damage:  5, props: '1 Quick Action -2 to Attack DP to load Bolt'},
        { id:21, name: 'Crossbow [Str 2 Rng 2]'       , hands:2, reqs: 2, ranged: 2, hit: 0, type: 'Mechanical', reach: '30 Mtrs', damage:  7, props: '1 Quick Action to Load Bolt'},
        { id:22, name: 'Heavy Crossbow [Str 3 Rngd 3]', hands:2, reqs: 3, ranged: 3, hit: 0, type: 'Mechanical', reach: '50 Mtrs', damage:  9, props: '1 Quick Action to Load Bolt'},
        { id:23, name: 'Pistol [Ranged 4]'            , hands:1, reqs: 0, ranged: 4, hit: 1, type: 'Mechanical', reach: '10 Mtrs', damage:  8, props: '1 Quick Action -2 to Attack DP to load Bullet'},
        { id:24, name: 'Musket Rifle [Ranged 4]'      , hands:2, reqs: 0, ranged: 4, hit: 0, type: 'Mechanical', reach: '50 Mtrs', damage: 10, props: '1 Quick Action -2 to Attack DP to load Bullet'},
        { id:25, name: 'Revolver 5 [Ranged 4]'        , hands:1, reqs: 0, ranged: 5, hit: 0, type: 'Mechanical', reach: '10 Mtrs', damage:  7, props: '1 Quick Action -2 to Attack DP to load Bullet'},
    ],
}
//console.log(Object.keys(weapons))
const WeaponsList = (props) => {
    const stat = useSelector(state => state.charStats);
    const [selectedWpn, setSelectedWpn] = useState({
        hit: '-',
        type: '-',
        reach: '-',
        damage: '-',
        props: '-',
    });

    const dispatch = useDispatch();
    //const gear = useSelector(state => state.gear);
    const currentWpn = useRef();

    const updateWeapon = () => {
        const id = currentWpn.current.value;
        if(id === 'none') {
            setSelectedWpn({hit: '-',
            type: '-',
            reach: '-',
            damage: '-',
            props: '-',});

            dispatch(gearActions.setGear({gear: `weapon${props.slot}`, amount: id}))
            return
        }
        //console.log(id)
        const details = Object.keys(weapons)
        const result = []
        details.map(parent => {
            weapons[parent].map((wpn,i) => {
                if(wpn.id === +id ) {
                    result.push(weapons[parent][i])
                }
                return null
            })
            return null
        })
        setSelectedWpn({
            hit: result[0].hit + stat.Agility,
            type: result[0].type,
            reach: result[0].reach,
            damage: result[0].damage + stat.Strength,
            props: result[0].props,
        })
        dispatch(gearActions.setGear({gear: `weapon${props.slot}`, amount: +id}))
        //console.log(result[0].name);
    }


  return (
    <div className="row mb-2">
        <div className=" col-sm-3">
            <b>Name</b>
            <hr className="my-1" />
            <select className="form-select mb-1" onChange={updateWeapon} ref={currentWpn}>
                <option id="id" value="none" selected>Choose...</option>
                {   Object.keys(weapons).map(wpn => {                    
                   return (
                        <optgroup key={wpn+'Parent'} label={wpn} >
                            {
                                weapons[wpn].map(item => {
                                    return (
                                        <option id={'wpn'+item.id}  key={item.id} value={item.id} className="" >
                                            {item.name}
                                        </option>
                                    )
                                })
                            }
                        </optgroup>
                        )
                    })
                }
            </select>
        </div>
        <div className=" col-sm-1  text-center">
            <b data-bs-toggle="tooltip" data-bs-placement="top" title="'acc + prof + agi + other'" >HIT</b>
            <hr className="my-1" />
            {selectedWpn.hit}
        </div>
        <div className=" col-sm-1  text-center">
            <b>Type</b>
            <hr className="my-1" />
            {selectedWpn.type}
        </div>
        <div className=" col-sm-1  text-center">
            <b>Reach</b>
            <hr className="my-1" />
            {selectedWpn.reach}
        </div>
        <div className=" col-sm-1  text-center">
            <b data-bs-toggle="tooltip" data-bs-placement="top" title="'STR + WPN'" >Damage<span v-show="bloodnsteel && type != 'Ranged' && type != 'Mechanical' && hands == 1 ">*</span></b>
            <hr className="my-1" />
            {selectedWpn.damage}
        </div>
        <div className=" col">
            <b>Properties</b>
            <hr className="my-1" />
            {selectedWpn.props}
        </div>
    </div>
  );
};

export default WeaponsList;
