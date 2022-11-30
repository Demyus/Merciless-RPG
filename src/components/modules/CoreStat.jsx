import Stats from "./Stats";
import Card from "../ui/Card";

const CoreStat = props => {
    return (
        <Card>
            <h4 className="text-center boldu">{props.type}</h4>
            { props.type === 'Physical' ? 
            <>
                <Stats type="Strength"></Stats>
                <Stats type="Agility"></Stats>
                <Stats type="Stamina"></Stats>
                <Stats type="Edge"></Stats>  
            </> 
            : 
            <>
                <Stats type="Logic"></Stats>
                <Stats type="Intuition"></Stats>
                <Stats type="Charisma"></Stats>
                <Stats type="Power"></Stats>  
            </>
            }           
        </Card>
    )
}

export default CoreStat;
