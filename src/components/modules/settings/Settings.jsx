
const Settings = (props) => {
    return (
        <div className="modal fade" id="settings" tabIndex="-1" aria-labelledby="settingsLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                    <h5 className="modal-title" id="settingsLabel">Settings</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="container-fluid">
                        <div className="row mt-3">
                            <div className="col px-0">
                                <label htmlFor="j3">General Notes</label>
                                <textarea name="" id="j3" className="form-control" cols="30" rows="10"  v-on-change="(event) => this.$emit('journalchange', event)"></textarea>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings