import Card from "../../ui/Card";
import Gears from "./Gears";

const Gear = (props) => {

  return (
    <Card>
        <div className="row">
            <h4 className="text-center">Gear</h4>
            <div className="col" data-v-for="cols in 3" id="cols">
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
            </div>
            <div className="col" data-v-for="cols in 3" id="cols">
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
            </div>
            <div className="col" data-v-for="cols in 3" id="cols">
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
                <Gears v-for="item in 7" v-on-selectchange="updategear"></Gears>
            </div>
        </div>
    </Card>
  );
};

export default Gear;
