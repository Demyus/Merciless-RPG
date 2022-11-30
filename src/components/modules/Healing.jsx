
import Card from "../ui/Card";
import Healpots from "../Healpots";
import HealPota from "./HealPota";



const Healing = (props) => {

    return (
        <Card>
            <div className="col">
                <h4 className="text-center">Healing</h4>
                <HealPota type="Basic Potions" healFor="Heal 3"  ></HealPota>
                <HealPota type="STA Potions" healFor="Heal STA+2"  ></HealPota>
                <HealPota type="Full Potions" healFor="Full Heal"  ></HealPota>
                <HealPota type="Healing Kit" healFor="Heal Hits"  ></HealPota>
                <HealPota type="Healing Kit+2" healFor="Heal Hits +2"  ></HealPota>
            </div>
        </Card>
    )
}

export default Healing;