import { useSelector } from "react-redux";

const Save = (props) => {
    const stat = useSelector(state => state.charStats );
    const saveTotal = stat[props.stat1] + stat[props.stat2];
    return (
        <div className="row">
            <div className="col-sm-9">
                <strong>{props.type}</strong> <br /> <small>[{(props.stat1).slice(0,3).toUpperCase()} + {(props.stat2).slice(0,3).toUpperCase()} + OTHER]</small>
            </div>
            <div className="col-sm-3">
                <input className="form-control form-control-sm text-center" type="text" name="" disabled id={`save${props.type}`} value={ saveTotal } />
            </div>
        </div>
    )
}

export default Save