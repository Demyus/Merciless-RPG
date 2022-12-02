
const Save = (props) => {

    return (
        <div className="row">
            <div className="col-sm-9">
                <strong>{props.type}</strong> <br /> <small>[{props.stat1} + {props.stat2} + OTHER]</small>
            </div>
            <div className="col-sm-3">
                <input className="form-control form-control-sm text-center" type="text" name="" disabled id="fortSave" value="0" />
            </div>
        </div>
    )
}

export default Save