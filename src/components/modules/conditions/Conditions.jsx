import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { conditionActions } from "../../../store/condition-slice";

import Card from "../../ui/Card";

import HearthButton from "./HearthButton";


const Conditions = (props) => {
    const dispatch  = useDispatch();
    const stat = useSelector(state => state.charStats );
    const condition = useSelector(state => state.condition);
    const [currentLethal, setCurrentLethal] = useState(5);
    const [currentStun, setCurrentStun] = useState(5);

    let hp = [];
    let stun = [];
    let hpDmged = [];
    let stunDmged = [];

    const updateCurrentDmg = () => {
        const existingLethalDmg = condition.totalLethal - condition.lethalDmg;
        setCurrentLethal(existingLethalDmg);

        const existingStunDmg = condition.totalStun - condition.stunDmg;
        setCurrentStun(existingStunDmg);
    }


    useEffect(() => {
        const totalLethalHp = 5+((stat.Stamina)*2);
        dispatch(conditionActions.setTotal({type: 'Lethal', amount: totalLethalHp}));
        
        const totalStunHp = 5 + stat.Logic;
        dispatch(conditionActions.setTotal({type: 'Stun', amount: totalStunHp}));

        updateCurrentDmg();

    },[stat.Stamina, stat.Logic, condition.lethalDmg, condition.stunDmg, condition.totalLethal, condition.totalStun]);

    const doDmg = (type) => {
        if(type==="Lethal") {
            dispatch(conditionActions.addDmg('Lethal'));
            updateCurrentDmg();
            
        } else {            
            dispatch(conditionActions.addDmg('Stun'));
            updateCurrentDmg();
        }
    }

    const removeDmg = (type) => {
        if(type==="Lethal") {
            dispatch(conditionActions.removeDmg('Lethal'));
            const existingLethalDmg = condition.totalLethal - condition.lethalDmg;
            setCurrentLethal(existingLethalDmg);
        } else {
            dispatch(conditionActions.removeDmg('Stun'));
            const existingStunDmg = condition.totalStun - condition.stunDmg;
            setCurrentStun(existingStunDmg);
        }
    }

        for (let x = 0; x < currentLethal; x++) {
            hp.push(<HearthButton type="Lethal" key={x} doDmg={doDmg} removeDmg={removeDmg} dmged={false}  />)
        }
        for (let z = 0; z < condition.lethalDmg; z++) {
            hpDmged.push(<HearthButton type="Lethal" key={z} doDmg={doDmg} removeDmg={removeDmg}  dmged={true} />)
        }
    
        for (let y = 0; y < currentStun; y++) {
            stun.push(<HearthButton type="Stun" key={y} doDmg={doDmg} removeDmg={removeDmg} dmged={false} />)
        }
        for (let w = 0; w < condition.stunDmg; w++) {
            stunDmged.push(<HearthButton type="Stun" key={w} doDmg={doDmg} removeDmg={removeDmg} dmged={true} />)
        }
   
    
    return (
        <Card>
            <h4 className="text-center boldu">Condition</h4>
            <div className="row" id="healthtrack">
                <div className="col-sm-6 text-center">
                    <strong>Stun</strong> [{currentStun}/{condition.totalStun}]<br />
                    <small>5 + [LOG]</small>
                    <br />
                    <div className="text-start">
                        {stun}{stunDmged}
                    </div>
                </div>

                <div className="col-sm-6 text-center">
                    <strong>Lethal</strong> [{currentLethal}/{condition.totalLethal}]<br />
                    <small>5 + [STAM X 2]</small>
                    <br />
                    <div className="text-start">
                        {hp}{hpDmged}
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Conditions;