import { useRef } from "react";
import { useDispatch } from "react-redux";
import { pcActions } from "../../store/pc-slice";

const Input = props => {

    const dispatch = useDispatch();
    //const pc = useSelector(state => state.pcSlice);
    const inputRef = useRef();

    const saveData = () => {
        dispatch(pcActions.setPc({stat: props.field, value: inputRef.current.value}))
        //console.log(pc[props.field]);
        //console.log(inputRef.current.value);
    }

    return (
        <>
            <label data-for="char_name">{props.name}</label>
            <input onChange={saveData} ref={inputRef} className="form-control form-control-sm" type="text" id={props.name} key={props.name} />
        </>
    )
}

export default Input;