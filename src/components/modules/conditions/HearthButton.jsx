import { useState } from 'react'
import classes from './Conditions.module.css'

const HearthButton = props => {
const dmged = props.dmged;

   const addDmg = () => {
        props.doDmg(props.type)
    }
    const healDmg = () => {
        props.removeDmg(props.type)
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