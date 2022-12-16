import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gearActions } from "../../../store/gear-slice";

const InputWealth = (props) => {
  const wealth = useSelector((state) => state.gear);
  const dispatch = useDispatch();
  const amountRef = useRef();

  const setWealth = () => {
    dispatch(
      gearActions.setGear({
        gear: props.type,
        amount: +amountRef.current.value,
      })
    );
  };

  return (
    <>
      {props.type}:
      <input
        key={`wealth${props.type}`}
        onChange={setWealth}
        className="form-control form-control-sm mar-top-5"
        type="number"
        name=""
        id={props.type}
        defaultValue={wealth[props.type]}
        ref={amountRef}
      />
    </>
  );
};

export default InputWealth;
