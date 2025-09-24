/* import ChildA from './components/ChildA'

const App = () => {
  return (
    <div style={{textAlign : 'center', fontFamily : 'monospace', backgroundColor: 'crimson', padding: '10px'}}>
      <h2>Props Drilling </h2>
      <h2>To avoid props drilling we use ContextAPI</h2>
      <ChildA greet="Learn Context API"/>
    </div>
  )
}

export default App */

import ChildA from './components/ChildA'
import { AppName, DevName,Appversion, Appmsg, Product1} from './context/mycontext'

const App = () => {

  const product = {
    pName : 'Mobile',
    brand : 'Apple',
    model : 'iphone17',
    price : 82000
  }
  return (
    <div style={{textAlign : 'center', fontFamily : 'monospace', backgroundColor: 'crimson', padding: '10px'}}>
      <h2>Props Drilling </h2>
      <h2>To avoid props drilling we use ContextAPI</h2>
      <AppName.Provider value="ReactJS">
        <DevName.Provider value='Jordan Walke'>
          <Appversion.Provider value='v19'>
            <Appmsg.Provider value="React is used to create SPA">
              <Product1.Provider value={product}>
                  <ChildA/>
              </Product1.Provider>
            </Appmsg.Provider>
          </Appversion.Provider>
        </DevName.Provider>
      </AppName.Provider>
      
    </div>
  )
}

export default App