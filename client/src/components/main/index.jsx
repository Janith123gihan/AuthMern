

const Main =()=>{

    const handleLogout =()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }


    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-12">
                <h1>FakeBook</h1>
                <button className="btn btn-primary" onClick={handleLogout}>
                    Logout
                </button>

                </div>
                
            </div>
        </div>
    )
};

export default Main;