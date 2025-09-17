import react from '../assets/reactjs-inner.svg'
const Info = () =>{
    return(
        <div style={{textAlign: 'center'}}>
            <h2>Information About React</h2>
            <img src="./images/react_logo.png" alt="logo" width={250}/>
            <img src={react} alt='logo' width={250}/>
        </div>
    )
}
export default Info;