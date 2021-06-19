const AddMemoryModal = ()=>{
    return(
        <div className="modal fade" id="addMemoryModal" tabindex="-1" aria-labelledby="addMemoryModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addMemoryModalLabel">New memory</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" className="form-control" placeholder="Enter a title" />
                    <p>Description</p>
                    <textarea name="description" id="description" cols="45" rows="8"></textarea><br />
                    <label htmlFor="date">Date</label>
                    <input type="date" placeholder="date" name="date" id="date" className="form-control"/>
                    <label htmlFor="time">Time</label>
                    <input type="time" name="time" id="time" placeholder="time" className="form-control"/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default AddMemoryModal;