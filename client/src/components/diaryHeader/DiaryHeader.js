const DiaryHeader = ()=>{
    return(
        <>
            <hr />
                <div className="col-lg-12">
                    <h3 style={{textAlign:"center"}}>{new Date().toLocaleString([],{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</h3>
                </div>
            <hr />
        </>
    );
}










export default DiaryHeader;