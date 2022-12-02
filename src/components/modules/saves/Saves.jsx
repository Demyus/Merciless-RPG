
import Save from "./Save";
import Card from "../../ui/Card";

const Saves = props => {

    return (
        <Card>
            <h4 className="text-center boldu">Saves</h4>
            <Save type='Fortitude' stat1='STR' stat2='STAM' ></Save>
            <Save type='Reflex'    stat1='AGI' stat2='INT' ></Save>
            <Save type='Resolve'   stat1='LOG' stat2='CHA' ></Save>          
        </Card>
    )
}

export default Saves;
