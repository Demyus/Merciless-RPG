import Parryblock from "./Parryblock";
import Card from "../ui/Card";

const Parry = (props) => {
  return (
    <Card>
        <h4 className="text-center boldu">Parry</h4>        
        <Parryblock parryName="Blades"></Parryblock>
        <Parryblock parryName="Blunt"></Parryblock>
        <Parryblock parryName="Pierce"></Parryblock>
    </Card>
  );
};

export default Parry;
