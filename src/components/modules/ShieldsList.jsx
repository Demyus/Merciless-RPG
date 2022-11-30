

const ShieldLists = (props) => {
    return (
        <div>
            <select name="shields" id="shield" className="form-select" v-on-change="(event) => this.$emit('selectchange', event)">
                <option v-for="(shield, index) in shields" selected="shldslctd==shield.name"  key="shield.name" value="shield.name">shield.name shield.reqs</option>
            </select>
            <div className="text-center mt-3">
                <h4>Parry: bloodnsteel? (shield2) + 1 : shield2</h4>
            </div>
        </div>
    )
}

export default ShieldLists;