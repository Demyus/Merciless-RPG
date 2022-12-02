
import Card from "../../ui/Card";

import classes from './Conditions.module.css'


const Conditions = (props) => {
    return (
        <Card>
            <h4 className="text-center boldu">Condition</h4>
            <div className="row" id="healthtrack">
                <div className="col-sm-6 text-center">
                    <strong>Stun</strong> [5+(log)]<br />
                    <small>5 + [LOG]</small>
                    <br />
                    <button className={classes.btnNone} click="dmgtoggle" >💙</button>                    
                    <button className={classes.btnNone} click="dmgtoggle" >🤍</button>
                </div>

                <div className="col-sm-6 text-center">
                    <strong>Lethal</strong> [5+((sta)*2)]<br />
                    <small>5 + [STAM X 2]</small>
                    <br />
                    <button className={classes.btnNone} click="dmgtoggle" >❤️</button>                    
                    <button className={classes.btnNone} click="dmgtoggle" >🤍</button>
                </div>
            </div>
        </Card>
    )
}

export default Conditions;