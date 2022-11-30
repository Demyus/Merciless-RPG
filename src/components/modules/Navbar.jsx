
const Navbar = props => {
    return (
        <div className="row ">
        <div className="text-center col-sm-2"><label data-for="char_name">Character Name</label><input className="form-control form-control-sm" type="text" model="name" id="char_name" /></div>
        <div className="text-center col"><label data-for="char_age">Age</label><input model="age" className="form-control form-control-sm" type="text" name="" id="char_age" /></div>
        <div className="text-center col"><label data-for="char_height">Height</label><input model="charheight" className="form-control form-control-sm" type="text" name="" id="char_height" /></div>
        <div className="text-center col-sm-2"><label data-for="char_race">Race</label>
            <select name="char_race" id="char_race" className="form-select form-select-sm" change="selectrace($event)" model="race">
                <option value="human">Human [Max 5 attributes | 2 perks at creation]</option>
                <option value="elf">Elf [Max AGI 6 | Max STAM 4 | Low light Vision]</option>
                <option value="dwarf">Dwarf [Max STAM 6 | Max AGI 4 | Darkvision]</option>
                <option value="goblin">Goblin [Max STAM, STR 4 | Max Weapon Prof 6 | Max Evocation 6 | Low light vision]</option>
                <option value="halfelf">Half-Elf [Max STAM 4 | Max CHA 6 | Low light vision]</option>
                <option value="orc">Orc [Max STR, STAM 6 | Max AGI 3 | Low light vision]</option>
                <option value="halfling">Halfling [Max STR 4 | Max AGI 6 | Starts with GUTS perk]</option>
            </select>
        </div>
        <div className="text-center col px-0"><label data-for="char5">Religion</label><input model="chareligion" className="form-control form-control-sm" type="text" name="" id="char5" /></div>
        <div className="text-center col pe-0"><label data-for="char6">Sex</label><input model="sex" className="form-control form-control-sm" type="text" name="" id="char6" /></div>
        <div className="text-center col pe-0"><label data-for="char7">Weight</label><input model="charweight" className="form-control form-control-sm" type="text" name="" id="char7" /></div>
        <div className="text-center col pe-0"><label data-for="char8">EXP</label><input model="charexp" className="form-control form-control-sm" type="number" name="" id="char8" /></div>
        <div className="col text-center d-grid">
            <label data-for="">Journal</label>
            <button data-bs-toggle="modal" data-bs-target="#journal" className="btn btn-success btn-sm"><i className="bi-pencil-square"></i></button>
        </div>
        <div className="col-sm-2 text-center  pe-xxl-5">
            <label data-for="">Last Save: lastsave</label><br />
            <div className="d-flex justify-content-around">
                <button className="btn btn-sm btn-primary" click="savedata()">Save</button>
                <button className="btn btn-sm btn-dark" click="loadlast()">Load</button>
                <button className="btn btn-sm btn-danger" click="clearlocal()">Delete</button>
                <button className="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#settings"><i className="bi-gear-fill"></i></button>
                <button className="btn btn-danger btn-sm"><i className="bi bi-unlock-fill"></i></button>
            </div>
        </div>
    </div>
    )
}

export default Navbar;