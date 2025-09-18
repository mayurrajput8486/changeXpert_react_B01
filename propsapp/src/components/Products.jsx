const Products = ({itemdetails}) => {
  return (
    <div>
        <h2>Product details</h2>
        <div style={{fontSize : '25px'}}>  
            <img src={itemdetails.image}/> <br/>
            Product Name - {itemdetails.name} <br/>
            Company - {itemdetails.company} <br/>
            Model - {itemdetails.model} <br/>
            Price - {itemdetails.price}
        </div>
    </div>
  )
}

export default Products