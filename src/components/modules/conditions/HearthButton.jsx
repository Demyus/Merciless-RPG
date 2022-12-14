import classes from './Conditions.module.css';
import { useDispatch } from 'react-redux';
import { conditionActions } from '../../../store/condition-slice';

const HearthButton = props => {
    const dispatch = useDispatch();

    const dmged = props.dmged;

   const addDmg = () => {
        dispatch(conditionActions.addDmg(props.type))        
    }
    const healDmg = () => {
        dispatch(conditionActions.removeDmg(props.type))
    }
    
    return (
        <>
        {props.type === "Stun" &&
        <>
        { dmged &&  <button onClick={healDmg} className={classes.btnNone} >🤍</button> }
        { !dmged && <button onClick={addDmg} className={classes.btnNone} >💙</button> }
        </>
        }
        {
        props.type === "Lethal" && <>
            { dmged &&  <button onClick={healDmg} className={classes.btnNone} >🤍</button> }
            { !dmged && <button onClick={addDmg} className={classes.btnNone} >❤️</button> }            
        </>
        }            
        </>
    )
}

export default HearthButton;