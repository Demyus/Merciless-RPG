
import Save from "./Save";
import Card from "../../ui/Card";

const Saves = props => {

    return (
        <Card>
            <h4 className="text-center boldu">Saves</h4>
            <Save type='Fortitude' stat1='Strength' stat2='Stamina' ></Save>
            <Save type='Reflex'    stat1='Agility' stat2='Intuition' ></Save>
            <Save type='Resolve'   stat1='Logic' stat2='Charisma' ></Save>          
        </Card>
    )
}

export default Saves;
