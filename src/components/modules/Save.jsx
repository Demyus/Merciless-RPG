import { useState } from "react";

const Save = (props) => {
    const [fortitude, setFortitude] = useState(0)

    return (
        <div className="row">
            <div className="col-sm-9">
                <strong>{props.type}</strong> <br /> <small>[{props.stat1} + {props.stat2} + OTHER]</small>
            </div>
            <div className="col-sm-3">
                <input className="form-control form-control-sm text-center" type="text" name="" disabled id="fortSave" value={fortitude} />
            </div>
        </div>
    )
}

export default Save