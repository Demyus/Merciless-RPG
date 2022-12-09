import WeaponCustomInput from "./WeaponCustomInput";

const WeaponCustom = props => {
    const customSlot = props.custom === 1 ? '1' : '2';
    return (
        <div className="row mb-2" id="customWPN1">
            <div className="pb-1  col-sm-3">
                <WeaponCustomInput name="Name" custom={`custom_${customSlot}_name`} />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <WeaponCustomInput name="Hit" custom={`custom_${customSlot}_hit`} />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <WeaponCustomInput name="Type" custom={`custom_${customSlot}_type`} />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <WeaponCustomInput name="Reach" custom={`custom_${customSlot}_reach`} />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <WeaponCustomInput name="Damage" custom={`custom_${customSlot}_damage`} />
            </div>
            <div className="pb-1  col">
                <WeaponCustomInput name="Properties" custom={`custom_${customSlot}_properties`} />
            </div>
        </div>
    )
} 

export default WeaponCustom;