
const RaceSelect = props => {
    return (
        <select name="char_race" id="char_race" className="form-select form-select-sm" change="selectrace($event)" model="race" defaultValue="human">
            <option key="r1" value="human">Human [Max 5 attributes | 2 perks at creation]</option>
            <option key="r2" value="elf">Elf [Max AGI 6 | Max STAM 4 | Low light Vision]</option>
            <option key="r3" value="dwarf">Dwarf [Max STAM 6 | Max AGI 4 | Darkvision]</option>
            <option key="r4" value="goblin">Goblin [Max STAM, STR 4 | Max Weapon Prof 6 | Max Evocation 6 | Low light vision]</option>
            <option key="r5" value="halfelf">Half-Elf [Max STAM 4 | Max CHA 6 | Low light vision]</option>
            <option key="r6" value="orc">Orc [Max STR, STAM 6 | Max AGI 3 | Low light vision]</option>
            <option key="r7" value="halfling">Halfling [Max STR 4 | Max AGI 6 | Starts with GUTS perk]</option>
        </select>
    )
}

export default RaceSelect;