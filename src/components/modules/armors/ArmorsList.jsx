import { useState, useRef } from "react";
import { charStatActions } from "../../../store/stats-slice";
import { useDispatch, useSelector } from "react-redux";

const armors = [
    { Light: [
        { id: 1, type: 'Clothes', name: 'Robes'     , dmg: '1d4'   , encumbrance: 1 , reqs: 0, init: 3, dodge: 2, other: '+1 Casting'},
        { id: 2, type: 'Light  ', name: 'Leather'   , dmg: '1d6'   , encumbrance: 4 , reqs: 1, init: 3, dodge: 2, other: ''},
        { id: 3, type: 'Light  ', name: 'Hide Armor', dmg: '1d6+1' , encumbrance: 5 , reqs: 1, init: 0, dodge: 1, other: ''},
    ]},
    {Medium: [
        { id: 4, type: 'Medium ', name: 'Chain Mail', dmg: '1d8'   , encumbrance: 7 , reqs: 3, init: -1, dodge: -1, other: ''},
        { id: 5, type: 'Medium ', name: 'Scale Mail', dmg: '1d8+1' , encumbrance: 9 , reqs: 3, init: -2, dodge: -2, other: ''},
    ]},
    {Heavy: [
        { id: 6, type: 'Heavy  ', name: 'Half Plate', dmg: '1d10'  , encumbrance: 12, reqs: 4, init: -3, dodge: -3, other: ''},
        { id: 7, type: 'Heavy  ', name: 'Full Plate', dmg: '1d10+1', encumbrance: 13, reqs: 4, init: -4, dodge: -4, other: ''},
    ]}
]

const ArmorsList = (props) => {
    const dispatch = useDispatch();
    const [damageReduction, setDamageReduction] = useState('N/A');
    const [other, setOther] = useState('');
    const profs = useSelector(state => state.charStats)
    const selectedArmor = useRef();

    const updateArmor = (e) => {
        //console.log('armor is:', selectedArmor.current.selectedOptions[0].dataset.dmg);
        setDamageReduction(selectedArmor.current.selectedOptions[0].dataset.dmg)
        setOther(selectedArmor.current.selectedOptions[0].dataset.other)
        dispatch(charStatActions.setStat({stat: 'currentArmor',     amount: +selectedArmor.current.value }))
        dispatch(charStatActions.setStat({stat: 'armorDodge',       amount: +selectedArmor.current.selectedOptions[0].dataset.dodge }))
        dispatch(charStatActions.setStat({stat: 'armorEncumbrance', amount: +selectedArmor.current.selectedOptions[0].dataset.encumbrance }))
        dispatch(charStatActions.setStat({stat: 'armorInit',        amount: +selectedArmor.current.selectedOptions[0].dataset.init }))
        //console.log('armor is:', e.target.selectedOptions[0].dataset.dmg); currentArmor
    }

    return (
        <div>
            <select id="pcarmor" className="form-select mb-1" onChange={updateArmor} ref={selectedArmor} defaultValue="N/A">
                <option value="N/A" key={'armor'+0} data-dmg="N/A"  data-other=""  data-encumbrance={0} data-init={0} data-dodge={0} >No Armor</option>                
                { armors.map(armor => {
                    return (
                        <optgroup label={Object.keys(armor)} key={'parent'+Object.keys(armor)} >
                            {
                                armor[Object.keys(armor)].map(item => {
                                    return (
                                    <option disabled={profs.Armor < item.reqs ? 'disabled' : ''} 
                                    value={item.id} 
                                    key={'armor'+item.id} 
                                     data-dmg={item.dmg} 
                                     data-encumbrance={item.encumbrance}
                                     data-init={item.init}
                                     data-dodge={item.dodge}
                                     data-other={item.other}
                                    > 
                                        {item.name} [Arm {item.reqs}]
                                    </option>)
                                })
                            }
                        </optgroup>
                    )
                })}
            </select>
            <div className="text-center mt-3">
                <h4>DR: {damageReduction} <br/> {other} </h4>
                
            </div>
        </div>
    )
}

export default ArmorsList;