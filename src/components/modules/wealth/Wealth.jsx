import Card from "../../ui/Card";

const Wealth = (props) => {

  return (
    <Card>
        <h4 className="boldu">Wealth</h4>
        <div className="col">
            Platinum:<input className="form-control form-control-sm mar-top-5" type="number" name="" id="platinum" v-model="platinum" />
        </div>
        <div className="col">Gold:<input className="form-control form-control-sm mar-top-5" type="number" name="" id="gold" v-model="gold" /></div>
        <div className="col">Silver: <input className="form-control form-control-sm mar-top-5" type="number" name="" id="silver" v-model="silver" /></div>
        <div className="col">Gems & Jewelry: <input className="form-control form-control-sm mar-top-5" type="number" name="" id="gems" v-model="gems" /></div>
        <div className="col">Rations <input type="number" name="" id="rations" className="form-control form-control-sm" v-model="rations" /></div>
        <div className="clearfix"></div>
    </Card>
  );
};

export default Wealth;
