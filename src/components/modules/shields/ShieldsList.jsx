import { useState, useRef } from "react"
import { charStatActions } from "../../../store/stats-slice";
import { useDispatch, useSelector } from "react-redux";


const shields = [
    { id: 0, name: 'None'        , encumbrance: 0, reqs: 0, init:  0, parry: -2 },
    { id: 1, name: 'Buckler'     , encumbrance: 1, reqs: 1, init:  0, parry: 1 },
    { id: 2, name: 'Shield Kite' , encumbrance: 3, reqs: 2, init: -1, parry: 2 },
    { id: 3, name: 'Shield Tower', encumbrance: 5, reqs: 4, init: -3, parry: 3 },
]

const ShieldLists = (props) => {
    const [parry, setParry] = useState(-2);
    const selectedShield = useRef();
    const dispatch = useDispatch();
    const profs = useSelector(state => state.charStats);
    
    const updateShield = (e) => {
        //console.log('Shield is:', selectedShield.current.selectedOptions[0].dataset.parry);
        setParry(selectedShield.current.selectedOptions[0].dataset.parry)        
        dispatch(charStatActions.setStat({stat: 'currentShield',     amount: +selectedShield.current.value }))
        dispatch(charStatActions.setStat({stat: 'shieldParry',       amount: +selectedShield.current.selectedOptions[0].dataset.parry }))
        dispatch(charStatActions.setStat({stat: 'shieldEncumbrance', amount: +selectedShield.current.selectedOptions[0].dataset.encumbrance }))
        dispatch(charStatActions.setStat({stat: 'shieldInit',        amount: +selectedShield.current.selectedOptions[0].dataset.init }))
        //console.log('armor is:', e.target.selectedOptions[0].dataset.dmg); currentArmor
    }

    return (
        <div>
            <select name="shields" id="shield" className="form-select" onChange={updateShield} ref={selectedShield} defaultValue={0}>
                { shields.map(shield => {
                    return (
                        <option key={shield.id} value={shield.id}  disabled={profs.Armor < shield.reqs ? 'disabled' : ''}
                        data-parry={shield.parry} 
                        data-encumbrance={shield.encumbrance} 
                        data-init={shield.init}
                        >{shield.name} [Arm {shield.reqs}]</option>
                    )
                })

                }

                
            </select>
            <div className="text-center mt-3">
                <h4>Parry: {parry}</h4>
            </div>
        </div>
    )
}

export default ShieldLists;