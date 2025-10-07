import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Userinfo from './components/Userinfo.jsx'
const App = () => {
  return (
    <div>
      <h3 className='text-center text-primary'>Users details</h3>
      <Userinfo/>
    </div>
  )
}

export default App