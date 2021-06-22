const MessageModal = (props)=>{
    const closeModal = ()=>{
        document.getElementById(props.id).style.display = "none";
        document.getElementById(props.id).classList.remove("show");
    }
    return(        
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby={`${props.id}Label`} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`${props.id}Label`}>{props.title}</h5>
                <button onClick={closeModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {props.body}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
    );
}


export default MessageModal;