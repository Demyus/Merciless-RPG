import PerksList from "./PerksList";
import Card from "../../ui/Card";

const Perks = (props) => {
  return (
    <Card>
        <h4 className="text-center boldu">Perks</h4>
        <div className="col-sm-12">
            <p id="racial_feat"><b>Racial Feat:</b> other</p>
        </div>
        <PerksList key="perk1"></PerksList>
        <PerksList key="perk2"></PerksList>
        <PerksList key="perk3"></PerksList>
        <PerksList key="perk4"></PerksList>
        <PerksList key="perk5"></PerksList>
    </Card>
  );
};

export default Perks;
