
import Skill from "./Skill";
import { useSelector } from "react-redux";

const Skills = (props) => {
    const stat = useSelector(state => state.charStats);
  return (
    <div className="row" id="skillz">
      <div className="col">
          <h4 className="text-center">STR <span className="skillStr">[{stat.Strength}]</span></h4>
          <Skill skill="Athletics" stat="Strength"></Skill>
          <Skill skill="Swiming"   stat="Strength"></Skill>
      </div>

      <div className="col">
          <h4 className="text-center">AGI <span className="skillStr">[{stat.Agility}]</span></h4>
          <Skill skill="Stealth"    stat="Agility"></Skill>
          <Skill skill="Thievery"   stat="Agility"></Skill>
          <Skill skill="Acrobatics" stat="Agility"></Skill>
      </div>

      <div className="col">
          <h4 className="text-center">CHA <span className="skillStr">[{stat.Charisma}]</span></h4>
          <Skill skill="Religion"     stat="Charisma" ></Skill>
          <Skill skill="Etiquette"    stat="Charisma" ></Skill>
          <Skill skill="Intimidation" stat="Charisma" ></Skill>
          <Skill skill="Deceive"      stat="Charisma" ></Skill>
          <Skill skill="Persuasion"   stat="Charisma" ></Skill>
      </div>

      <div className="col">
          <h4 className="text-center">INT <span className="skillStr">[{stat.Intuition}]</span></h4>
          <Skill skill="Perception" stat="Intuition"></Skill>
          <Skill skill="Survival"   stat="Intuition"></Skill>
          <Skill skill="Insight"    stat="Intuition"></Skill>
          <Skill skill="Tracking"   stat="Intuition"></Skill>
      </div>

      <div className="col">
          <h4 className="text-center">LOG <span className="skillStr">[{stat.Logic}]</span></h4>
          <Skill skill="Arcana"    stat="Logic" ></Skill>
          <Skill skill="First Aid" stat="Logic" ></Skill>
          <Skill skill="Alchemy"   stat="Logic" ></Skill>
      </div>
  </div>
  );
};

export default Skills;
