
const Spells = (props) => {
    return (
        <div className="row mt-3">
            <div className="col-sm-2 pe-0">
                <strong>{props.school}</strong>
                <select className="form-select" v-model="spelldesc" change="(event) => this.$emit('selectchange', event, count)" defaultValue={0}>
                    <option value="0" >Choose...</option>
                    <optgroup v-for="(spellschool, index1) in magicalarts" key="index1" label="index1">
                        <option v-for="(spell, index) in spellschool" key="spell.name" value={1}>spell.name</option>
                    </optgroup>
                    
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