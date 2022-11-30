

const ArmorsList = (props) => {
    return (
        <div>
            <select id="pcarmor" className="form-select mb-1" v-on-change="(event) => this.$emit('selectchange', event)">
                <option disabled selected>Choose...</option>
                <optgroup v-for="(armor, index) in armors" key="index"  label="index" >
                    <option v-for="(arms, index2) in armor" key="index2" value="index+' '+index2">arms.name arms.reqs</option>
                </optgroup>
            </select>
            <div className="text-center mt-3">
                <h4>DR: armor2 <br/> other2 </h4>
                
            </div>
        </div>
    )
}

export default ArmorsList;