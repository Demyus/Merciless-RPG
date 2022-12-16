
import Card from "../../ui/Card";
import InputWealth from "./InputWealth";

const Wealth = (props) => {
  

  return (
    <Card>
        <h4 className="boldu">Wealth</h4>
        <div className="col">
            <InputWealth type="Platinum" />
        </div>
        <div className="col">
            <InputWealth type="Gold" />
        </div>
        <div className="col">
            <InputWealth type="Silver" />
        </div>
        <div className="col">
        <InputWealth type="Gems & Jewelry" />
        </div>
        <div className="col">
          <InputWealth type="Rations" />
        </div>
        <div className="clearfix"></div>
    </Card>
  );
};

export default Wealth;
