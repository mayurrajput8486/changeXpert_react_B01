import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/counter'
import CartValue from './components/CartValue'
import TempApp from './components/TempApp'
import TempControlApp from './components/TempControlApp'
const App = () => {
  return (
    <div className='text-primary text-center'>
      {/* <Counter/>
      <CartValue/> */}
      <TempApp/>
      {/* <TempControlApp/> */}
    </div>
  )
}

export default App