import PerksList from "./PerksList";
import Card from "../../ui/Card";

const Perks = (props) => {
  return (
    <Card>
        <h4 className="text-center boldu">Perks</h4>
        <div className="col-sm-12">
            <p id="racial_feat"><b>Racial Feat:</b> other</p>
        </div>
        <PerksList slot="slot1"></PerksList>
        <PerksList slot="slot2"></PerksList>
        <PerksList slot="slot3"></PerksList>
        <PerksList slot="slot4"></PerksList>
        <PerksList slot="slot5"></PerksList>
    </Card>
  );
};

export default Perks;
