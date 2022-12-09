import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gearActions } from "../../../store/gear-slice";

const WeaponCustom = props => {
    const dispatch = useDispatch();
    const gear = useSelector(state => state.gear)
    
    const nameRef = useRef();
    const hitRef = useRef();
    const typeRef = useRef();
    const reachRef = useRef();
    const damageRef = useRef();
    const propertiesRef = useRef();

    const saveData = () => {
        dispatch(gearActions.setGear({gear: 'name', amount: nameRef.current.value }))
        console.log(gear);
    };

    return (
        <div className="row mb-2" id="customWPN1">
            <div className="pb-1  col-sm-3">
                <b>Name</b>
                <input onChange={saveData} ref={nameRef} type="text" className="form-control form-control-sm"  />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <b>HIT</b>
                <input ref={hitRef} type="text" className="form-control form-control-sm text-center" />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <b>Type</b>
                <input ref={typeRef}
                type="text" className="form-control form-control-sm text-center" />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <b>Reach</b>
                <input ref={reachRef} type="text" className="form-control form-control-sm text-center" />
            </div>
            <div className="pb-1  col-sm-1  text-center">
                <b data-bs-toggle="tooltip" data-bs-placement="top" data-title="'STR + WPN'" >Damage</b>
                <input ref={damageRef} type="text" className="form-control form-control-sm text-center" />
            </div>
            <div className="pb-1  col">
                <b>Properties</b>
                <input ref={propertiesRef} type="text" className="form-control form-control-sm" />
            </div>
        </div>
    )
} 

export default WeaponCustom;