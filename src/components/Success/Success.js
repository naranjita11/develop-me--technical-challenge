const Success = ({ winner }) => {

    return (
    <div>
        <div className="jumbotron mt-4 mb-4 text-center successBanner" style={{ color: "white"}}>
            <h1 className="mb-4">Well done, { winner }!</h1>
            <h2 className="mb-4">Well done, { winner }!</h2>
            <h3 className="mb-4">Well done, { winner }!</h3>
            <h4 className="mb-4">Well done, { winner }!</h4>
            <h5 className="mb-4">Well done, { winner }!</h5>
            <h6 className="mb-4">Well done, { winner }!</h6>
        </div>
    </div>
    );
}

export default Success;