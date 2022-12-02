

const PerksList = (props) => {
  return (
    <div className="row my-2">
        <div className="col-sm-3">
        <select name="" id="id" className="form-select" change="(event) => this.$emit('selectchange', event, id )" >
            <option disabled selected>Select Perk...</option>
            <option v-for="(feat, index) in feats" key="index" value="index"  >feat.name</option>
        </select>
        </div>
        <div className="col-sm-9 ps-1">
        <textarea id="perkdesc" className="form-control" disabled>...</textarea>
        </div>
    </div>
  );
};

export default PerksList;
