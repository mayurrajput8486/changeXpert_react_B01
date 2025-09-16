import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
const App = () =>{
  return(
    <div>
      <h1 style={{color : 'orangered', textDecoration : 'underline', textAlign : 'center' }}>Welcome to React.js</h1>
      <div style={{textAlign : 'center', fontSize : '25px', fontWeight : 'bold'}}>
        React is used to create Single Page Application
      </div>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}
export default App;