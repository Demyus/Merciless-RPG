
import { useRef, useState } from "react";
import { spellsActions } from "../../../store/spells-slice";
import { useDispatch } from "react-redux";


const Spells = (props) => {
    const dispatch = useDispatch();
    const selectedSpell = useRef();
    const [spellDesc, setSpellDesc] = useState('...')
    

    const addSpell = () => {        
        const spellSchool = selectedSpell.current.selectedOptions[0].dataset.school; 
        const spellToAdd = selectedSpell.current.selectedOptions[0].dataset.name;
        const spellId = selectedSpell.current.value;
        dispatch(spellsActions.addSpell({name: spellToAdd, id: spellId}));

        setSpellDesc(props.spells[spellSchool][spellId].desc);
    }

    const addSlot = () => {
        dispatch(spellsActions.addSlot(props.school));
    }
    const removeSlot = () => {
        dispatch(spellsActions.removeSlot(props.school));
    }

    return (
        <div className="row mt-3">
            <div className="col-sm-2 pe-0">
                <strong>{props.school}</strong>
                <select onChange={addSpell} className="form-select" defaultValue='N/A' ref={selectedSpell}>
                    <option key="001" value="N/A" >Choose...</option>
                    { Object.keys(props.spells).map((school, i) => {
                        return(
                            <optgroup key={`skul${i}`} label={school}>                                
                                { props.spells[school].map(spell => {
                                    return (
                                        <option 
                                        key={`spello${spell.id}`} 
                                        value={spell.id} 
                                        data-name={spell.name}
                                        data-school={school}
                                        >
                                            {spell.name}
                                        </option>
                                    )
                                }) }
                                
                            </optgroup>
                        )
                    }) }
                    
                    
                </select>
            </div>
            <div className=" col-sm-9">
                <strong>Description</strong>
                <textarea className="form-control" disabled id="'desc'+count" value={spellDesc}></textarea>
            </div>
            { props.controls && 
                <div className="col-sm-1 hstack px-0 pt-4">
                    { !props.first && <button onClick={removeSlot} className="btn btn-lg btn-danger p-2"><i className="bi bi-dash-circle"></i></button> }
                    <button onClick={addSlot} className="btn btn-lg btn-success p-2 ms-3"><i className="bi bi-plus-circle"></i></button>
                </div>            
            }
        </div>
    )
}

export default Spells