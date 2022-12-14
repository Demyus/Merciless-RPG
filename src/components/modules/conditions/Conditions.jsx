import { useDispatch, useSelector } from "react-redux";
import { conditionActions } from "../../../store/condition-slice";
import Card from "../../ui/Card";
import HearthButton from "./HearthButton";

const Conditions = (props) => {
    const dispatch  = useDispatch();
    const stat = useSelector(state => state.charStats );
    const condition = useSelector(state => state.condition);

    const totalLethal = 5 + (stat.Stamina * 2);
    const totalStun = 5 + stat.Logic;


    let hp = [];
    let stun = [];
    let hpDmged = [];
    let stunDmged = [];

    const updateCurrentDmg = () => {
        dispatch(conditionActions.setTotal({ type:"Lethal", amount: totalLethal }))
        dispatch(conditionActions.setTotal({ type:"Stun", amount: totalStun }))
    }

    for (let x = 0; x < totalLethal; x++) {
        if(x < condition.lethalDmg) {            
            hpDmged.push(<HearthButton type="Lethal" key={`hertoDmg${x}`}  dmged={true} />)
        } else {
            hp.push(<HearthButton type="Lethal" key={`herto${x}`} dmged={false}  />)
        }
    }

    for (let x = 0; x < totalStun; x++) {
        if(x < condition.stunDmg) {            
            stunDmged.push(<HearthButton type="Stun" key={`stunDmg${x}`} dmged={true} />)
        } else {
            stun.push(<HearthButton type="Stun" key={`stun${x}`} dmged={false} />)
        }
    }

    updateCurrentDmg();

    return (
        <Card>
            <h4 className="text-center boldu">Condition</h4>
            <div className="row" id="healthtrack">
                <div className="col-sm-6 text-center">
                    <strong>Stun</strong> [{totalStun - condition.stunDmg}/{condition.totalStun}]<br />
                    <small>5 + [LOG]</small>
                    <br />
                    <div className="text-start">
                        {stun}{stunDmged}
                    </div>
                </div>

                <div className="col-sm-6 text-center">
                    <strong>Lethal</strong> [{totalLethal - condition.lethalDmg}/{condition.totalLethal}]<br />
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