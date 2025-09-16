import './Home.css'
const Home = () =>{
    const devname = "Jordan Walke"
    const appname = "Facebook"
    const appDetails = {
        appname : 'JavaScript',
        devname : 'Breden Eich',
        company : 'Netscape Communication',
        year : 1995
    }
    return(
        <div>
            <h2 className='home'>I am Home Page</h2>
            <h2>React.js developed by {devname}</h2>
            <h2>First Time react used in {appname} app</h2>

            <div>The <b>{appDetails.appname}</b> is first introduced by <b>{appDetails.company}</b> company in <b>{appDetails.year}</b> and which is developed by <b>{appDetails.devname}</b></div>
            <br/>
            <form>
                <label htmlFor='fname'>First Name :-</label>
                <input type='text' id='fname'/>
            </form>
        </div>
    )
}
export default Home;