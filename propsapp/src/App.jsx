import './App.css'
import Info from './components/Info'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import reactImage from './assets/reactjs-inner.svg'

const App = () =>{
  return(
    <div className='container'>
      <h1 className="heading">Learn Props in React</h1>
      <img src='./images/react_logo.png' alt='reactlogo' width={250}/>
      <img src={reactImage} alt='reactlogo' width={250}/>
      <Info/>
      <Home company="Facebook"/>
      <About aboutus="React is JavaSript Library"/>
      <Service serviceName = "React used to Create Single Page Application"/>
      <Contact contactPerson="Jordan Walke" mobile={7719090215} email='react@meta.in'/>
    </div>
  )
}
export default App;