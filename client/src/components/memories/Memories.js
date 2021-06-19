import "./Memories.scss";
import AddMemoryModal from "../addMemoryModal/Addmemorymodal";



const Memories = ()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2">
                    <h2>Memories</h2>
                </div>
                <div className="col-lg-8">
                </div>
                <div className="col-lg-2">
                    <button className="addMemoryBtn" data-bs-toggle="modal" data-bs-target="#addMemoryModal"><i className="bi bi-bookmark-plus"></i></button>
                    <AddMemoryModal/>
                </div>
            </div>
        </div>
    );
}





export default Memories;