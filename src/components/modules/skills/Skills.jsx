
import Skill from "./Skill";

const Skills = (props) => {
  return (
    <div className="row" id="skillz">
      <div id="skillsstr" className="col">
          <h4 className="text-center">STR <span className="skillStr">[str]</span></h4>
          <Skill type="Athletics"></Skill>
          <Skill type="Swiming"></Skill>
      </div>

      <div id="skillsstr" className="col">
          <h4 className="text-center">AGI <span className="skillStr">[agi]</span></h4>
          <Skill type="Stealth"></Skill>
          <Skill type="Thievery"></Skill>
          <Skill type="Acrobatics"></Skill>
      </div>

      <div id="skillsstr" className="col">
          <h4 className="text-center">CHA <span className="skillStr">[cha]</span></h4>
          <Skill type="Religion"></Skill>
          <Skill type="Etiquette"></Skill>
          <Skill type="Intimidation"></Skill>
          <Skill type="Deceive"></Skill>
          <Skill type="Persuasion"></Skill>
      </div>

      <div id="skillsstr" className="col">
          <h4 className="text-center">INT <span className="skillStr">[int]</span></h4>
          <Skill type="Perception"></Skill>
          <Skill type="Survival"></Skill>
          <Skill type="Insight"></Skill>
          <Skill type="Tracking"></Skill>
      </div>

      <div id="skillsstr" className="col">
          <h4 className="text-center">LOG <span className="skillStr">[log]</span></h4>
          <Skill type="Arcana"></Skill>
          <Skill type="First Aid"></Skill>
          <Skill type="Alchemy"></Skill>
      </div>
  </div>
  );
};

export default Skills;
