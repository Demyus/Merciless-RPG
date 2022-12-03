
const SpellsMagicalArts = (props) => {

    return (
        <div class="row mt-3">
            <div class="col-sm-2 pe-0">
                <strong>Name</strong>
                <select class="form-select" v-model="spelldesc" id="count" change="(event) => this.$emit('selectchange', event, count)">
                    <option value="0" >Choose...</option>
                    <optgroup v-for="(spellschool, index1) in magicalarts" key="index1" label="index1">
                        <option v-for="(spell, index) in spellschool" key="spell.name" value="index1 +' '+index">spell.name</option>
                    </optgroup>
                    
                </select>
            </div>
            <div class=" col-sm-10">
                <strong>Description</strong>
                <textarea class="form-control" readonly id="'desc'+count">spelldesc</textarea>
            </div>
        </div>
    )

}

export default SpellsMagicalArts