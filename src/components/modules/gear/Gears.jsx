import { useRef } from "react";

const Gears = (props) => {
  const gears = props.gearList;
  const gearo = useRef();

  const gearHandler = () => {
    //console.log(gearo.current.selectedOptions[0].dataset.cost)
  }
  

  return (
    <div className="mb-2">
        <select className="form-select mb-1"  defaultValue={0} onChange={gearHandler} ref={gearo} >
            <option value="0" >Choose...</option>
            {
              gears.map( (item, i) => {
                return(
                  <optgroup key={i} label={Object.keys(item)} >
                    {
                      item[Object.keys(item)].map(equip => {
                          return (
                            <option id={equip.id}  key={equip.id} value={equip.id} data-cost={equip.cost} >{equip.name} - [{equip.cost}GP]</option>
                          )
                      })
                    }
                  </optgroup>
                )
              })
            }
            
                
            
        </select>
    </div>
  );
};

export default Gears;
