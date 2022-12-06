import Stats from "./Stats";
import Card from "../../ui/Card";

const CoreStat = props => {
    return (
        <Card>
            <h4 className="text-center boldu">{props.type}</h4>
            { props.type === 'Physical' ? 
            <>
                <Stats key="s1" type="Strength"></Stats>
                <Stats key="s2" type="Agility"></Stats>
                <Stats key="s3" type="Stamina"></Stats>
                <Stats key="s4" type="Edge"></Stats>  
            </> 
            : 
            <>
                <Stats key="s5" type="Logic"></Stats>
                <Stats key="s6" type="Intuition"></Stats>
                <Stats key="s7" type="Charisma"></Stats>
                <Stats key="s8" type="Power"></Stats>  
            </>
            }           
        </Card>
    )
}

export default CoreStat;
