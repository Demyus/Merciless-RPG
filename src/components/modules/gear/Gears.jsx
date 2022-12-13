
const Gears = (props) => {

  return (
    <div className="mb-2">
        <select className="form-select mb-1" id="count"  change="(event) => this.$emit('selectchange', event, count)">
            <option value="0 0" selected disabled>Choose...</option>
            <optgroup v-for="(gear, index1) in gears" key="index1" label="index1" >
                <option v-for="(gea, index) in gear"  id="index1"  key="index" defaultValue="index1 +' '+index">gea.name gea.cost+'GP'</option>
            </optgroup>
        </select>
    </div>
  );
};

export default Gears;
