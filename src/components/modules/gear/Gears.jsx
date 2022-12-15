
const Gears = (props) => {
  const gears = props.gearList;

  //console.log(gears)

  return (
    <div className="mb-2">
        <select className="form-select mb-1"  defaultValue={0}>
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
