
const WeaponsList = (props) => {
  return (
    <div className="row mb-2">
        <div className=" col-sm-3">
            <b>Name</b>
            <hr className="my-1" />
            <select className="form-select mb-1" change="weaponstats($event)" v-on-change="(event) => this.$emit('selectchange', event, id)">
                <option id="id" value="none" selected>Choose...</option>
                <optgroup v-for="(weapon, parent) in weapons" key="parent" label="parent" >
                    <option selected="wpnselected == weapo.name? 'selected' : '' " v-for="(weapo, index) in weapon" id="id"  key="index" value="parent+' '+index" className="{ 'text-danger': str < weapo.reqs || ranged < weapo.ranged }" >
                        <span>weapo.name</span>
                    </option>
                </optgroup>
            </select>
        </div>
        <div className=" col-sm-1  text-center">
            <b data-bs-toggle="tooltip" data-bs-placement="top" title="'acc + prof + agi + other'" >HIT</b>
            <hr className="my-1" />
            <span v-show="hit == '-'">-</span>
            {/* <span v-show="hit != '-' && type == 'Blades' ">(hit)+(blades)+(agi)</span>
            <span v-show="hit != '-' && type == 'Blunt' ">(hit)+(blunt)+(agi)</span>
            <span v-show="hit != '-' && type == 'Pierce' ">(hit)+(pierce)+(agi)</span>
            <span v-show="hit != '-' && type == 'Ranged' ">(hit)+(ranged)+(agi)</span>
            <span v-show="hit != '-' && type == 'Mechanical' ">(hit)+(ranged)+(agi)</span> */}
        </div>
        <div className=" col-sm-1  text-center">
            <b>Type</b>
            <hr className="my-1" />
                type
        </div>
        <div className=" col-sm-1  text-center">
            <b>Reach</b>
            <hr className="my-1" />
                reach
        </div>
        <div className=" col-sm-1  text-center">
            <b data-bs-toggle="tooltip" data-bs-placement="top" title="'STR + WPN'" >Damage<span v-show="bloodnsteel && type != 'Ranged' && type != 'Mechanical' && hands == 1 ">*</span></b>
            <hr className="my-1" />
            {/* <span v-show="damage != '-' && type != 'Mechanical' && !bloodnsteel ">(str)+damage</span>
            <span v-show="damage != '-' && type != 'Mechanical' && bloodnsteel && type!='Ranged' && hands == 1">(str)+damage+1</span>
            <span v-show="type == 'Mechanical'">damage</span>
            <span v-show="type == 'Ranged' && bloodnsteel ">(str)+damage</span>
            <span v-show="hands == 2 && bloodnsteel && type != 'Ranged' && type != 'Mechanical' ">(str)+damage</span> */}
        </div>
        <div className=" col">
            <b>Properties</b>
            <hr className="my-1" />
            properties
        </div>
    </div>
  );
};

export default WeaponsList;
