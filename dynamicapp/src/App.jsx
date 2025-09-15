import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
const App = () =>{
  return(
    <div>
      <Navbar/>
      <h1>Welcome to React.js</h1>
      <Home/>
      <About/>
    </div>
  )
}
export default App;