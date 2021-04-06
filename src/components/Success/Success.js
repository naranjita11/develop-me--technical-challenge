const Success = ({ winner }) => {

    // const successStyling = {
    //     backgroundColor: "gold",
    // }
     
    return (
    <div>
        <header className="jumbotron mt-4 mb-4 text-center" style={{ backgroundColor: "gold" }}>
            <h1>Well done, { winner }!</h1>
        </header>
        <header className="jumbotron mt-4 mb-4 text-center" style={{ backgroundColor: "#61dafb" }}>
            <h1>Well done, { winner }!</h1>
        </header>
        <header className="jumbotron mt-4 mb-4 text-center" style={{ backgroundColor: "cornflowerblue" }}>
            <h1>Well done, { winner }!</h1>
        </header>
    </div>
    );
}

export default Success;