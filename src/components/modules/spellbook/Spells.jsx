
import { spellsActions } from "../../../store/spells-slice";
import { useDispatch } from "react-redux";

const Spells = (props) => {
    const dispatch = useDispatch();

    const getSpells = () => {
        console.log(props.spells[0]);
    }


    return (
        <div className="row mt-3">
            <div className="col-sm-2 pe-0">
                <strong>{props.school}</strong>
                <select onChange={getSpells} className="form-select" defaultValue={0}>
                    <option value="N/A" >Choose...</option>
                    { Object.keys(props.spells).map((school, i) => {
                        return(
                            <optgroup key={`skul${i}`} label={school}>                                
                                <option value={1}>spell.name</option>
                            </optgroup>
                        )
                    }) }
                    
                    
                </select>
            </div>
            <div className=" col-sm-9">
                <strong>Description</strong>
                <textarea className="form-control" disabled id="'desc'+count" defaultValue="..."></textarea>
            </div>
            <div className="col-sm-1 hstack px-0 pt-4">
                <button className="btn btn-lg btn-danger p-2"><i className="bi bi-dash-circle"></i></button> 
                <button className="btn btn-lg btn-success p-2 ms-3"><i className="bi bi-plus-circle"></i></button>
            </div>
        </div>
    )
}

export default Spells