import PerksList from "./PerksList";
import Card from "../../ui/Card";

const Perks = (props) => {
  return (
    <Card>
        <h4 className="text-center boldu">Perks</h4>
        <div className="col-sm-12">
            <p id="racial_feat"><b>Racial Feat:</b> other</p>
        </div>
        <PerksList data-v-for="item in 5" data-v-on-selectchange="updateperks"></PerksList>
        <PerksList data-v-for="item in 5" data-v-on-selectchange="updateperks"></PerksList>
        <PerksList data-v-for="item in 5" data-v-on-selectchange="updateperks"></PerksList>
        <PerksList data-v-for="item in 5" data-v-on-selectchange="updateperks"></PerksList>
        <PerksList data-v-for="item in 5" data-v-on-selectchange="updateperks"></PerksList>
    </Card>
  );
};

export default Perks;
