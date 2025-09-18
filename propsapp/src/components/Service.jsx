import Products from "./Products"
const Service = (props) => {

  const item = {
    name : "Mobile",
    company : 'Samsung',
    model : 'S24',
    price : 55000,
    image : './images/s24.jpg'
  }

  return (
    <div style={{backgroundColor: 'lightblue'}}>
        <h2>Service - {props.serviceName}</h2>
        <Products itemdetails={item}/>
    </div>
  )
}

export default Service