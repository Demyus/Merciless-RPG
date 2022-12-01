

const PerksList = (props) => {
  return (
    <div class="row my-1">
    <div class="col-sm-3 pe-0">
      <select name="" id="id" class="form-select" change="(event) => this.$emit('selectchange', event, id )" >
          <option v-for="(feat, index) in feats" key="index" value="index"  >feat.name</option>
      </select>
      </div>
    <div class="col-sm-9 ps-1">
    <textarea id="perkdesc" class="form-control" disabled>...</textarea>
    </div>
</div>
  );
};

export default PerksList;
