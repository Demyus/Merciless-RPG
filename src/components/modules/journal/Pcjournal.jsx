

const Pcjournal = (props) => {
    return (
        <div className="modal fade" id="journal" tabIndex="-1" aria-labelledby="journalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
            <div className="modal-content bg-dark">
                <div className="modal-header">
                <h5 className="modal-title" id="journalLabel">Player Journal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col px-0">
                        <label htmlFor="j1">Quests</label>
                            <textarea name="" id="j1" className="form-control" cols="30" rows="5"  v-on-change="(event) => this.$emit('journalchange', event)"> notes </textarea>
                        </div>
                        <div className="col pe-0">
                            <label htmlFor="j2">Etc</label>
                            <textarea name="" id="j2" className="form-control" cols="30" rows="5"  v-on-change="(event) => this.$emit('journalchange', event)"> notes2 </textarea>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col px-0">
                            <label htmlFor="j3">General Notes</label>
                            <textarea name="" id="j3" className="form-control" cols="30" rows="10"  v-on-change="(event) => this.$emit('journalchange', event)"> notes3 </textarea>
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

export default Pcjournal