import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gearActions } from "../../../store/gear-slice";

const WeaponCustomInput = props => {
    const dispatch = useDispatch();
    const customRef = useRef();
    const gear = useSelector(state => state.gear)

    const saveData = () => {
        dispatch(gearActions.setGear({gear: props.custom, amount: customRef.current.value }))
        //console.log(gear);
    };

    return (
        <>
            <b>{props.name}</b>
            <input onChange={saveData} ref={customRef} type="text" className="form-control form-control-sm"  />
        </>
    )
}

export default WeaponCustomInput;