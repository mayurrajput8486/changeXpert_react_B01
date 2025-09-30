import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/counter'
import CartValue from './components/CartValue'
const App = () => {
  return (
    <div className='text-primary text-center'>
      <h1>Learn useState() hook - State in React</h1>
      <Counter/>
      <CartValue/>
    </div>
  )
}

export default App