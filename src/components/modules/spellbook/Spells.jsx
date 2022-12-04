
const Spells = (props) => {
    return (
        <div class="row mt-3">
            <div class="col-sm-2 pe-0">
                <strong>{props.school}</strong>
                <select class="form-select" v-model="spelldesc" id="count" change="(event) => this.$emit('selectchange', event, count)">
                    <option value="0" >Choose...</option>
                    <optgroup v-for="(spellschool, index1) in magicalarts" key="index1" label="index1">
                        <option v-for="(spell, index) in spellschool" key="spell.name" defaultValue="index1 +' '+index">spell.name</option>
                    </optgroup>
                    
                </select>
            </div>
            <div class=" col-sm-9">
                <strong>Description</strong>
                <textarea class="form-control" disabled id="'desc'+count">spelldesc</textarea>
            </div>
            <div className="col-sm-1 hstack px-0 pt-4">
                <button className="btn btn-lg btn-danger p-2"><i class="bi bi-dash-circle"></i></button> 
                <button className="btn btn-lg btn-success p-2 ms-3"><i class="bi bi-plus-circle"></i></button>
            </div>
        </div>
    )
}

export default Spells