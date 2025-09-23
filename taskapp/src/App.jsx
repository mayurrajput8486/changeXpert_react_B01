import Iphone from "./components/Iphone"
import Nothing from "./components/Nothing"
import Oneplus from "./components/Oneplus"
import Samsung from "./components/Samsung"
import './App.css'
const App = () => {

  const samsung = {
    model : "Samsung Galaxy S24 5G Snapdragon (Marble Gray, 128 GB) - Rs. 65000",
    rating : 4.8,
    storagedetails : '8GB | 128 GB',
    screen : "15.75 cm (6.2 inch) Full HD+ Display",
    camera : "50MP + 12MP | 12MP Front Camera",
    battery : "4000 mAh Battery",
    processor : "8 Gen 3 Processor"

  }

  const iphone = {
    model : "Iphone !7 (Marble Gray, 256 GB) - Rs. 82000",
    rating : 4.9,
    storagedetails : '8GB | 256 GB',
    screen : "15.75 cm (6.2 inch) Full HD+ Display",
    camera : "50MP + 12MP | 12MP Front Camera",
    battery : "4000 mAh Battery",
    processor : "8 Gen 3 Processor"
  }

  const oneplus = {
    model : "One Plus 13 5G Snapdragon (Marble Gray, 128 GB) - Rs. 60000",
    rating : 4.6,
    storagedetails : '8GB | 128 GB',
    screen : "15.75 cm (6.2 inch) Full HD+ Display",
    camera : "50MP + 12MP | 12MP Front Camera",
    battery : "4000 mAh Battery",
    processor : "8 Gen 3 Processor"
  }

  const nothing = {
    model : "Nothing 3 5G Snapdragon (Marble Gray, 128 GB) - Rs. 72000",
    rating : 4.3,
    storagedetails : '8GB | 128 GB',
    screen : "15.75 cm (6.2 inch) Full HD+ Display",
    camera : "50MP + 12MP | 12MP Front Camera",
    battery : "4000 mAh Battery",
    processor : "8 Gen 3 Processor"
  }

  return (
    <div className="container">
      <h1 style={{textAlign : 'center', marginTop : '50px'}}>Welcome to Shopify</h1>
      <div className="gallery">
        <Samsung  item1={samsung}/>
        <Iphone item2={iphone}/>
        <Oneplus item3={oneplus}/>
        <Nothing item4={nothing}/>
      </div>

    </div>
  )
}

export default App