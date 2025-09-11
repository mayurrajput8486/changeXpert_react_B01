const Home = () =>{

    function callAlert() {
        alert("Alert Call....")
    }
    return(
        <div>
            <h2>I am Home Page</h2>
            <button onClick={callAlert}>Click me</button>
        </div>
        
    )
}
export default Home;